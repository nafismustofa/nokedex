<script>
    
</script>

<div id="search">
    <input id="search_bar" type="text" placeholder="Enter Pokemon name..."/>
    <div id="search_button">
        <img src="/icons/search.svg" alt="serach"/>
    </div>
</div>

<style>
    #search {
        display: flex;
        align-items: center;
        width: 100%;
    }

    #search_bar {
        margin: 0.5rem;

        height: 2rem;
        width: 80%;

        border-radius: 1rem;
        border-style: solid;
        border-color: black;
        border-width: 3px;
        
        font-family: "pokemon_font";
        font-size:  var(--font);

        box-shadow: 3px 3px 0 black;

        text-align: center;
    }

    #search_button {
        width: 2rem;
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        border-style: solid;
        border-color: black;
        border-width: 3px;

        background-color: tomato;

        box-shadow: 3px 3px 0 black;

        margin: 0.5rem;
    }

    #search_button > img {
        width: 1.2rem;
    }

    #search_button:active {
        transform: scale(0.9);
    }
</style>