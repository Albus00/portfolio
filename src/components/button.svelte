<script lang="ts">
	export let text: string;
	export let href: string = '';
	export let target: string = '_self';
	export let type: string = 'link';
	export let isFilled: boolean = false;

	const buttonClass = `font-bold text-2xl lg:hover:scale-110 transition-all ${isFilled ? 'bg-accent text-white py-2 px-8 rounded-xl' : 'text-accent'}`;
</script>

{#if type === 'link'}
	<a {href} {target} class={buttonClass}>
		{text}
	</a>
{:else if type === 'submit'}
	<button type="submit" class={buttonClass}>{text}</button>
{/if}

<style>
	button,
	a {
		font-family: 'reflex-pro-variable', sans-serif;
		font-variation-settings:
			'wdth' 100,
			'wght' 400,
			'ital' 0;
		@apply uppercase;
	}
</style>
