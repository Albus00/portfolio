<!-- Get logos from https://brandfetch.com/ -->

<script lang="ts">
	import getIcon from '$lib/hooks/getIcon';

	export let icon: string;
	export let size = 'm';
	export let onClickUrl = '';
	export let onClickFunc = () => {};
	export let style = '';
	export let imgId = '';
	export let targetBlank = false;

	$: svg = getIcon(icon);
</script>

{#if onClickUrl !== ''}
	<a
		class={`bg-transparent cursor-pointer grid place-items-center w-max`}
		href={onClickUrl}
		{style}
		target={targetBlank ? '_blank' : '_self'}
	>
		<img
			class={`${size === 'sm' ? 'w-6 handheld:w-4' : size === 'm' ? 'w-8 handheld:w-6' : 'w-16'} hover:scale-110 transition-all`}
			src={svg}
			alt="icon"
			id={imgId}
		/>
	</a>
{:else}
	<button class={`bg-transparent cursor-pointer w-max`} on:click={onClickFunc} {style}>
		<img
			class={`${size === 'sm' ? 'w-8' : 'w-32'} hover:scale-110 transition-all`}
			src={svg}
			alt="icon"
			id={imgId}
		/>
	</button>
{/if}
