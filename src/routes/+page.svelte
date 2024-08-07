<script lang="ts">
    import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { Card, Listgroup, ListPlaceholder } from 'flowbite-svelte';
    import { recipesStore } from '$lib/stores';
	import type { Recipes } from '$lib/interfaces/Recipes';
	import type { PageData } from './$types';

	export let data: PageData;

    onMount(() => {
        recipesStore.set(data.recipes);
    });

	function handleClick(item: Recipes) {
		goto(`/recipe/${item.id}`);
	}
</script>

<div class="text-3xl font-semibold">Featured Recipe</div>
<ListPlaceholder />

<!-- <Card size="sm"> -->
	<div class="flex justify-between mt-5">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recipes</h5>
	</div>
	<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
		<Listgroup
			active
			items={data.recipes}
			let:item
			class="border-b-4 dark:!bg-transparent cursor-pointer"
			on:click={(e) => handleClick(e.detail)}
		>
			<div class="flex items-start space-x-4 rtl:space-x-reverse">
				<div class="flex-1 min-w-0">
					<p class="text-lg font-medium text-gray-900 dark:text-white">
						{item.title}
					</p>
				</div>
			</div>
		</Listgroup>
	</p>
<!-- </Card> -->
