<script lang="ts">
	import { onMount } from 'svelte';
	import { Video } from 'flowbite-svelte';
	import ProjectTag from '$components/projectTag.svelte';
	import type { Project, ProjectInfo } from '$lib/types';
	import { checkBrightnessThreshold, getBrightness, getTextColor } from '$lib/functions/color';
	import { isMidScreen } from '$lib/functions/visuals.js';
	export let data;

	const project: Project | null = data.project;
	const projectColor = project?.customColor ?? '0, 0, 0';
	const rgbBrightness = getBrightness(projectColor);
	let activeIndex = 0; // 0 = Media, 1 = Info
	let descriptionDiv: HTMLElement | null = null;

	// Mouse drag variables
	let startX = 0;
	let isDragging = false;
	const SNAP_THRESHOLD = 100;
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
		return !isMidScreen(screenWidth)
			? `translateX(calc(-94% * ${index}));`
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

	const goToSlide = (index: number) => {
		if (index === activeIndex) return;
		activeIndex = index;
		translateX = getTranslateX(activeIndex, screenWidth);
	};

	onMount(() => {
		screenWidth = window.innerWidth;
		descSlideOffset = !isMidScreen(screenWidth) ? 'translateX(-6%)' : 'translateX(-20%)';

		window.addEventListener('wheel', function (event) {
			if (event.deltaY < 0) {
				// Scrolling up
				const isOverflowing =
					descriptionDiv && descriptionDiv.scrollHeight > descriptionDiv.clientHeight;

				if (isOverflowing) {
					return;
				}
				if (activeIndex === 1) {
					goToSlide(0);
				}
			} else if (event.deltaY > 0) {
				// Scrolling down
				if (activeIndex === 0) {
					goToSlide(1);
				}
			}
		});

		// Set the background color of the page to the project color
		document.documentElement.style.backgroundColor = `rgba(${projectColor}, 0.8)`;

		const img = document.querySelector('img');
		if (img != null) {
			img.ondragstart = () => {
				return false;
			};
		}
	});
</script>

{#if project}
	<main class="min-h-full w-full overflow-hidden flex items-center justify-center">
		<section
			class="flex w-full transition-transform duration-300 h-screen items-center"
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
			<section class="flex justify-center items-center min-w-[100%] h-5/6" role="presentation">
				{#if project.video}
					<Video
						src="/projectMedia/videos/{project.id}.mp4"
						class="w-11/12 md:w-3/4 h-full rounded-xl object-cover object-center"
						autoplay
						muted
						controls
					/>
				{:else}
					<img
						src={project.image}
						alt={project.name}
						class="w-auto max-w-[75%] h-full max-h-full rounded-xl object-cover object-center hidden md:block"
					/>
					<img
						src={project.mobileImage}
						alt={project.name}
						class="w-full max-w-[91.666667%] h-full rounded-xl object-cover object-center md:hidden"
					/>
				{/if}
			</section>

			<!-- Description Slide -->
			<section
				id="project-description"
				class="flex justify-center items-center min-w-full h-screen unselectable"
				style={`transform: ${descSlideOffset};`}
				role="presentation"
			>
				<div
					class={'flex flex-col justify-between rounded-xl p-4 md:p-8 text-center w-11/12 md:w-3/4 h-5/6 border border-opacity-40 overflow-y-auto ' +
						(checkBrightnessThreshold(rgbBrightness) ? 'border-white' : 'border-black')}
				>
					<div
						class="relative flex flex-col justify-between projectMin:justify-start h-full"
						bind:this={descriptionDiv}
					>
						<div class="pb-8">
							<h3 class={getTextColor(rgbBrightness)}>
								{project.name}
							</h3>
							<div class="w-full md:w-4/5 projectMin:w-1/2">
								<p class={getTextColor(rgbBrightness)}>
									{project.description.long}
								</p>
							</div>
						</div>
						<div class="pb-5">
							<!-- Extra div for overflow y padding at the bottom :( -->
							<div
								class="projectMin:absolute top-0 right-0 w-full md:w-1/2 projectMin:w-[350px] projectMin:h-full rounded-xl p-4 flex flex-col justify-between"
								style={`background-color: rgba(${projectColor}, 0.3);`}
							>
								<div class="mb-5">
									<h4 class={getTextColor(rgbBrightness)}>Project Info</h4>
									<div class={'flex flex-col gap-1'}>
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
									<ProjectTag
										tag={{ name: 'GALLERY', url: `${project.id}/gallery` }}
										rgb={projectColor}
										{rgbBrightness}
										isLarge={true}
									/>
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
				</div>
			</section>
		</section>
	</main>
{/if}

<style>
	p {
		@apply text-left text-sm;
	}
</style>
