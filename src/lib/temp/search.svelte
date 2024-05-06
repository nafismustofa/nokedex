<script>
    import { fetchData } from "$lib/fetchData.js";

    let pokemon_name;

</script>

<div id="container">
    <input type="text" bind:this={pokemon_name}/>

    <button on:click={fetchData(pokemon_name.value)}>Search</button>
</div>

<style>
    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-block: 1rem;
    }

    input {
        width: calc(var(--card-width) - 5rem);
    }

    button {
        margin-block: 0.5rem;
    }
</style>