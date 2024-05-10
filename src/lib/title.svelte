<script>
    import Type from "./type.svelte";

    import { pokemon_data } from "$lib/fetchData.js";
    import { formatText } from "$lib/formatText.js";

</script>

<div id="title">
    <div id="pokemon">
        <p id="name">{formatText($pokemon_data.name)}</p>
        <p id="id">#{$pokemon_data.id}</p>
    </div>

    <div id="type">
        {#each $pokemon_data.types as t}
            <Type type={formatText(t.type.name)}/>
        {/each}
    </div>

</div>

<style>
    #title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #pokemon {
        display: flex;
        align-items: end;
        justify-content: center;
    }

    #type {
        display: flex;
        flex-direction: column;
    }

    #name {
        font-size: var(--header-font);
        font-weight: bold;
    }

    @media only screen and (max-width: 40em) {
        #title {
            flex-direction: column;
            justify-content: center;
        }

        #type {
            flex-direction: row;
            margin-block: 0.5rem;
        }
    }
    
</style>