<script lang="ts">
	import { projects } from '$lib/data/projects';

	import { onMount } from 'svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import ProjectCard from '$components/projectCard.svelte';

	let order = 0;
</script>

<main class={'px-horizontal justify-center gap-y-12 grid ' + 'handheld:px-handheld-horizontal '}>
	{#each projects as project, index}
		<ProjectCard order={index} {project} />
	{/each}
</main>
