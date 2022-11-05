<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import CardStack from "./CardStack.svelte";
  import { cardDefinitions } from "./card_definitions";
  import {
    prosperityLevel,
    prosperityChangeRate,
    prosperityEstimatedEffect,
    technologyLevel,
    technologyChangeRate,
    technologyEstimatedEffect,
    freedomLevel,
    freedomChangeRate,
    freedomEstimatedEffect,
    climateLevel,
    climateChangeRate,
    climateEstimatedEffect,
  } from "./stores";

  // game setup
  const dispatch = createEventDispatcher();
  export let currentCard = "inauguration";
  let cardBlacklist = ["inauguration"];
  $: currentYear = 2000;

  function handlePermanentEffects() {
    prosperityLevel.update((level) => level + $prosperityChangeRate);
    technologyLevel.update((level) => level + $technologyChangeRate);
    freedomLevel.update((level) => level + $freedomChangeRate);
    climateLevel.update((level) => level + $climateChangeRate);

    checkDeathConditions();
  }

  let permEffectInterval = setInterval(handlePermanentEffects, 1000);

  // helper functions
  function checkDeathConditions() {
    let isDead =
      $prosperityLevel < 0 ||
      $prosperityLevel > 100 ||
      $technologyLevel < 0 ||
      $technologyLevel > 100 ||
      $freedomLevel < 0 ||
      $freedomLevel > 100 ||
      $climateLevel < 0 ||
      $climateLevel > 100;

    if (isDead) {
      console.log("Game over");
      clearInterval(permEffectInterval);
      dispatch("gameEnd", {
        prosperity: $prosperityLevel,
        technology: $technologyLevel,
        freedom: $freedomLevel,
        climate: $climateLevel,
        finalYear: currentYear,
      });
    }
  }

  function chooseRandomCard() {
    var keys = Object.keys(cardDefinitions);

    let cardProposal = keys[Math.floor(keys.length * Math.random())];
    while (
      cardProposal === currentCard ||
      cardBlacklist.includes(cardProposal)
    ) {
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
    console.log("Apply effects", effects);

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

    let permEffects =
      cardDefinitions[currentCard].permanent_effects[`${swipeDirection}_swipe`];
    console.log("Update permanent effects", permEffects);

    if (permEffects.prosperity !== undefined) {
      prosperityChangeRate.update((level) => level + permEffects.prosperity);
    }
    if (permEffects.technology !== undefined) {
      technologyChangeRate.update((level) => level + permEffects.technology);
    }
    if (permEffects.freedom !== undefined) {
      freedomChangeRate.update((level) => level + permEffects.freedom);
    }
    if (permEffects.climate !== undefined) {
      climateChangeRate.update((level) => level + permEffects.climate);
    }

    // check for death
    checkDeathConditions();

    // advance year
    currentYear++;

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
    left_action={cardDefinitions[currentCard].action_description.left_swipe}
    right_action={cardDefinitions[currentCard].action_description.right_swipe}
    on:swipeChange={handleSwipeChange}
    on:swipeEnd={handleSwipeEnd}
  />
  <div class="name-view">
    {cardDefinitions[currentCard].name}
  </div>
</main>
<footer>Year: {currentYear} - Leader of the World</footer>

<style>
  main {
    height: auto;
    background-color: #bda86a;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-view,
  .name-view {
    flex-grow: 1;
  }

  footer {
    background-color: #241404;
    color: #f7f3c1;
    padding: 20px 10px;
  }
</style>
