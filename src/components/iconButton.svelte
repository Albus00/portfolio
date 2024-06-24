<!-- Get logos from https://brandfetch.com/ -->

<script>
	export let icon;
	export let size = 'md';
	export let onClickUrl = '';
	export let onClickFunc = () => {};
	export let style = '';
	export let imgId = '';
	export let targetBlank = false;
</script>

{#if onClickUrl !== ''}
	<a
		class={`bg-transparent cursor-pointer `}
		href={onClickUrl}
		{style}
		target={targetBlank ? '_blank' : '_self'}
	>
		<img
			class={`${size === 'sm' ? 'w-8' : 'w-32'} hover:scale-110 transition-all`}
			src={icon}
			alt="icon"
			id={imgId}
		/>
	</a>
{:else}
	<button class={`bg-transparent cursor-pointer`} on:click={onClickFunc} {style}>
		<img
			class={`${size === 'sm' ? 'w-8' : 'w-32'} hover:scale-110 transition-all`}
			src={icon}
			alt="icon"
			id={imgId}
		/>
	</button>
{/if}
