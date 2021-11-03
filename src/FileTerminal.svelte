<script>
  import { text } from "svelte/internal";
  import { saveAs } from "./file-saver.js";
  import GenericSerial from "./generic-serial.js";
  import TerminalEmu from "./TerminalEmu.svelte";

  let terminal;

  let serial = new GenericSerial();
  serial.connect_callback = connect_callback;
  serial.disconnect_callback = disconnect_callback;
  serial.send_callback = send_callback;
  serial.receive_callback = receive_callback;

  let connected = false;
  let path = "/";

  const type_enum = Object.freeze({ dir: 1, file: 2, error: 3 });
  let files = [];

  const mode_enum = Object.freeze({ load: 1, view: 2, delete: 3 });
  let mode = mode_enum.load;

  const CLI_PROMPT = ">: ";
  const CLI_EOL = "\r\n";
  function connect_callback() {
    connected = true;
    path = "/";

    serial.send("device_info\r").then(() => {
      serial.read_until("hardware_model").then(() => {
        serial.read_until(CLI_PROMPT).then(() => {
          get_filelist();
          connected = true;
        });
      });
    });
  }

  function disconnect_callback() {
    connected = false;
  }

  function decode(data) {
    return new TextDecoder().decode(data);
  }

  function send_callback(data) {}

  function receive_callback(data) {
    terminal.add_line(decode(data));
  }

  async function get_filelist() {
    await serial.send('storage list "' + path + '"\r');
    await serial.read_until(CLI_EOL);

    serial.read_until(CLI_PROMPT).then((data) => {
      let lines = [];
      let start = 0;
      let stop = 0;

      for (let i = 0; i < data.length; i++) {
        // TODO fix overflow
        if (data[i] == 13 && data[i + 1] == 10) {
          stop = i;
          lines.push(data.slice(start, stop));
          start = i + 2;
        }
      }

      files = [];

      lines.forEach(function (item) {
        let text = "";
        try {
          text = decode(item);
        } catch (error) {}
        text = text.trim();
        if (text.length > 0) {
          if (text == "Empty") {
            // nothing
          } else {
            text = text.split(" ");
            let type = type_enum.error;
            let size = 0;
            let name = "";

            if (text[0] == "[D]") {
              type = type_enum.dir;
              text.shift();
              name = text.join(" ");
              files.push({ type: type, name: name, size: size });
            } else if (text[0] == "[F]") {
              type = type_enum.file;
              size = parseInt(text.at(-1).replace("b", ""));
              text.pop();
              text.shift();
              name = text.join(" ");
              files.push({ type: type, name: name, size: size });
            } else {
              name = text.join(" ");
              files.push({ type: type, name: name, size: size });
            }
          }
        }
      });

      files.sort(function (a, b) {
        if (a.type == type_enum.dir && b.type == type_enum.dir) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        } else if (a.type == type_enum.file && b.type == type_enum.file) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        } else {
          if (a.type == type_enum.dir) {
            return -1;
          } else {
            return 1;
          }
        }
      });
    });
  }

  async function connect() {
    await serial.try_to_connect();
  }

  async function update_path(name) {
    path += "/" + name;
    path = path.replace("//", "/");
    get_filelist();
  }

  async function update_path_up() {
    path = path.substring(0, path.lastIndexOf("/"));
    path = path.replace("//", "/");
    if (path.length == 0) path = "/";
    get_filelist();
  }

  async function download(name) {
    let filepath = path + "/" + name;
    const buffer_size = 512;

    await serial.send(
      'storage read_chunks "' + filepath + '" ' + buffer_size + "\r"
    );
    await serial.read_until(CLI_EOL);

    await serial.read_until(CLI_EOL).then(async (data) => {
      data = decode(data);
      let size = parseInt(data.split(": ")[1]);
      var file_data = new Uint8Array(size);
      let readed_size = 0;

      while (readed_size < size) {
        await serial.read_until("Ready?" + CLI_EOL);
        await serial.send("y");

        let read_size = Math.min(size - readed_size, buffer_size);
        await serial.read_count(read_size).then((buffer) => {
          for (let i = 0; i < buffer.length; i++, readed_size++) {
            file_data[readed_size] = buffer[i];
          }

          console.log("Received ", readed_size, buffer, " from ", filepath);
        });
      }

      if (mode == mode_enum.load) {
        var file_blob = new Blob([file_data], {
          type: "application/octet-stream",
        });
        saveAs(file_blob, name);
      } else if (mode == mode_enum.view) {
        console.log(decode(file_data));
      }

      await serial.read_until(CLI_PROMPT);
      console.log("Readed");
    });
  }

  async function may_be_connected() {
    await serial.on_connect();
  }

  may_be_connected();

  async function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.
    var reader = new FileReader();

    //for (var i = 0, f; (f = files[i]); i++) {
    // TODO multiload
    let f = files[0];
    let name = f.name;
    let size = f.size;

    reader.readAsArrayBuffer(f);
    reader.onload = async () => {
      let data = new Uint8Array(reader.result);
      console.log(name, size, data);

      await serial.send('storage remove "' + path + "/" + name + '"\r');
      await serial.read_until(CLI_EOL);
      await serial.read_until(CLI_PROMPT);

      const fpath = path + "/" + name;
      const buffer_size = 512;
      let sended_size = 0;
      while (sended_size < data.length) {
        let send_size = Math.min(data.length - sended_size, buffer_size);
        let buffer = data.slice(sended_size, sended_size + send_size);
        sended_size += send_size;

        console.log("Sending ", sended_size, buffer, " to ", fpath);
        //terminal.add_line("[" + decode(buffer) + "]");

        await serial.send(
          'storage write_chunk "' + fpath + '" ' + buffer.length + "\r"
        );
        await serial.read_until(CLI_EOL);
        await serial.read_until(CLI_EOL);
        await serial.send_raw(buffer);
        await serial.read_until(CLI_PROMPT);
      }

      get_filelist();
    };
    //}
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "copy"; // Explicitly show this is a copy.
  }

  function switch_mode(new_mode) {
    mode = new_mode;
  }
