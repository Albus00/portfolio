<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './button.svelte';
	import { isLargeScreen, isMidScreen } from '$lib/functions/visuals';

	export let lastProjectColor: string = '200,200,200';

	const CARD_OFFSET = 40;
	let isBottom = false;
	let windowWidth = 1000;
	const cardClass = 'shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-0 rounded-xl';

	onMount(() => {
		const handleScroll = () => {
			isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - CARD_OFFSET;
		};

		window.addEventListener('scroll', handleScroll);
		windowWidth = window.innerWidth;

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<footer
	class={'fixed bottom-0 left-0 w-full p-8 flex flex-col md:flex-row justify-between items-start md:items-center font-bold'}
	style="pointer-events: none;"
>
	<div
		class={'w-full p-3 transition-all ' + (isBottom ? cardClass : '')}
		style="background-color: rgba({lastProjectColor}, {isBottom && !isMidScreen(windowWidth)
			? '0.4'
			: '0'});"
	>
		<div>
			<p>Available for new projects</p>
		</div>
		<div class="flex items-start">
			<Button text="Contact me" href="/contact" />
		</div>
	</div>
</footer>

<style>
	p {
		font-family: 'reflex-pro-variable', sans-serif;
		font-variation-settings:
			'wdth' 100,
			'wght' 400,
			'ital' 0;
		@apply text-xl md:text-2xl uppercase;
	}
</style>
