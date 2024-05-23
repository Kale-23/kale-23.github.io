<script>
    import src from "$lib/assets/star_repeat.svg";
    let name = "Kaleb :)"

    const handleClick = () => {
        name = "Kaleb is the best"
    }
</script>

<div id="app">
    <div id="star-container">
        <div id="star-pattern" style="background-image: url({src});"></div>
        <div id="star-gradient"></div>
        <div id="content">
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
        background: radial-gradient(circle, rgba(255, 255, 255, 0.05), rgb(var(--secondary-out)));
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 2;
    }
    #content {
        align-items: center;
        color: darkblue;
        position: absolute;
        z-index: 10;
    }
</style>
