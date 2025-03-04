<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './button.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import type { Project } from '$lib/types';
	import { getBrightness, getTextColor } from '$lib/functions/color';
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
<div class="h-screen w-screen lg:w-auto px-4">
	<div
		class="flex flex-col lg:flex-row gap-y-8 gap-x-6 h-full sm:h-5/6 lg:h-3/4 w-full p-2 lg:p-6 items-center shadow-xl backdrop-blur-md rounded-xl {order %
			2 ==
			1 && 'lg:justify-items-end'}"
		style="background-color: rgba({rgb}, 0.4);"
	>
		<div
			bind:this={projectNode}
			class="overflow-clip w-full xl:aspect-square xl:w-1/2 lg:h-full rounded-xl {order % 2 == 1
				? 'lg:order-1'
				: ''}"
		>
			<img
				class="aspect-square sm:aspect-auto lg:aspect-square lg:h-full object-cover object-center rounded-xl"
				src={project.images[0]}
				alt={project.name}
			/>
		</div>
		<div class="h-full w-full lg:w-3/4 xl:1/2 flex flex-col justify-between">
			<div>
				<h1 class={' ' + getTextColor(rgbBrightness)}>{project.name}</h1>
				<p class={' ' + getTextColor(rgbBrightness)}>{project.description.short}</p>
				<div class="hidden lg:flex flex-row gap-x-2 py-5">
					{#each project.stack as tag}
						<ProjectTag {tag} {rgb} {rgbBrightness} />
					{/each}
				</div>
			</div>
			<a
				class="py-2 lg:py-3 rounded-2xl font-rotulo font-semibold text-center text-3xl lg:text-6xl shadow-xl hover:shadow-2xl transition-all {getTextColor(
					rgbBrightness
				)}"
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
		@apply text-5xl lg:text-8xl font-bold;
	}
	p {
		@apply text-lg lg:text-2xl;
	}
</style>
