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
	<CategoryCard title="WEB APPS">
		<Scene elementId="laptop-scene" className={'w-3/4 aspect-auto'} />
	</CategoryCard>
	<CategoryCard title="GAMES">
		<Scene elementId="tree-scene" className={'w-3/4 aspect-auto'} />
	</CategoryCard>
</section>

<style>
	#selection {
		height: calc(100vh - var(--header) * 1px);
	}
</style>
