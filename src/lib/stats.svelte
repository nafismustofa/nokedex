<div id="stats">
    <p id="header">Stats</p>

    <div id="pokemon-stats">
        <p>HP: </p>
        <p>ATK: </p>
        <p>DEF: </p>
        <p>SAT: </p>
        <p>SDF: </p>
        <p>SPD: </p>
    </div>
</div>

<style>
    #stats {
        width: 100%;
    }

    #header {
        font-size: calc(var(--header-font) - 0.3rem);
    }

    #pokemon-stats {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 0.5rem;
        margin-block: 0.5rem;
    }

    #pokemon-stats p{
        font-size: var(--small-font);
    }
</style>