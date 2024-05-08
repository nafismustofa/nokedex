<script>
    import Card from "$lib/card.svelte";
    import Search from "$lib/search.svelte";
</script>

<main>
    <div id="container">
        <Card/>
        <Search/>
        <p id="credit">made with &lt;3 by <a href="https://nafismustofa.netlify.app" target="_blank">nafismustofa</a></p>
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
        margin: 0;
        padding: 0;
        width: fit-content;
        font-size: var(--small-font);
        opacity: 0.4;
    }

    #credit > a {
        color: black;
        text-decoration: none;
        font-weight: bold;
    }

    #credit > a:hover {
        text-decoration: underline;
    }
</style>