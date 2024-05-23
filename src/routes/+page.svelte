<script>
    import Card from "./Card.svelte";
    import src from "$lib/assets/star_repeat.svg";
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

<div id="app">
    <div id="star-container">
        <div id="star-pattern" style="background-image: url({src});"></div>
        <div id="star-gradient"></div>
        <div id="content">
            <div id="cards">
                {#each cards as card (card.id)}
                    <Card src={card.src} color={card.color} description={card.description} />
                {/each}
            </div>
            <a href="./about"> about </a>
            <a href="./pic"> pic </a>
            <div class="index">
                <h2> {name} Stuff </h2>
                <p> This is a test of my stuff </p>
                <button on:click={handleClick}> Click Me </button>
                <input type="text" bind:value={name}>
            </div>
    </div>
    </div>
</div>


<style> 
    :root {
        --primary-bg: 161 198 234;
        --secondary-bg: 187 209 234;
        --secondary-out: 80 125 188;
    }

    #app {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        position: relative;
    }
    #star-container {
        background: radial-gradient( rgb(var(--primary-bg)), rgb(var(--secondary-bg)));
        height: 100%;  
        overflow: hidden;
        position: relative;
    }
    #star-pattern {
        background-size: 20%;
        min-width: 120px;
        height: 100%;
        width: 100%;
        opacity: 0.5;
        position: absolute;
        animation: pan 10s linear infinite;
        will-change: background-position;
        z-index: 1;
    }
    @keyframes pan {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 100% 0%;
        }
    }
    #star-gradient {
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1), rgb(var(--secondary-out)));
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 2;
    }

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
