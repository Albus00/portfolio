<script lang="ts">
	import { onMount } from 'svelte';
	import { getAverageRGB } from '$lib/functions/imageColor';
	import Button from './button.svelte';

	export let project;
	export let order: number;

	let footer: HTMLElement | null = null;

	let rgb = project.customColor ? project.customColor : '255, 255, 255';
	let rgbBrightness =
		(parseInt(rgb.split(',')[0]) * 299 +
			parseInt(rgb.split(',')[1]) * 587 +
			parseInt(rgb.split(',')[2]) * 114) /
		1000;

	const projectId = project.name
		.toLowerCase()
		.replace(/ö/g, 'o')
		.replace(/ä/g, 'a')
		.replace(/å/g, 'a')
		.replace(/ /g, '-');

	onMount(async () => {
		if (project.customColor) return;
		const image = new Image();
		image.src = `/projects/${projectId}.png`;

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

<div
	class="flex flex-row gap-x-6 h-[500px] w-full p-6 items-center shadow-xl backdrop-blur-md rounded-xl {order %
		2 ==
	1
		? 'justify-items-end'
		: 'justify-items-start'}"
	style="background-color: rgba({rgb}, 0.4);"
>
	<div class="h-full overflow-hidden aspect-square {order % 2 == 1 ? 'order-1' : ''}">
		<img
			class="aspect-square object-cover object-center rounded-xl"
			src={`/projects/${projectId}.png`}
			alt={project.name}
		/>
	</div>
	<div class="h-full flex-grow w-1/2 flex flex-col">
		<h1>{project.name}</h1>
		<a class="w-5/6 transition-all hover:scale-105 p-5" id={projectId} href={`/${projectId}`}> </a>
		<p>{project.description['description']}</p>
		<div class="flex flex-row gap-x-2">
			{#each project.stack as tag}
				<a
					class="font-rotulo font-semibold px-4 py-1 rounded-xl hover:scale-105 transition-all {rgbBrightness >
					200
						? 'text-black'
						: 'text-white'}"
					style="background-color: rgb({rgb});"
					href={tag.url}
				>
					{tag.name}
				</a>
			{/each}
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
