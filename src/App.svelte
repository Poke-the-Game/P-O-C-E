<script>
  import StatusBar from "./lib/StatusBar.svelte";
</script>

<StatusBar />
<main>Foo</main>
<footer>Bar</footer>

<style>
  main {
    height: auto;
    background-color: #bda86a;
    flex-grow: 1;
  }
  footer {
    background-color: #241404;
    color: #f7f3c1;
    padding: 20px 10px;
  }
</style>
