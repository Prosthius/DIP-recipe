<script lang="ts">
	import { onMount } from 'svelte';
	import { recipesStore } from '$lib/stores';
	import { Card, Listgroup, Toggle } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import type { Recipe } from '$lib/interfaces/Recipe';
	import type { PageData } from './$types';

	let recipe: Recipe = {
		title: 'Chocolate Chip Cookies',
		steps: [
			{
				step: 1,
				ingredients: [
					{
						ingredient: 'Flour',
						measurement: '2 cups',
						metric: true,
						imperial: false
					},
					{
						ingredient: 'Sugar',
						measurement: '1 cup',
						metric: true,
						imperial: false
					}
				],
				instructions: 'In a large bowl, whisk together the flour and sugar.'
			},
			{
				step: 2,
				ingredients: [
					{
						ingredient: 'Butter',
						measurement: '1/2 cup',
						metric: true,
						imperial: false
					}
				],
				instructions:
					'Add the butter to the bowl and mix until the mixture resembles coarse crumbs.'
			},
			{
				step: 3,
				ingredients: [
					{
						ingredient: 'Eggs',
						measurement: '2',
						metric: false,
						imperial: false
					},
					{
						ingredient: 'Vanilla Extract',
						measurement: '1 tsp',
						metric: false,
						imperial: false
					}
				],
				instructions: 'Beat in the eggs and vanilla extract until the dough comes together.'
			},
			{
				step: 4,
				ingredients: [
					{
						ingredient: 'Milk',
						measurement: '1/2 cup',
						metric: true,
						imperial: false
					}
				],
				instructions: 'Gradually add the milk, mixing until the dough is smooth.'
			},
			{
				step: 5,
				ingredients: [
					{
						ingredient: 'Baking Powder',
						measurement: '1 tbsp',
						metric: false,
						imperial: false
					},
					{
						ingredient: 'Salt',
						measurement: '1/2 tsp',
						metric: true,
						imperial: false
					}
				],
				instructions: 'Stir in the baking powder and salt until well combined.'
			},
			{
				step: 6,
				ingredients: [
					{
						ingredient: 'Chocolate Chips',
						measurement: '1 cup',
						metric: true,
						imperial: false
					}
				],
				instructions:
					'Fold in the chocolate chips. Preheat the oven to 350°F (175°C) and bake for 25-30 minutes.'
			}
		]
	};

	export let data: PageData;

	let checked: boolean = false;
	let measurement: string = 'metric';
	// let recipe: Recipe = $recipesStore[0]

	const recipeID: string | undefined = $page.url.pathname.split('/').pop();

	function handleToggleChange(event: any) {
		checked = event.target.checked;
		measurement = checked ? 'imperial' : 'metric';
	}

	function capitaliseFirstLetter(string: string): string {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
</script>

<div class="container mx-auto">
	<h2 class="text-5xl font-semibold mb-5">{recipeID}</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<Card size="lg">
			<div class="flex justify-between">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Ingredients
				</h5>
				<Toggle bind:checked on:change={handleToggleChange} class="font-semibold"
					>{capitaliseFirstLetter(measurement)}</Toggle
				>
			</div>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				{#each recipe.steps as step}
					{#each step.ingredients as ingredient}
						<Listgroup items={[ingredient]} class="border-b-4 dark:!bg-transparent">
							<div class="flex items-start space-x-4 rtl:space-x-reverse">
								<div class="flex-1 min-w-0">
									<p class="text-lg font-medium text-gray-900 dark:text-white">
										{ingredient.ingredient}
									</p>
								</div>
								<div
									class="flex flex-col items-end text-base font-semibold text-gray-900 dark:text-white"
								>
									<span>{ingredient.measurement}</span>
									{#if ingredient.metric}
										<span class="text-sm font-normal text-gray-500 dark:text-gray-400">Metric</span>
									{:else if ingredient.imperial}
										<span class="text-sm font-normal text-gray-500 dark:text-gray-400"
											>Imperial</span
										>
									{:else}
										<span class="text-sm font-normal text-gray-500 dark:text-gray-400">&#8203;</span
										>
									{/if}
								</div>
							</div>
						</Listgroup>
					{/each}
				{/each}
			</p>
		</Card>
		<Card size="xl" class="sm:col-span-1 lg:col-span-2">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Steps</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				<Listgroup items={recipe.steps} let:item class="border-0 dark:!bg-transparent">
					<div class="flex items-center space-x-4 rtl:space-x-reverse">
						<div class="flex-1 min-w-0">
							<div class="text-sm font-medium text-gray-900 dark:text-white">
								<p class="font-bold">{item.step}</p>
								<p>{item.instructions}</p>
							</div>
						</div>
					</div>
				</Listgroup>
			</p>
			<img src="" alt="Picture of completed recipe" />
		</Card>
	</div>
</div>
