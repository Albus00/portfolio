<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import Header from '$components/header.svelte';
	import albinkjellberg from '$lib/assets/albinkjellberg(square).png';
	import { unlockTitle } from '$lib/functions/titleManager';
	import ScrollingTitle from '$components/scrollingTitle.svelte';

	let unlockNode: HTMLElement;
</script>

<section
	class="h-screen grid grid-cols-2 items-center justify-items-end px-horizontal"
	id="hero"
	bind:this={unlockNode}
>
	<Header />
	<div>
		<h1 class="h1-hero">ALBIN</h1>
		<h1 class="h1-hero pl-12">KJELLBERG</h1>
	</div>
	<div class="bg-light-base w-4/5">
		<img src={albinkjellberg} alt="Albin Kjellberg" />
	</div>
</section>
<ScrollingTitle nextTitle="About" />
