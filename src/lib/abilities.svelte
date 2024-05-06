<div id="abilities">
    <p id="header">Abilities</p>

    <div id="pokemon-abilities">
        <p>Ability 1</p>
        <p>Ability 2</p>
    </div>
</div>

<style>
    #abilities {
        width: 100%;
    }

    #header {
        font-size: calc(var(--header-font) - 0.3rem);
    }

    #pokemon-abilities {
        display: grid;
        grid-template-columns: auto auto;
        gap: 0.5rem;
        margin-block: 0.5rem;
    }

    #pokemon-abilities p{
        font-size: var(--small-font);
    }
</style>