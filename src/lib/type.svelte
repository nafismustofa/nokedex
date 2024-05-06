<script>
    export let type;
</script>

<div>
    <p>{type}</p>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--fire);

        border-radius: 1rem;
        border-style: solid;
        border-color: black;
        border-width: 3px;

        margin-block: 0.3rem;
        margin-inline: 0.5rem;
        
        padding-block: 0.1rem;
        padding-inline: 0.5rem;

        box-shadow: 3px 3px 0 black;
    }
</style>