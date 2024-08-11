<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$components/projectCard.svelte';
	import { onMount } from 'svelte';
	import ScrollingTitle from '$components/scrollingTitle.svelte';

	let sectionHeight = 0;
	onMount(() => {
		sectionHeight = window.innerHeight * (projects.length + 3);
	});
</script>

<section id="projects">
	<ScrollingTitle title="Projects" nextTitle="" {sectionHeight} />
	<div class="h-screen px-horizontal justify-center gap-y-12 grid">
		{#each projects as project, index}
			<ProjectCard order={index} {project} />
		{/each}
	</div>
</section>
