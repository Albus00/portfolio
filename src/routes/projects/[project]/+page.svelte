<script lang="ts">
	import IconButton from '$components/iconButton.svelte';
	import ProjectText from './projectText.svelte';
	import Attribute from './attribute.svelte';
	import Extra from './extra/extra.svelte';
	import { onMount } from 'svelte';
	import { getAverageRGB } from '$lib/functions/imageColor';
	import videojs from 'video.js';

	/** @type {import('./$types').PageData} */
	export let data;

	let rgb = data.customColor ? data.customColor : '255, 255, 255';
	let rgbBrightness =
		(parseInt(rgb.split(',')[0]) * 299 +
			parseInt(rgb.split(',')[1]) * 587 +
			parseInt(rgb.split(',')[2]) * 114) /
		1000;

	onMount(async () => {
		if (data.customColor) return;
		const image = new Image();
		image.src = `/projects/${data.id}.png`;

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

<main
	class="p-5"
	style="background: linear-gradient(to bottom, rgba({rgb}, 0.5), rgba({rgb}, 0.8))"
>
	<h1 class="fixed top-12 left-12 text-[10rem] -z-10 h-screen">
		{data.description.description}
	</h1>
	<div
		class="shadow-xl backdrop-blur-md rounded-xl flex flex-col gap-7 p-8 items-center"
		style="background-color: rgba({rgb}, 0.4);"
	>
		<div class="flex justify-center">
			<!-- <img src="/projects/{data.id}.png" alt={data.name} class="object-cover w-4/5 rounded-xl" /> -->
			<videojs id="vid1" class="video-js">
				<source src="/projects/videos{data.id}.mp4" />
			</videojs>
		</div>
		<div class="w-4/5">
			<h1 class={rgbBrightness < 30 ? 'text-white' : ''}>{data.name}</h1>
			<div class="flex gap-4">
				<IconButton
					icon="github"
					onClickUrl={data.github}
					style={rgbBrightness < 30 ? 'filter: invert();' : ''}
				/>
				<a
					href={data.url}
					class="h-8 w-24 grid place-items-center reflex-pro font-bold text-xl rounded-full transition-all hover:scale-105 {rgbBrightness <
					30
						? 'bg-white'
						: 'bg-black text-white'}"
				>
					DEMO
				</a>
			</div>
			<div class="pt-8">
				<p class={rgbBrightness < 30 ? 'text-white' : ''}>{data.description.scope}</p>
				<p class={rgbBrightness < 30 ? 'text-white' : ''}>{data.description.description}</p>
			</div>
		</div>
	</div>
	<!-- <div class="absolute top-8 right-8 z-40 back-button handheld:hidden">
		<IconButton
			icon="cross"
			size="l"
			onClickUrl="javascript:history.back()"
			style="filter: invert();"
		/>
	</div>
	<section
		class="pt-16 px-horizontal attributes-container flex flex-col gap-7 relative z-20 handheld:px-handheld-horizontal handheld:gap-10"
	>
		<h1 class="h1-project handheld:pb-9">{data.name}</h1>
		<Attribute title="CLIENT">
			<h2 class="pl-7 text-gray-400 handheld:text-4xl">{data.client}</h2>
		</Attribute>
		<Attribute title="REPOSITORY">
			<a href={data.github} class="pl-7 h2-link mobile:hidden">{data.github}</a>
			<a href={data.github} class="pl-7 h2-link hidden mobile:block">github.com</a>
		</Attribute>
		<Attribute title="URL">
			<a href={data.url} class="pl-7 h2-link mobile:hidden">{data.url}</a>
		</Attribute>
		<Attribute title="MADE WITH">
			<div class="flex flex-row flex-wrap gap-x-5 pl-7">
				{#each data.stack as { name, url }}
					<a class="h2-link" href={url}>{name}</a>
				{/each}
			</div>
		</Attribute>
	</section>
	<section class="py-10 bot-section px-horizontal mobile:px-handheld-horizontal">
		<ProjectText text={data.description} />
		<Extra projectName={data.name} />
	</section> -->
</main>

<style>
	h1 {
		animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 2s;
		animation-delay: 0.5s;
		animation-fill-mode: both; /* Hides the element until after the animation is complete */
		@apply text-left font-bold;
	}
</style>
