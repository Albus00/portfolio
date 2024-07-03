<script lang="ts">
	import IconButton from '$components/iconButton.svelte';
	import ProjectText from '$components/projectText.svelte';
	import Attribute from './attribute.svelte';
	import Extra from './extra/extra.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<main class="bg-black">
	<div
		style="background-image: url(/projects/{data.id}.png);"
		class="project-background bg-center w-full h-screen absolute top-0"
	>
		<div class="bg-black opacity-60 w-full h-full"></div>
	</div>
	<div class="absolute top-8 right-8 z-40 back-button handheld:hidden">
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
			<a href={data.github} class="pl-7 h2-link">{data.github}</a>
		</Attribute>
		<Attribute title="URL">
			<a href={data.url} class="pl-7 h2-link">{data.url}</a>
		</Attribute>
		<Attribute title="MADE WITH">
			<div class="flex flex-row gap-x-5 pl-7">
				{#each data.stack as { name, url }}
					<a class="h2-link" href={url}>{name}</a>
				{/each}
			</div>
		</Attribute>
	</section>
	<section class="py-10 bot-section px-horizontal">
		<ProjectText text={data.description} />
		<Extra projectName={data.name} />
	</section>
</main>

<style>
	main {
		color: white;
	}
	section {
		min-height: 100vh;
	}
	h1 {
		animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 3s;
		animation-delay: 3s;
		animation-fill-mode: both; /* Hides the element until after the animation is complete */
	}
	p {
		font-size: large;
	}
	.project-background {
		animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 4s;
		animation-fill-mode: both; /* Hides the element until after the animation is complete */
	}
	.back-button {
		animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 1s;
		animation-delay: 5s;
		animation-fill-mode: both; /* Hides the element until after the animation is complete */
	}
	.bot-section {
		background-color: black;
	}
</style>
