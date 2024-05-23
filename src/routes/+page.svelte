<script>
    import Card from "./Card.svelte";
    let name = "Kaleb :)";

    const handleClick = () => {
        name = "Kaleb is the best";
    }

    class CardData {
        constructor(id, src, color, description) {
            this.id = id;
            this.src = src;
            this.color = color;
            this.description = description;
        }
    }
    let cards = [
        new CardData(1, "https://img.icons8.com/?size=100&id=116742&format=png&color=000000", "red", "This is a red card"),
        new CardData(2, "https://img.icons8.com/?size=100&id=43824&format=png&color=000000", "blue", "This is a blue card"),
        new CardData(3, "https://img.icons8.com/?size=100&id=19798&format=png&color=000000", "green", "This is a green card"),
    ];

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Kaleb's Personal Website Homepage" />
</svelte:head>

<div id="content">
    <div id="cards">
        {#each cards as card (card.id)}
            <Card src={card.src} color={card.color} description={card.description} />
        {/each}
    </div>
    <div class="index">
        <h2> {name} Stuff </h2>
        <p> This is a test of my stuff </p>
        <button on:click={handleClick}> Click Me </button>
        <input type="text" bind:value={name}>
    </div>
</div>


<style> 
#cards {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

#content {
    align-items: center;
    color: darkblue;
    position: absolute;
    z-index: 10;
}
</style>
