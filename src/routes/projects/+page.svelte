<script lang="ts">
	import { onMount } from 'svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import ProjectCard from '$components/projectCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let headerHeight = getHeaderHeight(false);

	onMount(() => {
		headerHeight = getHeaderHeight();
	});
</script>

<main
	style="--header: {headerHeight}"
	class={'px-2horizontal bg-black py-12 justify-center gap-x-horizontal gap-y-12 grid grid-cols-2 ' +
		'handheld:px-handheld-horizontal handheld:grid-cols-1'}
>
	{#each data.projects as project}
		<ProjectCard category={data.category} {project} />
	{/each}
</main>

<style>
	main {
		margin-top: calc(var(--header) * 1px);
		min-height: calc(100vh - var(--header) * 1px);
	}
</style>
