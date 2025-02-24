<script lang="ts">
	import { onMount } from 'svelte';
	import { getAverageRGB } from '$lib/functions/imageColor';
	import Button from './button.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import type { Project } from '$lib/types';

	export let project: Project;
	export let order: number;

	// console.log(project);

	let footer: HTMLElement | null = null;
	let projectNode: HTMLElement | null = null;
	let title: HTMLElement | null = null;

	let rgb = project.customColor ? project.customColor : '255, 255, 255';
	let rgbBrightness =
		(parseInt(rgb.split(',')[0]) * 299 +
			parseInt(rgb.split(',')[1]) * 587 +
			parseInt(rgb.split(',')[2]) * 114) /
		1000;

	const changeProject = () => {
		document.documentElement.style.backgroundColor = `rgba(${rgb}, 0.5)`;
		if (!title) return;
		title.classList.add('animate__fadeOut');
		setTimeout(() => {
			if (!title) return;
			title.style.color = rgbBrightness > 200 ? '#000' : `rgb(${rgb})`;
			title.innerHTML = project.name;
			title.classList.remove('animate__fadeOut');
			title.classList.add('animate__fadeIn');
		}, 200);
	};

	onMount(async () => {
		// Get the section title
		title = document.getElementById('projects-title');

		if (project.customColor) return;
		const image = new Image();
		image.src = `/projects/${project.id}.png`;

		image.onload = () => {
			rgb = getAverageRGB(image);
			rgbBrightness =
				(parseInt(rgb.split(',')[0]) * 299 +
					parseInt(rgb.split(',')[1]) * 587 +
					parseInt(rgb.split(',')[2]) * 114) /
				1000;
		};
	});
</script>

<IntersectionObserver element={projectNode} on:intersect={() => changeProject()} threshold={0.5} />
<div class="h-screen">
	<div
		bind:this={projectNode}
		class="flex flex-row gap-x-6 h-3/4 w-full p-6 items-center shadow-xl backdrop-blur-md rounded-xl {order %
			2 ==
		1
			? 'justify-items-end'
			: 'justify-items-start'}"
		style="background-color: rgba({rgb}, 0.4);"
	>
		<div class="h-full overflow-hidden aspect-square {order % 2 == 1 ? 'order-1' : ''}">
			<img
				class="aspect-square object-cover object-center rounded-xl"
				src={`/projects/${project.id}.png`}
				alt={project.name}
			/>
		</div>
		<div class="h-full flex-grow w-1/2 flex flex-col justify-between">
			<div>
				<h1>{project.name}</h1>
				<p class={rgbBrightness < 50 ? 'text-white' : ''}>{project.description.short}</p>
				<div class="flex flex-row gap-x-2 py-5">
					{#each project.stack as tag}
						<a
							class="font-rotulo font-semibold px-5 py-1 rounded-xl hover:scale-105 transition-all {rgbBrightness <
								125 && 'text-white'}"
							style="background-color: rgba({rgb}, 0.3);"
							href={tag.url}
						>
							{tag.name}
						</a>
					{/each}
				</div>
			</div>
			<a
				class="py-3 rounded-2xl font-rotulo font-semibold text-center text-6xl shadow-xl hover:translate-x-2 hover:-translate-y-2 transition-all {rgbBrightness <
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
