<script>
    let name = "Kaleb"

    const handleClick = () => {
        name = "Kaleb is the best"
    }
</script>

<a href="/about"> About </a>
<a href="/pic"> pic </a>
<a href="/"> Home </a>
<div class="index">
    <h2> Testing {name} Stuff </h2>
    <p> This is a test of my stuff </p>
    <button on:click={handleClick}> Click Me </button>
    <input type="text" bind:value={name}>
</div>

<style>
    .index {
        text-align: center;
        color: red;
    }
</style>
