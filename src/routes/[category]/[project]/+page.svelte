<script lang="ts">
	import IconButton from '$components/iconButton.svelte';
	import Attribute from './attribute.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	data.description =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
</script>

<!-- <main style="--header: {headerHeight}" class="flex flex-col pt-10 px-horizontal">
	<div class="grid grid-cols-2">
		<img
			class="rounded-img card-shadow"
			src="/projects/{data.id}.png"
			alt="albin-kjellberg_{data.id}"
		/>
		<div class="flex flex-col justify-between">
			<h1 class="h1-project text-center pt-10">{data.name}</h1>
			<div class="flex flex-col gap-7 px-28">
				<Attribute title="MADE WIDTH">
					{#each data.stack as { name, url }}
						<a
							href={url}
							class="px-4 py-1 border-gray-500 border-2 rounded-xl text-gray-700 font-bold transition-all hover:text-black hover:border-black"
							>{name}</a
						>
					{/each}
				</Attribute>
				<Attribute title="LINKS">
					<Button text="Github" color={data.color} href={data.github} target="_blank" />
					<Button text="Visit" color={data.color} href={data.url} target="_blank" />
				</Attribute>
			</div>
		</div>
	</div>
	<p class="px-horizontal pt-5">{data.description}</p>
</main> -->

<main class="min-h-screen bg-black">
	<div
		style="background-image: url(/projects/{data.id}.png);"
		class="project-background w-full h-screen absolute top-0"
	>
		<div class="bg-black opacity-60 w-full h-full"></div>
	</div>
	<div class="absolute top-8 right-8 z-40 back-button">
		<IconButton
			icon="cross"
			size="l"
			onClickUrl="javascript:history.back()"
			style="filter: invert();"
		/>
	</div>
	<div class="pt-10 px-horizontal attributes-container flex flex-col gap-7 relative z-20 h-screen">
		<h1 class="h1-project">{data.name}</h1>
		<Attribute title="CREATED">
			<h2 class="pl-7 text-gray-400 my-element">APRIL 2023</h2>
		</Attribute>
		<Attribute title="REPOSITORY">
			<a href={data.github} class="pl-7 h2-link">{data.github}</a>
		</Attribute>
		<Attribute title="URL">
			<a href={data.url} class="pl-7 h2-link">{data.url}</a>
		</Attribute>
		<Attribute title="MADE WITH">
			<div class="flex flex-row gap-x-5 pl-7 h2-link">
				{#each data.stack as { name, url }}
					<a href={url}>{name}</a>
				{/each}
			</div>
		</Attribute>
	</div>
	<div class="bg-black py-10">
		<p class="px-horizontal">{data.description}</p>
	</div>
</main>

<style>
	main {
		color: white;
	}
	h1 {
		animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 3s;
		animation-delay: 3s;
		animation-fill-mode: both; /* Hides the element until after the animation is complete */
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
</style>
