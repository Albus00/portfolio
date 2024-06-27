<script lang="ts">
	import { onMount } from 'svelte';
	import treeScene from '$components/threejs/treeScene';
	import laptopScene from '$components/threejs/laptopScene';

	export let elementId: string;
	export let className: string = '';

	onMount(() => {
		switch (elementId) {
			case 'laptop-scene':
				laptopScene(elementId);
				break;
			case 'tree-scene':
				treeScene(elementId);
				break;
			default:
				laptopScene(elementId);
				break;
		}
	});
</script>

<div class={className} id={elementId}></div>
