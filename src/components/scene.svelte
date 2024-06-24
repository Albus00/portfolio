<script lang="ts">
	import { onMount } from 'svelte';
	import treeScene from '$components/threejs/treeScene';

	export let elementId: string;
	export let className: string;

	onMount(() => {
		treeScene(elementId);
	});
</script>

<div class={className} id={elementId}></div>
