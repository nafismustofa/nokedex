<div>
    <img src="/pokedex.svg" alt="loading..."/>
</div>

<style>
    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div img {
        width: 2rem;
        filter: invert();
        opacity: 0.5;
        animation: rotate 2s infinite linear;
    }

    @keyframes rotate {
        to {
            rotate: 360deg;
        }
    }
</style>