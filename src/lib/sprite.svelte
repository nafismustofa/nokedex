<div id="sprite">
    <div id="circle"></div>
    <img alt="pokemon sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"/>
</div>

<style>
    #sprite {
        width: 45%;
        height: 90%;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--fire);
        
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
        background-color: var(--fire);
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