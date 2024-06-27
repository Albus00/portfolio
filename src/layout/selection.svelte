<script lang="ts">
	import { onMount } from 'svelte';
	import CategoryCard from '$components/categoryCard.svelte';
	import Scene from '$components/scene.svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';

	// Set default base header height, before the actual header height is calculated
	let headerHeight = getHeaderHeight(false);

	// Get height of the header
	onMount(() => {
		// headerHeight = getHeaderHeight();
	});
</script>

<section
	style="--header: {headerHeight}"
	class="bg-dark-base grid grid-cols-2 gap-20 px-horizontal box-border pt-10 pb-20"
	id="selection"
>
	<CategoryCard>
		<div class="flex flex-row items-center justify-evenly">
			<Scene elementId="laptop-scene" className={'w-1/2'} />
			<h1 class="text-8xl font-bold mb-5 mr-24">WEB<br /> APPS</h1>
		</div>
		<p class="px-24">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua.
		</p>
	</CategoryCard>
	<CategoryCard>
		<div class="flex flex-row items-center justify-evenly">
			<Scene elementId="tree-scene" className={'w-1/2'} />
			<h1 class="text-8xl font-bold mb-5 mr-24">GAMES</h1>
		</div>
		<p class="px-24">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua.
		</p>
	</CategoryCard>
</section>

<style>
	#selection {
		height: calc(100vh - var(--header) * 1px);
	}
</style>
