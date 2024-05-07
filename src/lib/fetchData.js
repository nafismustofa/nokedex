import { writable } from "svelte/store";
import { formatTextReverse } from "$lib/formatText";

export const pokemon_data = writable(null);
export const loading = writable(false);

export async function fetchData(pokemon_name) {
    if (pokemon_name != ''){
        loading.set(true);

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatTextReverse(pokemon_name)}`);
            
            if (!response.ok) {
                pokemon_data.set("error");
                throw new Error("Pokemon not found.");
            }
    
            pokemon_data.set(await response.json());
    
        } catch (error) {
            console.log(error);
        }

        loading.set(false);
    }
}

export async function fetchRandomData() {
    loading.set(true);

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1025)}`)

        pokemon_data.set(await response.json());

    } catch (error) {
        console.log(error);
    }

    loading.set(false);
}