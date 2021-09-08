<script>
  import FileTerminal from "./FileTerminal.svelte";
</script>

<main>
  <FileTerminal />
</main>

<style>
  @font-face {
    font-family: "DOS";
    src: url("../assets/fonts/Px437_IBM_EGA8.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
    -webkit-font-kerning: none;
    font-kerning: none;
    font-synthesis: none;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
    font-variant-numeric: tabular-nums;
  }

  * {
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  :global(body) {
    padding: 0;
    margin: 0;
    background-color: #000084;
    color: white;
    font-size: 28px;
    font-family: "DOS", monospace;
    line-height: 1;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  main {
    height: 100%;
  }
</style>
