<script lang="ts">
	import { onMount } from 'svelte';
	import Scene from '$components/scene.svelte';

	export let title: string;
	export let model: string;

	const containerId = title.toLowerCase().replace(' ', '-');

	// add event listeners to hero text button for scaling the icon button
	onMount(() => {
		const container = document.getElementById(containerId);
		container?.addEventListener(
			'mouseenter',
			(event) => {
				const modelCanvas = document.getElementById(`${model}-scene`);
				modelCanvas?.classList.remove('w-1/2');
				modelCanvas?.classList.add('w-full');
				const text = document.getElementById(`${containerId}-div`);
				text?.classList.add('hidden');
			},
			false
		);
		container?.addEventListener(
			'mouseleave',
			(event) => {
				const modelCanvas = document.getElementById(`${model}-scene`);
				modelCanvas?.classList.remove('w-full');
				modelCanvas?.classList.add('w-1/2');
				const text = document.getElementById(`${containerId}-div`);
				text?.classList.add('display');
				text?.classList.remove('hidden');
			},
			false
		);
	});
</script>

<div
	class={'bg-light-dark overflow-hidden card rounded-[3rem] flex flex-col py-10 text-white box-border max-h-full cursor-pointer hover:bg-black hover:shadow-lg'}
	id={containerId}
>
	<div class="flex justify-center w-full h-1/2 aspect-square transition-all">
		<Scene elementId={`${model}-scene`} className={'w-1/2 transition-all ease-out'} />
	</div>
	<div
		class="flex flex-col justify-start transition-all animate__animated animate__faster animate__fadeIn"
		id={`${containerId}-div`}
	>
		<h1 class="text-6xl text-center font-bold m-auto mb-5">{title}</h1>
		<p class="px-horizontal">
			<slot />
		</p>
	</div>
</div>

<style>
	/* shadow ring and multiple soft shadows */
	.card {
		box-shadow:
			inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),
			/* shadow ring 👇 */ 0 0 0 1px hsla(0, 0%, 0%, 0.05),
			/* multiple soft shadows 👇 */ 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
			0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
			0 3.5px 6px hsla(0, 0%, 0%, 0.09);
	}
</style>
