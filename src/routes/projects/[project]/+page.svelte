<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import ProjectTag from '$components/projectTag.svelte';
	import { Video, Carousel } from 'flowbite-svelte';
	import type { Project } from '$lib/types';
	import { getBrightness } from '$lib/functions/color';
	import { color } from 'three/examples/jsm/nodes/Nodes.js';

	export let data;

	const project: Project | null = data.project;
	const projectColor = project && project.customColor ? project.customColor : '0, 0, 0';
	const rgbBrightness = getBrightness(projectColor);
	let mediaWidth = '';

	function updateMediaWidth() {
		const mediaElement = document.querySelector('video, img');
		mediaWidth = mediaElement ? mediaElement.clientWidth + 'px' : '100vw';
	}

	onMount(() => {
		if (!data?.project) {
			window.location.replace('/');
			return; // Prevent further execution
		}

		updateMediaWidth();
		window.addEventListener('resize', updateMediaWidth);
	});
</script>

{#if project}
	<!-- Only render if project is not null -->
	<main class="p-5 min-h-screen" style="background-color: rgba({projectColor}, 0.5);">
		<div
			class="shadow-xl backdrop-blur-md rounded-xl flex flex-col gap-7 p-8 items-center"
			style="background-color: rgba({projectColor}, 0.4);"
		>
			<div>
				<div class="flex flex-col justify-start items-center w-full h-[calc(100vh-5rem)]">
					{#if project.video != null && project.video != ''}
						<Video
							src="/projectMedia/videos/{project.id}.mp4"
							class="object-cover w-5/6 h-full rounded-xl"
							autoplay
							controls
							muted
							trackSrc="flowbite.mp4"
						/>
					{:else}
						<img
							src={project.images[0]}
							alt={project.name}
							class="object-cover w-5/6 h-full rounded-xl"
						/>
					{/if}
				</div>
			</div>
			{#if mediaWidth}
				<div class="flex flex-col justify-start items-center" style="width: {mediaWidth};">
					<div class="flex flex-row items-end gap-1 w-full">
						{#if project.demoUrl}
							<ProjectTag
								tag={{ name: 'DEMO', url: project.demoUrl }}
								rgb={projectColor}
								{rgbBrightness}
								isLarge={true}
							/>
						{/if}
						{#if project.repositoryUrl}
							<ProjectTag
								tag={{ name: 'REPOSITORY', url: project.repositoryUrl }}
								rgb={projectColor}
								{rgbBrightness}
								isLarge={true}
							/>
						{/if}

						<div class="flex flex-col items-start gap-1">
							{#each project.stack
								.slice()
								.sort((a, b) => a.name.length - b.name.length) as stackItem}
								<ProjectTag
									tag={{ name: stackItem.name, url: stackItem.url }}
									rgb={projectColor}
									{rgbBrightness}
								/>
							{/each}
						</div>
					</div>
					<div class={`pt-5 project-content ${rgbBrightness < 30 && 'invert'}`}>
						<div class="mb-10">
							<h1 class="inline">{project.name}</h1>
							<p class="text-xl inline">{project.description.short.replace(project.name, '')}</p>
						</div>
						{@html project.description.long}
					</div>
				</div>
			{/if}
		</div>
	</main>
{/if}

<style>
	// TODO: Fix local styling
	.project-content p,
	ul {
		@apply text-xl mb-4 handheld:text-xl;
	}
	.project-content h1 {
		all: unset;
		font-family: 'reflex-pro-variable', sans-serif;
		@apply text-left mt-4 text-5xl font-bold handheld:text-2xl text-white;
	}
</style>
