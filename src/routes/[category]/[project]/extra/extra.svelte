<script>
	import Award from './award.svelte';

	export let projectName;
</script>

{#if projectName === 'Skurkeriet'}
	<Award />
{/if}
