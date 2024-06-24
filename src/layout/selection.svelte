<script lang="ts">
	import CategoryCard from '$components/categoryCard.svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import { onMount } from 'svelte';

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
		<p>Here you can find all my web applications</p>
	</CategoryCard>
	<CategoryCard title="GAMES">
		<p>Here you can find all my games</p>
	</CategoryCard>
</section>

<style>
	#selection {
		height: calc(100vh - var(--header) * 1px);
	}
</style>
