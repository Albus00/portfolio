<script lang="ts">
	import ProjectCard from '$components/projectCard.svelte';
	import { onMount } from 'svelte';
	import ScrollingTitle from '$components/scrollingTitle.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	// Import data from load function
	export let data;
	let projects = data.projects ?? [];

	let sectionHeight = 0;
	let title: HTMLElement | null = null;
	onMount(() => {
		title = document.getElementById('projects-title');
	});

	let projectNode: HTMLElement | null = null;
	const changeProject = () => {
		document.documentElement.style.backgroundColor = `#F2F2F2`;
		if (!title) return;
		title.classList.add('animate__fadeOut');
		setTimeout(() => {
			if (!title) return;
			title.style.color = '#F24822';
			title.innerHTML = 'Projects';
			title.classList.remove('animate__fadeOut');
			title.classList.add('animate__fadeIn');
		}, 200);
	};
</script>

<IntersectionObserver element={projectNode} on:intersect={() => changeProject()} threshold={0.5} />
<section id="projects">
	<div bind:this={projectNode}></div>
	<ScrollingTitle title="Projects" nextTitle="" {sectionHeight} />
	<div class="px-horizontal flex-col w-full justify-center gap-y-12 grid">
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
