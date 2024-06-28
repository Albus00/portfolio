<script lang="ts">
	import Scene from '$components/scene.svelte';

	export let title: string;
	export let model: string;

	const containerId = title.toLowerCase().replace(' ', '-');

	function addAndRemoveClass(element: HTMLElement, add: string, remove: string) {
		element.classList.add(add);
		element.classList.remove(remove);
	}
	function getElements() {
		const modelCanvas = document.getElementById(`${model}-scene`);
		const text = document.getElementById(`${containerId}-div`);
		return { modelCanvas, text };
	}
	const onMouseEnter = () => {
		const { modelCanvas, text } = getElements();
		if (!modelCanvas || !text) return;
		addAndRemoveClass(modelCanvas, 'w-full', 'w-1/2');
		text.classList.add('hidden');
	};
	const onMouseLeave = () => {
		const { modelCanvas, text } = getElements();
		if (!modelCanvas || !text) return;
		addAndRemoveClass(modelCanvas, 'w-1/2', 'w-full');
		addAndRemoveClass(text, 'display', 'hidden');
	};
</script>

<a
	class={'bg-light-dark overflow-hidden card rounded-[3rem] flex flex-col py-10 text-white box-border max-h-full transition-all cursor-pointer hover:bg-black'}
	id={containerId}
	on:mouseenter={() => onMouseEnter()}
	on:mouseleave={() => onMouseLeave()}
	href={`/${containerId}`}
>
	<div class="flex justify-center w-full transition-all">
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
</a>

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
