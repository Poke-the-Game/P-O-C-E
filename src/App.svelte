<script lang="ts">
  import StatusBar from "./lib/StatusBar.svelte";
  import MainView from "./lib/MainView.svelte";

  type GameState = "start" | "ongoing" | "death";
  let state: GameState = "start";
  $: deathMessage = "";
  $: finalYear = 0;

  function startGame() {
    console.log("Start game");
    state = "ongoing";
  }

  function endGame(event) {
    console.log("End game");
    state = "death";

    let finalResults = event.detail;
    console.log("Final results", finalResults);

    finalYear = finalResults.finalYear;

    if (finalResults.prosperity < 0) {
      deathMessage =
        "The people cannot afford food anymore, the infrastructure is failing, and global markets are crashing.";
    } else if (finalResults.prosperity > 100) {
      deathMessage =
        "Humanity has reached its peak and has become complacent. One by one humans are dying due to their lethargy.";
    } else if (finalResults.technology < 0) {
      deathMessage =
        "A meteor is on collision course with earth. Due to our lack of knowledge and advanced technologies we are unable to stop it. Earth is destroyed.";
    } else if (finalResults.technology > 100) {
      deathMessage =
        "Computer systems more advanced than any human brain have taken over and started saving earth by following the only possible solution, removing all humans from its surface.";
    } else if (finalResults.freedom < 0) {
      deathMessage =
        "Autocratic governments and malevolent dictators have taken over. Censorship is tightly controlling all media. Most humans only live to serve and comply. Life as we know it is over";
    } else if (finalResults.freedom > 100) {
      deathMessage =
        "Life is limitless and no one holds back. Anarchy is reigning and fake news control the narrative. Humanity has dismantled itself.";
    } else if (finalResults.climate < 0) {
      deathMessage =
        "Earth is freezing, mammoths are roaming the planes again, survival is difficult. Slowly, the last remaining humans are succumbing to the elements.";
    } else if (finalResults.climate > 100) {
      deathMessage =
        "The wells have dried up, the glaciers are gone, and ocean levels have risen. Humanities habitats are disappearing and its food sources are dwindling. It is only a matter of time till it vanishes.";
    }
  }
</script>

{#if state === "start"}
  <h1>POCE: Prosperity Over Climate Extinction</h1>

  <p>
    Human society is a complex system of interactions within itself and the
    environment it exists in. Navigating it along the abyss of extinction is a
    difficult task which requires making sensible compromises. In this simulated
    universe, it is your task to guide humans through the dangerous times ahead.
    Make sure to balance the four factors of enlightment (prosperity,
    technology, freedom, and climate) and keep them at 50%. Pay attention! Once
    they reach 0% or 100% humanity is doomed and we are all lost. This is no
    easy task as the seemingly best choice can have dire consequences. Good luck
    friend, you will need it.
  </p>

  <button type="button" on:click={startGame}>Start game</button>
{:else if state === "ongoing"}
  <StatusBar />
  <MainView on:gameEnd={endGame} />
{:else if state === "death"}
  <h1>The world has collapsed</h1>

  <p>{deathMessage}</p>

  <h3>You reached the year {finalYear}</h3>
{/if}
