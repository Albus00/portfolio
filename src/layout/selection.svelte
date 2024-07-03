<script lang="ts">
	import { onMount } from 'svelte';
	import CategoryCard from '$components/categoryCard.svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';

	// Set default base header height, before the actual header height is calculated
	let headerHeight = getHeaderHeight(false);

	// Get height of the header
	onMount(() => {
		headerHeight = getHeaderHeight();
	});
</script>

<section
	style="--header: {headerHeight}"
	class={'bg-black relative grid grid-cols-3 gap-x-20 px-horizontal box-border pt-28 pb-32 items-center ' +
		'handheld:grid-rows-3 handheld:grid-cols-1 handheld:px-handheld-horizontal handheld:py-16 handheld:gap-y-16'}
	id="selection"
>
	<CategoryCard title="WEB APPS" model="laptop" />
	<CategoryCard title="GAMES" model="tree" />
	<CategoryCard title="OTHER" model="other" />
</section>

<style>
	#selection {
		min-height: calc(100vh - var(--header) * 1px);
	}
</style>
