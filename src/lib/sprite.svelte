<script>
    import { pokemon_data } from "$lib/fetchData.js";

    let data;

    pokemon_data.subscribe(value => {
        data =  value;
    });
</script>

<div id="sprite" style="background-color: var(--{data.types[0].type.name});">
    <div id="circle" style="background-color: var(--{data.types[0].type.name});"></div>
    <img alt="pokemon sprite" src={data.sprites.other["official-artwork"].front_default}/>
</div>

<style>
    #sprite {
        width: 45%;
        height: 90%;

        display: flex;
        align-items: center;
        justify-content: center;
        
        border-radius: 1rem;
        border-style: solid;
        border-color: black;
        border-width: 3.5px;

        margin: 1.5rem;

        box-shadow: 5px 5px 0px black;
    }

    #sprite > img {
        width: 80%;
        filter: drop-shadow(5px 5px 0px black);
    }

    #sprite > #circle {
        position: absolute;
        width: 17%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        filter: brightness(0.9);
    }


    @media only screen and (max-width: 40em) {
        #sprite {
            width: 85%;
            height: 30%;
        }

        #sprite > #circle {
            width: 37%;
        }

        #sprite > img {
            width: 75%;
            filter: drop-shadow(5px 5px 0px black);
        }
    }
</style>