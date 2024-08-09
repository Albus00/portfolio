<script lang="ts">
	import { onMount } from 'svelte';
	import IconButton from './iconButton.svelte';

	export let project;

	let footer: HTMLElement | null = null;

	const projectId = project.name
		.toLowerCase()
		.replace(/ö/g, 'o')
		.replace(/ä/g, 'a')
		.replace(/å/g, 'a')
		.replace(/ /g, '-');

	onMount(() => {
		// get card footer
		footer = document
			.getElementById(projectId)
			?.getElementsByClassName('project-card-footer')[0] as HTMLElement;
	});
</script>

<div class="grid grid-cols-2 h-screen box-border">
	<a id={projectId} href={`/${projectId}`}>
		<img
			class="h-3/4 aspect-square object-cover object-center"
			src={`/projects/${projectId}.png`}
			alt={project.name}
		/>
	</a>
	<h2 class="h2-project">{project.name}</h2>
</div>
