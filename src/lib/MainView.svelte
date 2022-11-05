<script>
  import cardDefinitions from "./card_definitions.json";

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
      cardDefinitions[currentCard]["effects"][`${swipeDirection}_swipe`];
    console.log(effects);

    // choose next card
    currentCard = chooseRandomCard();
  }
</script>

<main>
  <div class="text-view">
    {cardDefinitions[currentCard].text}
  </div>
  <div class="card-view">
    {cardDefinitions[currentCard].image_id}
  </div>
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
