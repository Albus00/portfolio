<script lang="ts">
	import IconButton from '$components/iconButton.svelte';
	import albinkjellberg from '$lib/assets/albinkjellberg.png';
	import arrow from '$lib/assets/icons/swirly-arrow.png';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import { onMount } from 'svelte';

	onMount(() => {
		// add event listeners to hero text button for scaling the icon button
		const heroTextBtn = document.getElementById('heroTextBtn');
		heroTextBtn?.addEventListener(
			'mouseenter',
			(event) => {
				const iconBtn = document.getElementById('heroIconBtn');
				iconBtn?.classList.add('scale-110');
			},
			false
		);
		heroTextBtn?.addEventListener(
			'mouseleave',
			(event) => {
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

<section class="h-screen pt-24">
	<div
		class="bg-no-repeat bg-right-top h-full px-horizontal"
		style="background-image: url({albinkjellberg});"
	>
		<div class=" pt-[12%] w-3/4">
			<h1 class="h1-variant mr-3">Hi!</h1>
			<h1>My name is Albin.<br /> I create web apps and games.</h1>
		</div>
		<div class="flex flex-row w-fit pl-16 pt-24">
			<IconButton icon={arrow} onClickFunc={scrollToSelection} imgId="heroIconBtn" />
			<h2 class="font-delve pt-8 cursor-pointer" id="heroTextBtn" on:click={scrollToSelection}>
				See my projects!
			</h2>
		</div>
	</div>
	<div class="absolute bottom-0 h-10 w-full bg-dark-base"></div>
</section>
