<script>
    import { pokemon_data } from "$lib/fetchData.js";

    let data;
    
    pokemon_data.subscribe(value => {
        data =  value;
    });
</script>

<div id="card">
    {#if data != null}
        <p id="name">{data.name}</p>
        <p id="id">{data.id}</p>
    {/if}
</div>

<style>
    #card {
        width: var(--card-width);
        aspect-ratio: 3/4;

        border-radius: 1rem;
        border-style: solid;
        border-color: burlywood;
        border-width: 0.5rem;

        background-color: blanchedalmond;
    }
</style>