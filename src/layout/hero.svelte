<script lang="ts">
	import Header from '$components/header.svelte';
	import albinkjellberg from '$lib/assets/albinkjellberg(square).png';
	import ScrollingTitle from '$components/scrollingTitle.svelte';
</script>

<section class="h-screen flex flex-col px-8 lg:px-horizontal" id="hero">
	<Header />
	<div
		class="flex flex-col-reverse lg:flex-row justify-evenly lg:justify-between gap-8 lg:grid-cols-2 items-start pt-10 lg:items-center"
	>
		<div class="flex flex-col items-start">
			<h1>ALBIN</h1>
			<h1>KJELLBERG</h1>
		</div>
		<div class="bg-light-base w-full lg:w-4/5 max-h-[700px] max-w-[700px]">
			<img src={albinkjellberg} alt="Albin Kjellberg" />
		</div>
	</div>
</section>
<ScrollingTitle nextTitle="About" />

<!-- <section
	class="h-screen flex flex-col-reverse justify-center lg:grid-cols-2 items-center px-horizontal"
	id="hero"
>
	<Header />
	<div>
		<h1 class="h1-hero">ALBIN</h1>
		<h1 class="h1-hero pl-12">KJELLBERG</h1>
	</div>
	<div class="bg-light-base w-4/5">
		<img src={albinkjellberg} alt="Albin Kjellberg" />
	</div>
</section> -->
