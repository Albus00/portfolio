<script lang="ts">
	export let text: string;
	export let href: string = '';
	export let color: boolean = false;
	export let target: string = '_self';
	export let type: string = 'link';
</script>

{#if type === 'link'}
	<a
		{href}
		{target}
		class={`font-bold text-2xl py-4 px-20 rounded-2xl w-fit hover:scale-110 transition-all ${color ? 'bg-custom-yellow text-black' : 'bg-black text-white'}`}
	>
		{text}
	</a>
{:else if type === 'submit'}
	<button
		type="submit"
		class={`font-bold text-2xl py-4 px-20 rounded-2xl w-fit hover:scale-110 transition-all ${color ? 'bg-custom-yellow text-black' : 'bg-black text-white'}`}
		>{text}</button
	>
{/if}
