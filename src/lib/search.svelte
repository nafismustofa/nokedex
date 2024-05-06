<script>
    import { fetchData } from "$lib/fetchData.js";
    let pokemon_name;
</script>

<div id="search">
    <input id="search_bar" type="text" placeholder="Enter Pokemon name..." bind:this={pokemon_name}/>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div id="search_button" on:click={fetchData(pokemon_name.value)}>
        <img src="/icons/search.svg" alt="serach"/>
    </div>
</div>

<style>
    #search {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    #search_bar {
        margin: 0.5rem;

        height: 2rem;
        width: 80%;

        border-radius: 1rem;
        border-style: solid;
        border-color: black;
        border-width: 3px;
        
        font-family: "pokemon_font";
        font-size:  var(--font);

        box-shadow: 3px 3px 0 black;

        text-align: center;
    }

    #search_button {
        width: 2rem;
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        border-style: solid;
        border-color: black;
        border-width: 3px;

        background-color: tomato;

        box-shadow: 3px 3px 0 black;

        margin: 0.5rem;
    }

    #search_button > img {
        width: 1.2rem;
        filter: invert() drop-shadow(1px 2px 0 black);
    }

    #search_button:hover {
        transform: scale(1.1);
    }

    #search_button:active {
        transform: scale(1);
        filter: brightness(0.8);
    }
</style>