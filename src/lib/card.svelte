<script>
    import Sprite from "$lib/sprite.svelte";
    import Abilities from "$lib/abilities.svelte"
    import Stats from "$lib/stats.svelte";
    import Title from "$lib/title.svelte";
    import Error from "$lib/error.svelte";
    import Nokedex from "$lib/nokedex.svelte";
    import Loading from "$lib/loading.svelte";
    import Evolution from "./evolution.svelte";

    
    import { pokemon_data, loading } from "$lib/fetchData.js";
  
    
    let data;
    let load_data;

    pokemon_data.subscribe(value => {
        data =  value;
    });

    loading.subscribe(value => {
        load_data = value;
    });

</script>

<div id="card">
    {#if load_data == true}
        <Loading/>
    {:else}
    {#if data == null}
        <Nokedex/>
    {:else if data == "error"}
        <Error/>
    {:else}
        <Sprite/>

        <div id="info">
            <Title/>
            <hr>
            <Stats/>
            <hr>
            <Abilities/>
            <hr>
            <Evolution/>
        </div>
    {/if}
    {/if}
</div>

<style>
    #card {
        width: 60rem;
        aspect-ratio: 2/1;

        display: flex;
        flex-direction: row;
        align-items: center;

        background-color: blanchedalmond;
        
        border-radius: 1rem;
        border-style: solid;
        border-color: black;
        border-width: 3.5px;

        box-shadow: 5px 5px 0px black;

        padding: 0.5rem;
    }

    #info {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 45%;
        height: 90%;
        margin: 1rem;
    }

    hr {
        width: 100%;
        border-width: 2px;
        border-style: solid;
        margin: 0.8rem;
    }

    @media only screen and (max-width: 40em) {
        #card {
            width: 80dvw;
            aspect-ratio: 1/1.90;

            display: flex;
            flex-direction: column;
        }

        #info {
            width: 90%;
            height: 45%;
            margin: 0;
        }

        hr {
            margin: 0.5rem;
        }
    }
</style>