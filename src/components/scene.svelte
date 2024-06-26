<script lang="ts">
	import { onMount } from 'svelte';
	import treeScene from '$components/threejs/treeScene';
	import laptopScene from '$components/threejs/laptopScene';

	export let elementId: string;
	export let className: string;

	onMount(() => {
		if (elementId === 'laptop-scene') laptopScene(elementId);
		else if (elementId === 'tree-scene') treeScene(elementId);
	});
</script>

<div class={className} id={elementId}></div>
