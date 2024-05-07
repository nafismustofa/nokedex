import { writable } from "svelte/store";
import { formatTextReverse } from "$lib/formatText";

export const pokemon_data = writable(null);
export const evolution_data = writable([]);
export const loading = writable(false);

export async function fetchData(pokemon_name) {
    if (pokemon_name != ''){
        loading.set(true);

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatTextReverse(pokemon_name)}`);
            
            if (!response.ok) {
                pokemon_data.set("error");
                loading.set(false);
                throw new Error("Pokemon not found.");
            }

            const data = await response.json();

            pokemon_data.set(data);

            fetchEvolution(data.name);
    
        } catch (error) {
            console.log(error);
        }
    }
}

export async function fetchRandomData() {
    loading.set(true);

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1025)}`)

        const data = await response.json();
            
        pokemon_data.set(data);

        fetchEvolution(data.name);

    } catch (error) {
        console.log(error);
    }
}

async function fetchEvolution(name) {
    try {
        let names = [];
        let datas = [];

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
        const data = await response.json();

        const ev_response = await fetch(data.evolution_chain.url); ;
        const ev_data = await ev_response.json();

        extractEvolutions(ev_data.chain, names);

        for( let i = 0; i < names.length; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${names[i]}`);
            datas.push(await response.json());
        }

        evolution_data.set(datas);

    } catch (error) {
        console.log(error);
    }

    loading.set(false);
}

function extractEvolutions(chain, arr) {
    arr.push(chain.species.name);

    if (Object.keys(chain.evolves_to).length > 0) {
        for (let i = 0; i < Object.keys(chain.evolves_to).length; i++) {
            extractEvolutions(chain.evolves_to[i], arr);
        }
    }
}