<script lang="ts">
	export let text: string;
	export let href: string;
	export let color: string = 'black';
	export let target: string = '_self';
</script>

<a
	style="--color: {'#' + color}"
	{href}
	{target}
	class={`text-white font-bold text-2xl py-4 px-20 rounded-2xl w-fit hover:scale-110 transition-all cursor-pointer`}
>
	{text}
</a>

<style>
	a {
		background-color: #000;
	}
</style>
