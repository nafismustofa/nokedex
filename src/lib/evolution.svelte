<script>
    import { pokemon_data, evolution_data } from "$lib/fetchData.js";
    import { fetchData } from "$lib/fetchData.js";
    import { formatText } from "$lib/formatText.js";
</script>

<div id="evolution">
    <p id="header">Evolution</p>

    <!-- <div id="evolution-chain" style={ev.length < 3 ? 'overflow-y: hidden;' : ''}> -->
    <div id="evolution-chain" style={`overflow-y: ${$evolution_data.length <= 3 ? "hidden" : "scroll"}; grid-template-columns: ${$evolution_data.length == 2 ? "auto auto": $evolution_data.length == 1 ? "auto" : ""}; `}>
        {#each $evolution_data as e}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div id="gen" on:click={fetchData(e.name)} title="View {formatText(e.name)}">
                <div id="circle" style="background-color: var(--{$pokemon_data.types[0].type.name});">
                    <img src={e.sprites.front_default} alt={e.name}/>
                </div>
                <p>{formatText(e.name)}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    #evolution {
        width: 100%;
    }

    #header {
        font-size: calc(var(--header-font) - 0.3rem);
        font-weight: bold;
    }

    #circle {
        width: 3rem;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        border-style: solid;
        border-color: black;
        border-width: 3px;
        box-shadow: 3px 3px 0 black;
    }

    #evolution-chain {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 0.5rem;
        margin-block: 0.5rem;
        justify-content: space-evenly;

        height: 5rem;
        overflow-x: hidden;
    }

    #circle > img {
        width: 2.5rem;
        image-rendering: pixelated;
        filter: drop-shadow(1px 1px 0px black);
    }

    #gen {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0.2rem;
        width: fit-content;

        cursor: pointer;
        
        transition: all 0.15s;
    }

    #gen > p {
        font-size: var(--small-font);
    }

    #gen:hover {
        transform: scale(1.1);
    }

    #gen:active {
        transform: scale(1);
        filter: brightness(0.8);
    }

    @media only screen and (max-width: 40em) {
        #evolution-chain {
            height: 3.5rem;
        }
    
        #circle {
            width: 2rem;
            height: 2rem; 
        }

        #circle > img {
            width: 1.5rem;
        }
    }
</style>