import type { PageLoad } from './$types';
import type { Recipe } from '$lib/interfaces/Recipe';

export const load = (async ({ fetch }) => {   
    let res: Response = await fetch('/api/get-recipe');
    let json: Recipe = await res.json();
    let recipe: Recipe = json;

    return {recipe};
}) satisfies PageLoad;