<script lang="ts">
	import IconButton from './iconButton.svelte';
	import github from '$lib/assets/logos/github.svg';
	import linkedin from '$lib/assets/logos/linkedin.svg';
</script>

<header class="fixed top-0 left-0 w-full pt-8 pb-4 z-50 bg-dark-base text-white px-horizontal">
	<div class="flex flex-row justify-between">
		<nav class="flex justify-between items-center">
			<div class="flex items-center">
				<a href="/" class="text-4xl font-bold font-rotulo">Albin Kjellberg</a>
			</div>
		</nav>
		<div class="flex flex-row gap-4">
			<IconButton
				icon={github}
				size="sm"
				onClickUrl="https://github.com/Albus00"
				style="filter: invert();"
				targetBlank={true}
			/>
			<IconButton
				icon={linkedin}
				size="sm"
				onClickUrl="https://www.linkedin.com/in/albin-kjellberg-b3367b163/"
				style="filter: invert();"
				targetBlank={true}
			/>
		</div>
	</div>
</header>
