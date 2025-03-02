<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './button.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import type { Project } from '$lib/types';
	import { getBrightness } from '$lib/functions/color';
	import ProjectTag from './projectTag.svelte';
	import { changeProject } from '$lib/functions/visuals';

	export let project: Project;
	export let order: number;

	let projectNode: HTMLElement | null = null;
	let titleElement: HTMLElement | null = null;

	let rgb = project.customColor ? project.customColor : '255, 255, 255';
	let rgbBrightness = getBrightness(rgb);

	onMount(async () => {
		// Get the section title
		titleElement = document.getElementById('projects-title');
	});
</script>

<IntersectionObserver
	element={projectNode}
	on:intersect={() => changeProject(titleElement, project.name, rgb, rgbBrightness)}
	threshold={0.2}
/>
<div class="h-screen">
	<div
		class="flex flex-row gap-x-6 h-3/4 w-full p-6 items-center shadow-xl backdrop-blur-md rounded-xl {order %
			2 ==
		1
			? 'justify-items-end'
			: 'justify-items-start'}"
		style="background-color: rgba({rgb}, 0.4);"
	>
		<div
			bind:this={projectNode}
			class="h-full overflow-hidden aspect-square {order % 2 == 1 ? 'order-1' : ''}"
		>
			<img
				class="aspect-square object-cover object-center rounded-xl"
				src={project.images[0]}
				alt={project.name}
			/>
		</div>
		<div class="h-full flex-grow w-1/2 flex flex-col justify-between">
			<div>
				<h1 class={'header1 ' + (rgbBrightness < 50 ? 'text-white' : '')}>{project.name}</h1>
				<p class={rgbBrightness < 50 ? 'text-white' : ''}>{project.description.short}</p>
				<div class="flex flex-row gap-x-2 py-5">
					{#each project.stack as tag}
						<ProjectTag {tag} {rgb} {rgbBrightness} />
					{/each}
				</div>
			</div>
			<a
				class="py-3 rounded-2xl font-rotulo font-semibold text-center text-6xl shadow-xl hover:shadow-2xl transition-all {rgbBrightness <
					125 && 'text-white'}"
				style="background-color: rgba({rgb}, 0.3);"
				id={project.id}
				href={`/projects/${project.id}`}>Read more</a
			>
		</div>
	</div>
</div>

<style>
	h1 {
		text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
		@apply text-8xl font-bold handheld:text-7xl;
	}
	p {
		@apply text-2xl handheld:text-xl;
	}
</style>
