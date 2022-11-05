<script lang="ts">
  import CardStack from "./CardStack.svelte";
  import { cardDefinitions } from "./card_definitions";
  import { prosperityLevel, climateLevel } from "./stores";

  // game setup
  export let currentCard = "initial_card";

  // helper functions
  function chooseRandomCard() {
    var keys = Object.keys(cardDefinitions);

    let cardProposal = keys[Math.floor(keys.length * Math.random())];
    while (cardProposal === currentCard) {
      cardProposal = keys[Math.floor(keys.length * Math.random())];
    }

    return cardProposal;
  }

  function swipe(event, swipeDirection) {
    console.log(`Swipe ${swipeDirection}`);

    // process current card effects
    let effects =
      cardDefinitions[currentCard].effects[`${swipeDirection}_swipe`];
    console.log(effects);

    if (effects.prosperity !== undefined) {
      prosperityLevel.update((level) => level + effects.prosperity);
    }
    if (effects.climate !== undefined) {
      climateLevel.update((level) => level + effects.climate);
    }

    // choose next card
    currentCard = chooseRandomCard();
  }
</script>

<main>
  <div class="text-view">
    {cardDefinitions[currentCard].text}
  </div>
  <CardStack image={cardDefinitions[currentCard].image_id} />
  <div class="name-view">
    {cardDefinitions[currentCard].name}
  </div>
  <button type="button" on:click={(event) => swipe(event, "left")}>
    Swipe left
  </button>
  <button type="button" on:click={(event) => swipe(event, "right")}>
    Swipe right
  </button>
</main>

<style>
  main {
    height: auto;
    background-color: #bda86a;
    flex-grow: 1;
  }
</style>
