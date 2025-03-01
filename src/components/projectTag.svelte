<script lang="ts">
	export let tag: { name: string; url: string };
	export let rgb: string;
	export let rgbBrightness: number;
	export let isLarge: boolean = false;

	const style = isLarge ? 'text-2xl h-[4.2rem]' : 'text-md h-8';
</script>

<a
	class="flex items-center font-rotulo font-semibold px-5 rounded-xl hover:scale-105 transition-all {style} {rgbBrightness <
		125 && 'text-white'}"
	style="background-color: rgba({rgb}, 0.3);"
	href={tag.url}
>
	{tag.name}
</a>

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
