<script lang="ts">
	import ScrollingTitle from '$components/scrollingTitle.svelte';
	import { lockTitle, unlockTitle } from '$lib/functions/titleManager';
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
</script>

<section class="grid items-center" id="about">
	<ScrollingTitle title="About" nextTitle="Projects" />
	<div class="h-screen px-horizontal">
		<p class="w-3/4">
			Hi! My name is Albin. A 5th Year Student in M.Sc Media Technology and Engineering.<br /><br />
			I create web apps and games
		</p>
	</div>
</section>

<ScrollingTitle nextTitle="Projects" />

<style>
	p {
		@apply text-6xl handheld:text-5xl;
	}
</style>
