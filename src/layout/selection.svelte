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
	class={'bg-black relative grid grid-cols-3 gap-x-horizontal px-horizontal box-border pt-28 pb-32 items-center ' +
		'laptop:py-0 ' +
		'handheld:grid-rows-3 handheld:grid-cols-1 handheld:px-handheld-horizontal handheld:py-16 handheld:gap-y-16'}
	id="selection"
>
	<CategoryCard title="WEB APPS" model="laptop" fadeDelay={0} />
	<CategoryCard title="GAMES" model="tree" fadeDelay={200} />
	<CategoryCard title="OTHER" model="other" fadeDelay={400} />
</section>

<style>
	#selection {
		min-height: calc(100vh - var(--header) * 1px);
	}
</style>
