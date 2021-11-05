<script>
  import { afterUpdate } from "svelte";

  let lines_container;
  let lines = [];
  let buffer = "";

  export async function add_line(text) {
    buffer = buffer + text;
    buffer = buffer.split("\n");

    if (lines.length > 100) {
      lines.splice(0, lines.length - 100);
    }

    while (buffer.length > 1) {
      let data = buffer.shift();
      data = data.replaceAll("\t", "&nbsp;&nbsp;");
      data = data.replaceAll(" ", "&nbsp;");
      lines = [...lines, data];
    }

    buffer = buffer.join("");
  }

  afterUpdate(() => {
    if (lines_container)
      lines_container.scrollTo(0, lines_container.scrollHeight);
  });
</script>

<div class="terminal">
  <div class="lines" bind:this={lines_container}>
    {#each lines as line}
      <div class="line">
        {@html line}
      </div>
    {/each}
  </div>
</div>

<style>
  .terminal {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: black;
  }

  .lines {
    padding: 24px;
    overflow-y: auto;
    overflow-x: clip;
  }

  .line {
    width: 100%;
    white-space: nowrap;
  }
</style>
