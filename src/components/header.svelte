<script lang="ts">
	import IconButton from './iconButton.svelte';
</script>

<header
	class="absolute top-0 left-0 w-full py-4 z-50 bg-dark-base text-white px-horizontal handheld:px-handheld-horizontal"
>
	<div class="flex flex-row gap-4">
		<IconButton
			icon={'github'}
			size="m"
			onClickUrl="https://github.com/Albus00"
			targetBlank={true}
		/>
		<IconButton
			icon={'linkedin'}
			size="m"
			onClickUrl="https://www.linkedin.com/in/albin-kjellberg-b3367b163/"
			targetBlank={true}
		/>
	</div>
</header>
