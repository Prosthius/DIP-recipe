import type { PageLoad } from './$types';
import type { Recipes } from '$lib/interfaces/Recipes';

export const load = (async ({ fetch }) => {   
    let res: Response = await fetch('/api/list-recipes');
    let json: Recipes[] = await res.json();
    let recipes: Recipes[] = json;
    console.log(recipes);

    return {recipes};
}) satisfies PageLoad;