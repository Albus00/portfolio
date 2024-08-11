<script lang="ts">
	export let text: string;
	export let href: string = '';
	export let target: string = '_self';
	export let type: string = 'link';

	const buttonClass = `font-bold text-2xl hover:scale-110 transition-all text-accent`;
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
