<script>
    import { pokemon_data } from "$lib/fetchData.js";
</script>

<div id="stats">
    <p id="header">Stats</p>

    <div id="pokemon-stats">
        <p>HP: {$pokemon_data.stats[0].base_stat}</p>
        <p>ATK: {$pokemon_data.stats[1].base_stat}</p>
        <p>DEF: {$pokemon_data.stats[2].base_stat}</p>
        <p>SAT: {$pokemon_data.stats[3].base_stat}</p>
        <p>SDF: {$pokemon_data.stats[4].base_stat}</p>
        <p>SPD: {$pokemon_data.stats[5].base_stat}</p>
    </div>
</div>

<style>
    #stats {
        width: 100%;
    }

    #header {
        font-size: calc(var(--header-font) - 0.3rem);
        font-weight: bold;
    }

    #pokemon-stats {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 0.5rem;
        margin-block: 0.5rem;
    }

    #pokemon-stats p{
        font-size: var(--small-font);
    }
</style>