</script>

<div class="screen">
  <div class="wrapper">
    {#if connected == false}
      <div class="wrapper-button">
        <button on:click={connect}>Connect</button>
      </div>
    {:else}
      <div
        class="wrapper-list"
        on:dragover={handleDragOver}
        on:drop={handleFileSelect}
      >
        <div class="border" />
        <div class="path">{path}</div>
        <div class="file-list">
          {#if path != ""}
            <div class="file is-dir" on:click={() => update_path_up()}>..</div>
          {:else}
            <div class="">&nbsp;</div>
          {/if}
          {#each files as file}
            {#if file.type == type_enum.dir}
              <div class="file is-dir" on:click={() => update_path(file.name)}>
                {file.name}
              </div>
            {:else if file.type == type_enum.file}
              <div class="file is-file" on:click={() => download(file.name)}>
                <div>{file.name}</div>
                <div class="file-size">{file.size}</div>
              </div>
            {:else}
              <div class="file is-error">
                {file.name}
              </div>
            {/if}
          {/each}
        </div>
        <div class="command-list">
          <div
            class="command {mode == mode_enum.load ? 'active' : ''}"
            on:click={() => {
              switch_mode(mode_enum.load);
            }}
          >
            Load
          </div>
          <div
            class="command {mode == mode_enum.view ? 'active' : ''}"
            on:click={() => {
              switch_mode(mode_enum.view);
            }}
          >
            View
          </div>
          <div
            class="command {mode == mode_enum.delete ? 'active' : ''}"
            on:click={() => {
              switch_mode(mode_enum.delete);
            }}
          >
            Del
          </div>
          <div class="command">MkDir</div>
        </div>
      </div>
    {/if}
  </div>
  <div class="wrapper"><TerminalEmu bind:this={terminal} /></div>
</div>

<style>
  button {
    padding: 10px 10px;
    color: #000000;
    background: #bbbbbb;
    text-align: center;
    vertical-align: middle;
    -webkit-box-shadow: 10px 10px 0 #000000;
    -moz-box-shadow: 10px 10px 0 #000000;
    box-shadow: 10px 10px 0 #000000;
    border: 0;
    border-radius: 0;
    margin-bottom: auto;
  }

  button:hover,
  button:focus {
    color: #ffffff;
    text-decoration: none;
    background: #555555;
    outline: 0;
  }

  button:active {
    transform: translate(10px, 10px);
    box-shadow: 0px 0px 0 #000000;
  }

  button:before {
    content: "< ";
  }
  button:after {
    content: " >";
  }

  .screen {
    display: flex;
    height: 100%;
  }

  .wrapper {
    height: 100%;
    position: relative;
    width: 50%;
  }

  .wrapper-button {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 50%;
  }

  .wrapper-list {
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
  }

  .border {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 48px);
    height: calc(100% - 48px);
    border: 4px dashed #ffffff;
    margin: 10px;
    padding: 10px;
    pointer-events: none;
  }

  .file-list {
    width: calc(100% - 48px);
    margin: 28px 24px;
  }

  .path {
    background-color: #007f80;
    color: #000000;
    text-align: center;
    padding: 0 24px;
    top: 0;
    position: absolute;
  }

  .file {
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
  }

  .file:hover {
    background-color: #007f80;
  }

  .file.is-file {
    color: #00cbd6;
  }

  .file.is-error {
    color: red;
    background-color: black;
  }

  .command-list {
    margin-top: auto;
    margin-bottom: 24px;
    display: flex;
    justify-content: flex-start;
    width: calc(100% - 24px);
    flex-wrap: wrap;
    padding-left: 24px;
  }

  .command {
    padding: 0 12px;
    margin-right: 12px;
    background-color: #000000;
  }
  .command.active {
    background-color: #007f80;
  }
  .command:before {
    content: "< ";
  }
  .command:after {
    content: " >";
  }
  .command:hover {
    background-color: #f4ff00;
    color: #000000;
  }
</style>
