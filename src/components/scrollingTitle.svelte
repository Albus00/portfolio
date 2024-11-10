<script lang="ts">
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { lockTitle, unlockTitle } from '$lib/functions/titleManager';

	export let title: string = '';
	export let nextTitle: string;
	export let sectionHeight: number = 500;

	let id = title.toLowerCase().replace(/ /g, '-') + '-title';
	let nextId = nextTitle.toLowerCase().replace(/ /g, '-') + '-title';

	let lockNode: HTMLElement;
	let unlockNode: HTMLElement;

	onMount(() => {
		const title = document.getElementById(id);
		if (!title) return;
		let startScroll = 0;
		window.addEventListener('scroll', () => {
			if (title.getBoundingClientRect().y == 0) {
				if (startScroll == 0) {
					startScroll = window.scrollY;
				}
				const scrollPosition = window.scrollY - startScroll;
				const opacity = 1 - (scrollPosition - sectionHeight / 2) / window.innerHeight;
				title.style.opacity = opacity.toString();
			}
		});
	});
</script>

{#if title !== ''}
	<IntersectionObserver element={lockNode} on:intersect={() => lockTitle(id)} threshold={0} />
	<div class="h-screen">
		<h2
			class="px-horizontal -z-10 transition-opacity animate__animated animate__fast text-nowrap"
			{id}
		>
			{title}
		</h2>
	</div>
	<div bind:this={lockNode}></div>
{/if}

<IntersectionObserver element={unlockNode} on:intersect={() => unlockTitle(nextId)} threshold={0} />
<div bind:this={unlockNode}></div>
