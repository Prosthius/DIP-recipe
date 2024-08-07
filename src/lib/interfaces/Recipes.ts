import type { Recipe } from '$lib/interfaces/Recipe';

export interface Recipes {
    id: number;
    title: string;
    Recipe: Recipe[];
}