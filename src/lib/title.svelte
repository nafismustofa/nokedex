<script>
    import Type from "./type.svelte";
    import VerticalLine from "./verticalLine.svelte";
</script>

<div id="title">
    <div id="pokemon">
        <p id="name">Charizard</p>
        <p id="id">#000</p>
    </div>

    <VerticalLine />

    <div id="type">
        <Type type="Fire"/>
        <Type type="Flying"/>
    </div>

</div>

<style>
    #title {
        width: 100%;
        display: flex;
        align-items: center;
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
        font-size: var(--heading-font);
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