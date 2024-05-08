<script>
    import { pokemon_data } from "$lib/fetchData.js";
    import About from "$lib/about.svelte";

    let data;

    pokemon_data.subscribe(value => {
        data =  value;
    });

    let checked = false;

</script>

<div id="sprite" style="background-color: var(--{data.types[0].type.name});">
    <div id="image_container" style={`display: ${checked ? "none" : ""}`}>
        <div id="circle" style="background-color: var(--{data.types[0].type.name});"></div>
        <img alt="pokemon sprite" src={data.sprites.other["official-artwork"].front_default}/>
    </div>

    <div id="about_container" style={`display: ${checked ? "" : "none"}`}>
        <About/>
    </div>

    <div id="switch">
        <input id="check" type="checkbox" bind:checked={checked}/>
        <label for="check">
            <div>
                <img alt="about" src="/icons/about.svg"/>
            </div>
        </label>
    </div>
</div>

<style>
    #sprite {
        width: 45%;
        height: 90%;
        
        border-radius: 1rem;
        border-style: solid;
        border-color: black;
        border-width: 3.5px;

        margin: 1.5rem;

        box-shadow: 5px 5px 0px black;

        position: relative;
    }

    #switch {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        display: grid;
        place-content: end start;
    }

    #switch div {
        width: 2rem;
        height: 2rem;

        background-color: tomato;

        border-radius: 50%;
        border-style: solid;
        border-color: black;
        border-width: 3px;

        box-shadow: 2px 2px 0px black;

        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0.4rem;
    }

    #switch img {
        width: 70%;
        filter: invert() drop-shadow(1px 2px 0px black);
    }

    #switch > input {
        display: none;
    }

    #switch div:hover {
        transform: scale(1.1);
    }

    #switch div:active {
        transform: scale(1);
        filter: brightness(0.8);
    }

    #image_container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #image_container > img {
        width: 80%;
        filter: drop-shadow(5px 5px 0px black);
    }

    #image_container > #circle {
        position: absolute;
        width: 50%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        filter: brightness(0.9);
    }

    #about_container {
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
    }


    @media only screen and (max-width: 40em) {
        #sprite {
            width: 85%;
            height: 30%;
        }

        #image_container > #circle {
            width: 37%;
        }

        #image_container > img {
            width: 65%;
            filter: drop-shadow(5px 5px 0px black);
        }

        #switch div {
            width: 1rem;
            height: 1rem;
        }
    }
</style>