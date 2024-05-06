<script>
    import Card from "$lib/card.svelte";
    import Search from "../lib/search.svelte";
</script>

<main>
    <div id="container">
        <Card/>
        <Search/>
        <p id="credit">made with ❤ by nafismustofa</p>
    </div>
</main>

<style>
    main {
        width: 100dvw;
        height: 100dvh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    #container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #credit {
        position: absolute;
        width: fit-content;
        font-size: var(--small-font);
        top: calc(100dvh - 3rem);
        opacity: 0.3;
    }
    
</style>