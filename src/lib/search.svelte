<script>
    import { fetchData, fetchRandomData } from "$lib/fetchData.js";
    let pokemon_name;

    function keyDetect(e) {
        if (e.key == "Enter") {
            fetchData(pokemon_name.value);
        }
    }
</script>

<div id="search">
    <input id="search_bar" type="text" placeholder="Enter Pokemon name or ID..." bind:this={pokemon_name} on:keydown={keyDetect}/>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="button" on:click={fetchData(pokemon_name.value)}>
        <img src="/icons/search.svg" alt="search"/>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="button" on:click={fetchRandomData}>
        <img src="/icons/dice.svg" alt="random"/>
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

    .button {
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

        transition: all 0.15s;

        cursor: pointer;
    }

    .button > img {
        width: 1.2rem;
        filter: invert() drop-shadow(1px 2px 0 black);
    }

    .button:hover {
        transform: scale(1.1);
    }

    .button:active {
        transform: scale(1);
        filter: brightness(0.8);
    }

    @media only screen and (max-width: 40em) {
        #search_bar {
            width: 50%;
        }
    }
</style>