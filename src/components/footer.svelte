<script>
	import Button from './button.svelte';
</script>

<footer
	class="fixed bottom-0 left-0 w-full px-horizontal pb-4 flex flex-row justify-between items-center font-bold"
>
	<div>
		<p>Available for new projects</p>
	</div>
	<div class="grid items-center">
		<Button text="Contact me" href="/contact" />
	</div>
</footer>

<style>
	p {
		font-family: 'reflex-pro-variable', sans-serif;
		font-variation-settings:
			'wdth' 100,
			'wght' 400,
			'ital' 0;
		@apply text-2xl uppercase;
	}
</style>
