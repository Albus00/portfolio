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
	class={'bg-black relative grid grid-cols-3 gap-x-20 px-horizontal box-border pt-28 pb-32 ' +
		'handheld:grid-rows-3 handheld:grid-cols-1 handheld:px-8 handheld:py-8 handheld:gap-y-8'}
	id="selection"
>
	<CategoryCard title="WEB APPS" model="laptop" />
	<CategoryCard title="GAMES" model="tree" />
	<CategoryCard title="OTHER PROJECTS" model="other" />
</section>

<style>
	#selection {
		min-height: calc(100vh - var(--header) * 1px);
	}
</style>
