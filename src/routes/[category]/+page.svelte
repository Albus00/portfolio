<script>
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let headerHeight = getHeaderHeight(false);

	onMount(() => {
		headerHeight = getHeaderHeight();
	});
</script>

<main style="--header: {headerHeight}">
	<h1>{data.category}</h1>
</main>

<style>
	main {
		margin-top: calc(var(--header) * 1px);
		height: calc(100vh - var(--header) * 1px);
	}
</style>
