<script lang="ts">
	import { onMount } from 'svelte';
	import { Video } from 'flowbite-svelte';
	import ProjectTag from '$components/projectTag.svelte';
	import type { Project, ProjectInfo } from '$lib/types';
	import { checkBrightnessThreshold, getBrightness, getTextColor } from '$lib/functions/color';

	export let data;

	const project: Project | null = data.project;
	const projectColor = project?.customColor ?? '0, 0, 0';
	const rgbBrightness = getBrightness(projectColor);
	let activeIndex = 0; // 0 = Media, 1 = Info

	// Mouse drag variables
	let startX = 0;
	let isDragging = false;
	const SNAP_THRESHOLD = 100;
	const SMALL_SCREEN_THRESHOLD = 768; // https://tailwindcss.com/docs/responsive-design
	let translateX = '';
	let descSlideOffset = '';
	let screenWidth: number = 1024;

	// Event handlers for mouse
	function handleMouseDown(event: MouseEvent) {
		startX = event.clientX;
		isDragging = true;
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isDragging) return;
		handleDrag(event.clientX);
	}

	function handleMouseUp() {
		isDragging = false;
	}

	// Event handlers for touch
	function handleTouchStart(event: TouchEvent) {
		startX = event.touches[0].clientX; // Get the first touch point
		isDragging = true;
	}

	function handleTouchMove(event: TouchEvent) {
		if (!isDragging) return;
		handleDrag(event.touches[0].clientX);
	}

	function handleTouchEnd() {
		isDragging = false;
	}

	// Shared logic for mouse and touch dragging
	function handleDrag(currentX: number) {
		const diff = currentX - startX;
		if (Math.abs(diff) > SNAP_THRESHOLD) {
			activeIndex = diff > 0 ? 0 : 1;
			translateX = getTranslateX(activeIndex, screenWidth);
			isDragging = false;
		}
	}

	const getTranslateX = (index: number, screenWidth: number) => {
		return screenWidth < SMALL_SCREEN_THRESHOLD
			? `translateX(calc(-95% * ${index}));`
			: `translateX(calc(-80% * ${index}));`;
	};

	function interoperateInfo(): ProjectInfo[] {
		const info = project?.info;
		if (!info) return [];

		const elements = info.split(', ').map((element) => element.split(': '));

		return elements.map((entry) => ({
			item: entry[0],
			text: entry[1] as string
		}));
	}

	onMount(() => {
		screenWidth = window.innerWidth;
		descSlideOffset = screenWidth < SMALL_SCREEN_THRESHOLD ? 'translateX(-5%)' : 'translateX(-20%)';

		// Set the background color for mobile devices to avoid white edges
		document.documentElement.style.backgroundColor = `rgba(${projectColor}, 0.8)`;
	});
</script>

{#if project}
	<main class="min-h-screen w-screen overflow-hidden flex items-center justify-center">
		<section
			class="flex w-full h-full transition-transform duration-300"
			style={`transform: ${translateX}`}
			on:mousedown={handleMouseDown}
			on:mousemove={handleMouseMove}
			on:mouseup={handleMouseUp}
			on:mouseleave={handleMouseUp}
			on:touchstart={handleTouchStart}
			on:touchmove={handleTouchMove}
			on:touchend={handleTouchEnd}
			role="presentation"
		>
			<!-- Media Slide -->
			<section class="flex justify-center items-center min-w-[100%] h-screen">
				{#if project.video}
					<Video
						src="/projectMedia/videos/{project.id}.mp4"
						class="object-cover w-11/12 md:w-3/4 h-5/6 rounded-xl"
						autoplay
						muted
						controls
					/>
				{:else}
					<img
						src={project.images[0]}
						alt={project.name}
						class="object-cover w-11/12 md:w-3/4 h-5/6 rounded-xl"
					/>
				{/if}
			</section>

			<!-- Description Slide -->
			<section
				id="project-description"
				class="flex justify-center items-center min-w-full h-screen"
				style={`transform: ${descSlideOffset};`}
			>
				<div
					class={'flex flex-col justify-between rounded-xl p-4 md:p-8 text-center w-11/12 md:w-3/4 h-5/6 border border-opacity-40 ' +
						(checkBrightnessThreshold(rgbBrightness) ? 'border-white' : 'border-black')}
				>
					<div class="relative flex flex-col justify-between projectMin:justify-start h-full">
						<div>
							<h3 class={getTextColor(rgbBrightness)}>
								{project.name}
							</h3>
							<p
								class={'text-left w-full md:w-4/5 projectMin:w-1/2 font-semibold pb-8 ' +
									getTextColor(rgbBrightness)}
							>
								{project.description.long}
							</p>
						</div>
						<div
							class="projectMin:absolute top-0 right-0 w-full md:w-1/2 projectMin:w-[350px] projectMin:h-full rounded-xl p-5 flex flex-col justify-between"
							style={`background-color: rgba(${projectColor}, 0.3);`}
						>
							<div class="mb-5">
								<h4 class={getTextColor(rgbBrightness)}>Project Info</h4>
								<div class={'flex flex-col gap-2'}>
									{#each interoperateInfo() as info}
										<div class="flex flex-row">
											<p class={'font-semibold mr-1 ' + getTextColor(rgbBrightness)}>
												{info.item}:
											</p>
											<p class={'text-left ' + getTextColor(rgbBrightness)}>{info.text}</p>
										</div>
									{/each}
								</div>
							</div>
							<div class="flex flex-col gap-3">
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
					</div>
				</div>
			</section>
		</section>
	</main>
{/if}
