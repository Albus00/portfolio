<script lang="ts">
	import IconButton from '$components/iconButton.svelte';
	import ProjectText from './projectText.svelte';
	import Extra from './extra/extra.svelte';
	import { onMount } from 'svelte';
	import { Video, Carousel } from 'flowbite-svelte';
	import type { Project } from '$lib/types';

	export let data;

	const project: Project | null = data.project;
	const projectColor = project && project.customColor ? project.customColor : '255, 255, 255';
	const rgbBrightness =
		(parseInt(projectColor.split(',')[0]) * 299 +
			parseInt(projectColor.split(',')[1]) * 587 +
			parseInt(projectColor.split(',')[2]) * 114) /
		1000;
	const backgroundColor = projectColor + ', 0.5';

	onMount(() => {
		if (!data?.project) {
			window.location.replace('/');
			return; // Prevent further execution
		}
	});
</script>

{#if project}
	<!-- Only render if project is not null -->
	<main
		class="p-5 min-h-screen"
		style="background: linear-gradient(to bottom, rgba({projectColor}, 0.9), rgba({projectColor}, 1))"
	>
		<div
			class="shadow-xl backdrop-blur-md rounded-xl flex flex-col gap-7 p-8 items-center"
			style="background: linear-gradient(to bottom, rgba({backgroundColor}, 8), rgba({backgroundColor}, 0.6))"
		>
			<div class="flex flex-col justify-start items-center w-full h-screen">
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
				<div class="flex justify-between w-5/6 h-28 mt-5">
					<div class="flex items-start gap-4">
						<IconButton
							icon="github"
							onClickUrl={project.repositoryUrl}
							style={rgbBrightness < 50 ? 'filter: invert();' : ''}
						/>
						<a
							href={project.demoUrl}
							class="h-8 px-5 grid place-items-center reflex-pro font-bold text-xl rounded-full transition-all hover:scale-105 {rgbBrightness <
							30
								? 'bg-white'
								: 'bg-black text-white'}"
						>
							DEMO
						</a>
					</div>
					<div class="flex gap-4">
						{#each project.stack as stackItem}
							<a
								href={stackItem.url}
								class="h-8 px-3 grid place-items-center font-rotulo font-light text-xl rounded-full transition-all hover:scale-105 {rgbBrightness <
								30
									? 'bg-white'
									: 'bg-black text-white'}"
							>
								{stackItem.name}
							</a>
						{/each}
					</div>
				</div>
			</div>
			<div class="w-4/5">
				<div class={`pt-8 ${rgbBrightness < 30 && 'invert'}`}>
					{@html project.description.long}
				</div>
			</div>
		</div>
	</main>
{/if}

<style>
	:global(h2) {
		all: unset; /* Resets any global styles applied to h2 */
		@apply text-6xl font-rotulo h-44 font-thin handheld:text-7xl leading-relaxed;
	}

	:global(p) {
		@apply text-2xl mb-4 handheld:text-xl;
	}

	:global(ul) {
		@apply text-2xl mb-4 handheld:text-xl;
	}
</style>
