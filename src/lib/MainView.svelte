<script lang="ts">
  import CardStack from "./CardStack.svelte";
  import { cardDefinitions } from "./card_definitions";
  import {
    prosperityLevel,
    prosperityEstimatedEffect,
    climateLevel,
    climateEstimatedEffect,
  } from "./stores";

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
    clearEstimatedEffects();

    // process current card effects
    let effects =
      cardDefinitions[currentCard].effects[`${swipeDirection}_swipe`];
    console.log("Apply", effects);

    if (effects.prosperity !== undefined) {
      prosperityLevel.update((level) => level + effects.prosperity);
    }
    if (effects.climate !== undefined) {
      climateLevel.update((level) => level + effects.climate);
    }

    // choose next card
    currentCard = chooseRandomCard();
    console.log("New card:", currentCard, cardDefinitions[currentCard]);
  }

  function hover(event, swipeDirection) {
    let effects =
      cardDefinitions[currentCard].effects[`${swipeDirection}_swipe`];
    console.log("Estimate", effects);

    if (effects.prosperity !== undefined) {
      prosperityEstimatedEffect.set(effects.prosperity);
    } else {
      prosperityEstimatedEffect.set(0);
    }
    if (effects.climate !== undefined) {
      climateEstimatedEffect.set(effects.climate);
    } else {
      climateEstimatedEffect.set(0);
    }
  }

  function clearEstimatedEffects() {
    prosperityEstimatedEffect.set(0);
    climateEstimatedEffect.set(0);
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
  <button
    type="button"
    on:click={(event) => swipe(event, "left")}
    on:mouseenter={(event) => hover(event, "left")}
    on:mouseleave={() => clearEstimatedEffects()}
  >
    Swipe left
  </button>
  <button
    type="button"
    on:click={(event) => swipe(event, "right")}
    on:mouseenter={(event) => hover(event, "right")}
    on:mouseleave={() => clearEstimatedEffects()}
  >
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
