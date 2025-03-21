<script lang="ts">
	import { checkBrightnessThreshold, getTextColor } from '$lib/functions/color';

	export let tag: { name: string; url: string };
	export let rgb: string;
	export let rgbBrightness: number;
	export let isLarge: boolean = false;

	const style = isLarge
		? `text-2xl h-12 border border-opacity-40 md:h-16 w-full sm:w-2/3 md:w-full ${checkBrightnessThreshold(rgbBrightness) ? 'border-white' : 'border-black'}`
		: 'text-md h-8';
</script>

<a
	class={'flex items-center font-rotulo font-semibold px-8 rounded-xl hover:scale-[1.02] hover:shadow-md hover:border-none transition-all ' +
		style +
		' ' +
		getTextColor(rgbBrightness)}
	style="background-color: rgba({rgb}, 0.3);"
	href={tag.url}
>
	{tag.name}
</a>

<style>
	a {
		font-family: 'reflex-pro-variable', sans-serif;
		font-variation-settings:
			'wdth' 100,
			'wght' 400,
			'ital' 0;
		@apply uppercase;
	}
</style>
