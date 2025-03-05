<script lang="ts">
	import ScrollingTitle from '$components/scrollingTitle.svelte';
</script>

<section class="grid items-center" id="about">
	<ScrollingTitle title="About" nextTitle="Projects" />
	<div class="h-screen px-8 lg:px-horizontal">
		<p class="w-full lg:w-3/4">
			Hi! My name is Albin. A 5th Year Student in M.Sc Media Technology and Engineering.<br /><br />
			I create web apps and games
		</p>
	</div>
</section>

<ScrollingTitle nextTitle="Projects" />

<style>
	p {
		@apply lg:text-6xl;
	}
</style>
