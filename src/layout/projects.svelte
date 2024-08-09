<script lang="ts">
	import { projects } from '$lib/data/projects';

	import { onMount } from 'svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import ProjectCard from '$components/projectCard.svelte';

	let headerHeight = getHeaderHeight(false);

	onMount(() => {
		headerHeight = getHeaderHeight();
	});
</script>

<main
	style="--header: {headerHeight}"
	class={'px-2horizontal bg-black py-12 justify-center gap-x-horizontal gap-y-12 grid ' +
		'handheld:px-handheld-horizontal '}
>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</main>

<style>
	main {
		margin-top: calc(var(--header) * 1px);
		min-height: calc(100vh - var(--header) * 1px);
	}
</style>
