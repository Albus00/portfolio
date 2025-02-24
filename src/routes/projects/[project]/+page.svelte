<script lang="ts">
	import IconButton from '$components/iconButton.svelte';
	import ProjectText from './projectText.svelte';
	import Attribute from './attribute.svelte';
	import Extra from './extra/extra.svelte';
	import { onMount } from 'svelte';
	import { getAverageRGB } from '$lib/functions/imageColor';
	import { Video, Carousel } from 'flowbite-svelte';
	import type { Project } from '$lib/types';

	export let data;

	console.log(data);

	let project: Project | null = null;
	let rgb = '255, 255, 255';
	let adjustedRgb = '255, 255, 255';
	let rgbBrightness = 255; // Default brightness

	onMount(() => {
		if (!data?.project) {
			window.location.replace('/');
			return; // Prevent further execution
		}

		project = data.project;

		if (project.customColor && project.customColor != '') {
			rgb = project.customColor;
		} else {
			const image = new Image();
			image.src = `/projects/${project.id}.png`;
			image.onload = () => {
				rgb = getAverageRGB(image);
			};
			adjustedRgb = rgb
				.split(',')
				.map((value) => Math.floor(parseInt(value) * 0.2))
				.join(', ');

			console.log(rgb, 'image');
		}

		rgbBrightness =
			(parseInt(rgb.split(',')[0]) * 299 +
				parseInt(rgb.split(',')[1]) * 587 +
				parseInt(rgb.split(',')[2]) * 114) /
			1000;

		console.log(rgb, rgbBrightness);
	});
</script>

{#if project}
	<!-- Only render if project is not null -->
	<main
		class="p-5 min-h-screen"
		style="background: linear-gradient(to top, rgba({adjustedRgb}, 1), rgba({adjustedRgb}, 0.8))"
	>
		<!-- <h1 class="fixed top-12 left-12 text-[10rem] -z-10 h-screen">
			{project.description.long}
		</h1> -->
		<div
			class="shadow-xl backdrop-blur-md rounded-xl flex flex-col gap-7 p-8 items-center"
			style="background: linear-gradient(to bottom, rgba({rgb}, 8), rgba({rgb}, 0.6))"
		>
			<div class="flex justify-center">
				{#if project.video != null && project.video != ''}
					<Video
						src="/projects/videos/{project.id}.mp4"
						class="object-cover w-5/6 rounded-xl"
						autoplay
						controls
						muted
						trackSrc="flowbite.mp4"
					/>
				{:else}
					<img
						src="/projects/{project.id}.png"
						alt={project.name}
						class="object-cover w-5/6 rounded-xl"
					/>
				{/if}
			</div>
			<div class="w-4/5">
				<h1 class={rgbBrightness < 50 ? 'text-white' : ''}>{project.name}</h1>
				<div class="flex gap-4">
					<IconButton
						icon="github"
						onClickUrl={project.repositoryUrl}
						style={rgbBrightness < 50 ? 'filter: invert();' : ''}
					/>
					<a
						href={project.demoUrl}
						class="h-8 w-24 grid place-items-center reflex-pro font-bold text-xl rounded-full transition-all hover:scale-105 {rgbBrightness <
						30
							? 'bg-white'
							: 'bg-black text-white'}"
					>
						DEMO
					</a>
				</div>
				<div class="pt-8">
					<div class={rgbBrightness < 50 ? 'text-white' : ''}>
						{@html project.description.long}
					</div>
				</div>
			</div>
		</div>
	</main>
{/if}

<style>
	:global(h2) {
		all: unset; /* Resets any global styles applied to h2 */
		text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
		@apply text-6xl font-bold handheld:text-7xl;
	}

	p {
		@apply text-2xl handheld:text-xl;
	}
</style>
