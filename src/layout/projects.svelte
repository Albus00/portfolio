<script lang="ts">
	import ProjectCard from '$components/projectCard.svelte';
	import { onMount } from 'svelte';
	import ScrollingTitle from '$components/scrollingTitle.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import type { Project } from '$lib/types';
	import { changeProject } from '$lib/functions/visuals';

	// Import data from load function
	export let projects: Project[] = [];

	let sectionHeight = 0;
	let titleElement: HTMLElement | null = null;
	onMount(() => {
		titleElement = document.getElementById('projects-title');
	});

	let projectNode: HTMLElement | null = null;
</script>

<IntersectionObserver
	element={projectNode}
	on:intersect={() => changeProject(titleElement, 'Projects', '242, 72, 34', 0, true)}
	threshold={0}
/>
<section id="projects">
	<div bind:this={projectNode}></div>
	<ScrollingTitle title="Projects" nextTitle="" {sectionHeight} />
	<div class="px-4 xl:px-horizontal flex-col w-full justify-center gap-y-12 grid">
		{#if projects.length === 0}
			<div class="flex justify-center items-center h-96">
				<p class="text-2xl">No projects to show</p>
			</div>
		{/if}
		{#each projects as project, index}
			<ProjectCard order={index} {project} />
		{/each}
	</div>
</section>
