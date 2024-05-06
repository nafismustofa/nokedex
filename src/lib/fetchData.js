import { writable } from "svelte/store";

export const pokemon_data = writable(null);

export async function fetchData(pokemon_name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name.toLowerCase()}`);
        
        if (!response.ok) {
            pokemon_data.set("error");
            throw new Error("Pokemon not found.");
        }

        pokemon_data.set(await response.json());

    } catch (error) {
        console.log(error);
    }
}

