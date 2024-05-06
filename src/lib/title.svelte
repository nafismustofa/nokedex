<script>
    import VerticalLine from "./verticalLine.svelte";
</script>

<div id="title">
    <div id="pokemon">
        <p id="name">Charizard</p>
        <p id="id">#000</p>
    </div>

    <VerticalLine/>

    <div id="type">
        <div class="type_box">
            <p>Fire</p>
        </div>
    </div>

</div>

<style>
    #title {
        width: 100%;
        height: 4rem;
        display: flex;
        align-items: center;
    }

    #pokemon {
        display: flex;
    }

    #type {
        display: flex;
        flex-direction: column;
    }

    #name {
        font-size: 1.3rem;
        font-weight: bold;
    }

    #id {
        margin-top: 0.4rem;
    }

    .type_box {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--fire);

        width: 200%;
    }

    @media only screen and (max-width: 40em) {
        
    }
    
</style>