<script lang="ts">
	import { onMount } from 'svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$components/projectCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);

	let selectedProjects =
		data.category === 'Web apps'
			? projects.webApps
			: data.category === 'Games'
				? projects.games
				: projects.otherProjects;

	let headerHeight = getHeaderHeight(false);

	onMount(() => {
		headerHeight = getHeaderHeight();
	});
</script>

<main
	style="--header: {headerHeight}"
	class="px-2horizontal py-12 justify-center gap-x-horizontal gap-y-12 grid grid-cols-2 grid-rows-2"
>
	{#each selectedProjects as project}
		<ProjectCard {project} />
	{/each}
</main>

<style>
	main {
		margin-top: calc(var(--header) * 1px);
		height: calc(100vh - var(--header) * 1px);
	}
</style>
