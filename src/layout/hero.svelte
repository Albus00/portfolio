<script>
	import IconButton from '$components/iconButton.svelte';
	import albinkjellberg from '$lib/assets/albinkjellberg.png';
	import arrow from '$lib/assets/icons/swirly-arrow.png';

	// scroll to selection section
	function scrollToSelection() {
		const selection = document.getElementById('selection');
		selection?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="h-full pt-24">
	<div
		class="bg-no-repeat bg-right-top h-full pl-20"
		style="background-image: url({albinkjellberg});"
	>
		<div class=" pt-[12%] w-3/4">
			<h1 class="h1-variant mr-3">Hi!</h1>
			<h1>My name is Albin.<br /> I create web apps and games.</h1>
		</div>
		<div class="flex flex-row w-fit pl-16 pt-24">
			<IconButton icon={arrow} onClickFunc={scrollToSelection} />
			<h2 class="font-delve pt-8">See my projects!</h2>
		</div>
	</div>
	<div class="absolute bottom-0 h-10 w-full bg-dark-base"></div>
</section>
