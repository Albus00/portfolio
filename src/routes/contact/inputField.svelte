<script lang="ts">
	export let label: string;
	export let value: string;
	export let textarea: boolean = false;

	const inputId = `${label.toLowerCase()}-input`;
</script>

<div class={`${textarea ? `w-3/4` : `w-1/2`}`}>
	<label for={inputId}>{label}</label>
	{#if textarea}
		<textarea class="h-40" bind:value id={inputId}></textarea>
	{:else}
		<input type="text" bind:value id={inputId} />
	{/if}
</div>

<style>
	input,
	textarea {
		@apply block rounded-xl w-full;
	}
	input,
	textarea {
		@apply bg-light-base text-black px-4 py-3;
	}
</style>
