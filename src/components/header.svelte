<script lang="ts">
	import IconButton from './iconButton.svelte';

	export let title: string;

	if (!title) {
		title = 'Albin Kjellberg';
	}
</script>

<header
	class="fixed top-0 left-0 w-full py-4 z-50 bg-black text-white px-horizontal handheld:px-handheld-horizontal"
>
	<div class="flex flex-row justify-between">
		<nav class="flex justify-between items-center">
			<div class="flex items-center">
				<a href="/" class="text-4xl font-bold font-rotulo handheld:text-3xl">{title}</a>
			</div>
		</nav>
		<div class="flex flex-row gap-4">
			<IconButton
				icon={'github'}
				size="m"
				onClickUrl="https://github.com/Albus00"
				style="filter: invert();"
				targetBlank={true}
			/>
			<IconButton
				icon={'linkedin'}
				size="m"
				onClickUrl="https://www.linkedin.com/in/albin-kjellberg-b3367b163/"
				style="filter: invert();"
				targetBlank={true}
			/>
		</div>
	</div>
</header>
