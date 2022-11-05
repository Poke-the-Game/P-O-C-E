<script lang="ts">
  import CardStack from "./CardStack.svelte";
  import { cardDefinitions } from "./card_definitions";
  import {
    prosperityLevel,
    prosperityEstimatedEffect,
    technologyLevel,
    technologyEstimatedEffect,
    freedomLevel,
    freedomEstimatedEffect,
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

  function handleSwipeEnd(event) {
    const swipeDirection = event.detail.direction;
    if (!swipeDirection) return;
    console.log(`Swipe ${swipeDirection}`);
    clearEstimatedEffects();

    // process current card effects
    let effects =
      cardDefinitions[currentCard].effects[`${swipeDirection}_swipe`];
    console.log("Apply", effects);

    if (effects.prosperity !== undefined) {
      prosperityLevel.update((level) => level + effects.prosperity);
    }
    if (effects.technology !== undefined) {
      technologyLevel.update((level) => level + effects.technology);
    }
    if (effects.freedom !== undefined) {
      freedomLevel.update((level) => level + effects.freedom);
    }
    if (effects.climate !== undefined) {
      climateLevel.update((level) => level + effects.climate);
    }

    // choose next card
    currentCard = chooseRandomCard();
    console.log("New card:", currentCard, cardDefinitions[currentCard]);
  }

  function handleSwipeChange(event) {
    const swipeDirection = event.detail.direction;
    console.log("SwipeChange", swipeDirection);
    if (!swipeDirection) {
      clearEstimatedEffects();
      return;
    }
    let effects =
      cardDefinitions[currentCard].effects[`${swipeDirection}_swipe`];

    if (effects.prosperity !== undefined) {
      prosperityEstimatedEffect.set(effects.prosperity);
    } else {
      prosperityEstimatedEffect.set(0);
    }
    if (effects.technology !== undefined) {
      technologyEstimatedEffect.set(effects.technology);
    } else {
      technologyEstimatedEffect.set(0);
    }
    if (effects.freedom !== undefined) {
      freedomEstimatedEffect.set(effects.freedom);
    } else {
      freedomEstimatedEffect.set(0);
    }
    if (effects.climate !== undefined) {
      climateEstimatedEffect.set(effects.climate);
    } else {
      climateEstimatedEffect.set(0);
    }
  }

  function clearEstimatedEffects() {
    prosperityEstimatedEffect.set(0);
    technologyEstimatedEffect.set(0);
    freedomEstimatedEffect.set(0);
    climateEstimatedEffect.set(0);
  }
</script>

<main>
  <div class="text-view">
    {cardDefinitions[currentCard].text}
  </div>
  <CardStack
    image={cardDefinitions[currentCard].image_id}
    on:swipeChange={handleSwipeChange}
    on:swipeEnd={handleSwipeEnd}
  />
  <div class="name-view">
    {cardDefinitions[currentCard].name}
  </div>
</main>

<style>
  main {
    height: auto;
    background-color: #bda86a;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
