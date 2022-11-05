<script lang="ts">
  import StatusBar from "./lib/StatusBar.svelte";
  import MainView from "./lib/MainView.svelte";
</script>

<StatusBar />
<MainView />
<footer>Bar</footer>

<style>
  footer {
    background-color: #241404;
    color: #f7f3c1;
    padding: 20px 10px;
  }
</style>
