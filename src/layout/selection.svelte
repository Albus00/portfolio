<script lang="ts">
	let selectedOption = '';

	function selectOption(option: string) {
		selectedOption = option;
	}
</script>

<section class="bg-dark-base h-full" id="selection"></section>

{#if selectedOption}
	<p>You selected: {selectedOption} projects</p>
{/if}
