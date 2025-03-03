<script lang="ts">
	import { onMount } from 'svelte';
	import { Video } from 'flowbite-svelte';
	import ProjectTag from '$components/projectTag.svelte';
	import type { Project } from '$lib/types';
	import { getBrightness } from '$lib/functions/color';

	export let data;

	const project: Project | null = data.project;
	const projectColor = project?.customColor ?? '0, 0, 0';
	const rgbBrightness = getBrightness(projectColor);
	let activeIndex = 0; // 0 = Media, 1 = Info

	// Mouse drag variables
	let startX = 0;
	let isDragging = false;
	const SNAP_THRESHOLD = 100;
	let translateX = `translateX(calc(-88% * ${activeIndex}));`;

	// Desktop mouse drag support
	function handleMouseDown(event: MouseEvent) {
		startX = event.clientX;
		isDragging = true;
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isDragging) return;
		const diff = event.clientX - startX;

		if (diff > SNAP_THRESHOLD && activeIndex === 1) {
			translateX = 'translateX(calc(-80% * 0));';
			activeIndex = 0;
			isDragging = false;
		} else if (diff < -SNAP_THRESHOLD && activeIndex === 0) {
			translateX = 'translateX(calc(-80% * 1));';
			activeIndex = 1;
			isDragging = false;
		}
	}

	function handleMouseUp() {
		isDragging = false;
	}
</script>

{#if project}
	<main
		class="min-h-screen w-screen overflow-hidden flex items-center justify-center"
		style="background-color: rgba({projectColor}, 0.8);"
	>
		<section
			class="flex w-full h-full transition-transform duration-300"
			style={`transform: ${translateX}`}
			on:mousedown={handleMouseDown}
			on:mousemove={handleMouseMove}
			on:mouseup={handleMouseUp}
			on:mouseleave={handleMouseUp}
			role="presentation"
		>
			<!-- Media Slide -->
			<section class="flex justify-center items-center min-w-[100%] h-screen">
				{#if project.video}
					<Video
						src="/projectMedia/videos/{project.id}.mp4"
						class="object-cover w-3/4 h-5/6 rounded-xl"
						autoplay
						controls
						muted
					/>
				{:else}
					<img
						src={project.images[0]}
						alt={project.name}
						class="object-cover w-3/4 h-5/6 rounded-xl"
					/>
				{/if}
			</section>

			<!-- Info Slide -->
			<section
				class="flex justify-center items-center min-w-full h-screen"
				style={`transform: translateX(calc(-20%));`}
			>
				<div
					class={'flex flex-col justify-between rounded-xl p-8 text-center w-3/4 h-5/6 border border-opacity-40 ' +
						(rgbBrightness < 125 ? 'border-white' : 'border-black')}
				>
					<div class="flex flex-row justify-between">
						<div>
							<h1
								class={'text-9xl font-bold mb-4 text-left ' +
									(rgbBrightness < 125 ? 'text-white' : '')}
							>
								{project.name}
							</h1>
							<div
								class={'text-left w-1/2 font-semibold ' + (rgbBrightness < 125 ? 'text-white' : '')}
							>
								{project.description.long}
							</div>
						</div>
						<!-- TODO: Move this with pos absolute -->
						<div
							class="h-full w-[1200px] rounded-xl p-5"
							style={`background-color: rgba(${projectColor}, 0.3);`}
						>
							<h2
								class={'text-5xl font-bold mb-4 text-left ' +
									(rgbBrightness < 125 ? 'text-white' : '')}
							>
								STACK
							</h2>
							<div class="flex flex-row gap-3">
								{#each project.stack as tag}
									<ProjectTag {tag} rgb={projectColor} {rgbBrightness} />
								{/each}
							</div>
						</div>
					</div>
					<div class="flex flex-wrap gap-3">
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
					</div>
				</div>
			</section>
		</section>
	</main>
{/if}
