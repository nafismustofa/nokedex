<script>
    import Card from "$lib/card.svelte";
    import Search from "../lib/search.svelte";
</script>

<main>
    <div id="container">
        <Card/>
        <Search/>
    </div>
</main>

<style>
    main {
        width: 100dvw;
        height: 100dvh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>