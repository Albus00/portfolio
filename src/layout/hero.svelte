<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import Header from '$components/header.svelte';
	import albinkjellberg from '$lib/assets/albinkjellberg(square).png';

	let node: HTMLElement;

	const unlockTitle = () => {
		const title = document.getElementById('about-title');
		if (!title) return;
		title.style.position = 'relative';
	};
</script>

<IntersectionObserver element={node} on:intersect={unlockTitle} threshold={0}>
	<section
		class="h-screen grid grid-cols-2 items-center justify-items-end px-horizontal"
		id="hero"
		bind:this={node}
	>
		<Header />
		<div>
			<!-- <h1 class="h1-variant mr-3 handheld:block handheld:mb-5">Hi!</h1> -->
			<!-- <h1>
			Hi! My name is Albin.<br /> I create web apps and games.
		</h1> -->
			<h1 class="h1-hero">ALBIN</h1>
			<h1 class="h1-hero pl-12">KJELLBERG</h1>
		</div>
		<div class="bg-light-base w-4/5">
			<img src={albinkjellberg} alt="Albin Kjellberg" />
		</div>
		<!-- <div class="flex flex-row w-fit pl-horizontal pt-24 handheld:hidden">
		<IconButton icon={'arrow'} onClickFunc={scrollToSelection} imgId="heroIconBtn" />
		<button class="font-delve text-6xl pt-8" id="heroTextBtn" on:click={scrollToSelection}>
			See my projects!
		</button>
	</div>

	<div class="absolute -bottom-2 h-10 w-full bg-black handheld:h-40">
		<button
			class="rotulo text-5xl py-3 px-6 font-semibold m-auto text-custom-yellow mt-10 hidden handheld:block"
			on:click={scrollToSelection}
		>
			See my projects!
		</button>
	</div> -->
	</section>
</IntersectionObserver>
