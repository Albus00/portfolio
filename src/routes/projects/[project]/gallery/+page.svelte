<script lang="ts">
	import { onMount } from 'svelte';
	export let data;

	const gallery: string[] = data.gallery ?? [];
	const color: string = data.color ?? 'f2f2f2';
	let body: HTMLElement;

	let selectedImage: string | null = null;

	function openImage(image: string) {
		selectedImage = image;
		body.style.overflow = 'hidden';
	}

	function closeImage() {
		selectedImage = null;
		body.style.overflow = 'auto';
	}
	onMount(() => {
		// Set the background color of the page to the project color
		body = document.documentElement;
		body.style.backgroundColor = `rgba(${color}, 0.8)`;
	});
</script>

<main class="min-h-full w-full overflow-hidden flex items-center justify-center">
	<section class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full max-w-7xl">
		{#each gallery as image, index}
			<div class="relative group">
				<button
					type="button"
					class="w-full h-auto rounded-xl object-cover transition-transform duration-300 group-hover:scale-105 p-0 border-0 bg-transparent"
					on:click={() => openImage(image)}
					aria-label={`Open Gallery Image ${index + 1}`}
				>
					<img
						src={image}
						alt={`Gallery Image ${index + 1}`}
						class="w-full h-auto rounded-xl aspect-square object-cover"
					/>
				</button>
			</div>
		{/each}
	</section>
	{#if selectedImage}
		<button
			class="fixed inset-0 bg-black bg-opacity-80 p-5 flex items-center justify-center z-50"
			on:click={() => closeImage()}
		>
			<img src={selectedImage} alt={''} class="max-w-full max-h-full rounded-xl object-cover" />
		</button>
	{/if}
</main>

<style>
	img {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
</style>
