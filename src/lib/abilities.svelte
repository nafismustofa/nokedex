<script>
    import { pokemon_data } from "$lib/fetchData.js";
    import { formatText } from "$lib/formatText.js";
</script>

<div id="abilities">
    <p id="header">Abilities</p>

    <div id="pokemon-abilities">
        {#each $pokemon_data.abilities as a}
            <p>{formatText(a.ability.name)}</p>
        {/each}
    </div>
</div>

<style>
    #abilities {
        width: 100%;
    }

    #header {
        font-size: calc(var(--header-font) - 0.3rem);
        font-weight: bold;
    }

    #pokemon-abilities {
        display: grid;
        grid-template-columns: auto auto;
        gap: 0.5rem;
        margin-block: 0.5rem;
    }

    #pokemon-abilities p{
        font-size: var(--small-font);
    }
</style>