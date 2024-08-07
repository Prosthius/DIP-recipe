import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Recipes } from "$lib/interfaces/Recipes";

export const recipesStore: Writable<Recipes[]> = writable<Recipes[]>([]);