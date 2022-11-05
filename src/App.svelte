<script lang="ts">
  import StatusBar from "./lib/StatusBar.svelte";
  import MainView from "./lib/MainView.svelte";

  type GameState = "start" | "ongoing" | "death";
  let state: GameState = "start";
  $: deathMessage = "";

  function startGame() {
    console.log("Start game");
    state = "ongoing";
  }

  function endGame(event) {
    console.log("End game");
    state = "death";

    let finalLevels = event.detail;
    console.log("Final levels", finalLevels);

    if (finalLevels.prosperity < 0) {
      deathMessage =
        "The people cannot afford food anymore, the infrastructure is failing, and global markets are crashing.";
    } else if (finalLevels.prosperity > 100) {
      deathMessage =
        "Humanity has reached its peak and has become complacent. One by one humans are dying due to their lethargy.";
    } else if (finalLevels.technology < 0) {
      deathMessage =
        "A meteor is on collision course with earth. Due to our lack of knowledge and advanced technologies we are unable to stop it. Earth is destroyed.";
    } else if (finalLevels.technology > 100) {
      deathMessage =
        "Computer systems more advanced than any human brain have taken over and started saving earth by following the only possible solution, removing all humans from its surface.";
    } else if (finalLevels.freedom < 0) {
      deathMessage =
        "Autocratic governments and malevolent dictators have taken over. Censorship is tightly controlling all media. Most humans only live to serve and comply. Life as we know it is over";
    } else if (finalLevels.freedom > 100) {
      deathMessage =
        "Life is limitless and no one holds back. Anarchy is reigning and fake news control the narrative. Humanity has dismantled itself.";
    } else if (finalLevels.climate < 0) {
      deathMessage =
        "Earth is freezing, mammoths are roaming the planes again, survival is difficult. Slowly, the last remaining humans are succumbing to the elements.";
    } else if (finalLevels.climate > 100) {
      deathMessage =
        "The wells have dried up, the glaciers are gone, and ocean levels have risen. Humanities habitats are disappearing and its food sources are dwindling. It is only a matter of time till it vanishes.";
    }
  }
</script>

{#if state === "start"}
  <h1>POCE: Prosperity Over Climate Extinction</h1>
  <button type="button" on:click={startGame}>Start game</button>
{:else if state === "ongoing"}
  <StatusBar />
  <MainView on:gameEnd={endGame} />
  <footer>Bar</footer>
{:else if state === "death"}
  <h1>The world has collapsed</h1>

  <p>{deathMessage}</p>
{/if}

<style>
  footer {
    background-color: #241404;
    color: #f7f3c1;
    padding: 20px 10px;
  }
</style>
