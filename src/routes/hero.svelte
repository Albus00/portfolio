<script>
	import Button from '$components/button.svelte';
	import albinkjellberg from '$lib/assets/albinkjellberg.png';
</script>

<!-- <section class="grid grid-cols-2 h-full">
	<div class="content-center pl-20">
		<h1 class="h1-variant inline-block text-[#f2d83e] mr-3">Hi!</h1>
		<h1 class="inline-block">My name is Albin. I design and build web-apps and games.</h1>
	</div>
	<div class="h-full pt-16 overflow-hidden">
		<img src={albinkjellberg} alt="Albin Kjellberg" />
	</div>
</section> -->

<section class="h-full pt-24">
	<div
		class="bg-no-repeat bg-right-top h-full pl-20"
		style="background-image: url({albinkjellberg});"
	>
		<div class=" pt-[12%] w-3/4">
			<h1 class="h1-variant mr-3">Hi!</h1>
			<h1>My name is Albin.<br /> I design and build web apps<br /> and games.</h1>
		</div>
		<!-- <div class="flex flex-col w-fit gap-y-4 pl-16 pt-10">
			<Button>Web</Button>
			<Button>Games</Button>
			<Button>Contact</Button>
		</div> -->
	</div>
</section>
