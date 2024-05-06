<script>
    import Sprite from "$lib//sprite.svelte";
    import Title from "./title.svelte";
</script>

<div id="card">
    <Sprite/>

    <div id="info">
        <Title/>
        <div id="stats">
            <p>hp 100</p>
        </div>
    </div>
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
    }

    #info {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 45%;
        height: 90%;
        margin: 1rem;
    }

    @media only screen and (max-width: 40em) {
        #card {
            width: 85dvw;
            aspect-ratio: 1/1.90;

            display: flex;
            flex-direction: column;
        }

        #info {
            width: 90%;
            height: 45%;
            margin: 0;
        }
    }
</style>