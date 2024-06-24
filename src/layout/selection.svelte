<script lang="ts">
	import CategoryCard from '$components/categoryCard.svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import { onMount } from 'svelte';

	let headerHeight = 0;

	// Get height of the header
	onMount(() => {
		headerHeight = getHeaderHeight();
	});
</script>

<section
	style="--header: {headerHeight}"
	class="bg-dark-base grid grid-cols-2 gap-20 px-horizontal box-border pt-10 pb-20"
	id="selection"
>
	<CategoryCard title="Category 1" />
	<CategoryCard title="Category 2" />
</section>

<style>
	#selection {
		height: calc(100vh - var(--header) * 1px);
	}
</style>
