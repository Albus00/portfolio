<script lang="ts">
	import IconButton from '$components/iconButton.svelte';
	import albinkjellberg from '$lib/assets/albinkjellberg.png';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import { onMount } from 'svelte';

	onMount(() => {
		// add event listeners to hero text button for scaling the icon button
		const heroTextBtn = document.getElementById('heroTextBtn');
		heroTextBtn?.addEventListener(
			'mouseenter',
			() => {
				const iconBtn = document.getElementById('heroIconBtn');
				iconBtn?.classList.add('scale-110');
			},
			false
		);
		heroTextBtn?.addEventListener(
			'mouseleave',
			() => {
				const iconBtn = document.getElementById('heroIconBtn');
				iconBtn?.classList.remove('scale-110');
			},
			false
		);
	});

	// scroll to selection section
	function scrollToSelection() {
		// get selection section
		const selection = document.getElementById('selection');
		if (!selection) {
			console.error('Selection section not found');
			return;
		}

		// scroll to selection section with the header height offset
		const y = selection.getBoundingClientRect().top + window.scrollY - getHeaderHeight();
		window.scrollTo({ top: y, behavior: 'smooth' });
	}
</script>

<section class="h-screen relative z-20 bg-light-base" id="hero">
	<div
		class="absolute top-0 left-0 w-full bg-no-repeat bg-contain -z-10 bg-[right_5rem_top_6rem] h-full handheld:hidden"
		style="background-image: url({albinkjellberg});"
	></div>
	<div class="relative pt-[12%] px-horizontal w-3/4 handheld:pt-28 handheld:m-auto">
		<div
			class="w-full aspect-square bg-no-repeat bg-center bg-contain m-auto rounded-full mb-14 hidden handheld:block"
			style="background-image: url({albinkjellberg});"
		></div>
		<h1 class="h1-variant mr-3 handheld:block handheld:mb-5">Hi!</h1>
		<h1>
			My name is Albin.<br /> I create web apps and games.
		</h1>
	</div>
	<div class="flex flex-row w-fit pl-horizontal pt-24 handheld:hidden">
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
	</div>
</section>
