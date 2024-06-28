<script lang="ts">
	import { onMount } from 'svelte';
	import Scene from '$components/scene.svelte';

	export let title: string;
	export let model: string;

	const containerId = title.toLowerCase().replace(' ', '-');
	let isFocused = false;

	function addAndRemoveClass(element: HTMLElement, add: string, remove: string) {
		element.classList.add(add);
		element.classList.remove(remove);
	}

	const handleClick = (containerId: string) => {
		isFocused = !isFocused;
		const container = document.getElementById(containerId);
		const parent = container?.parentElement;
		if (!container || !parent) return;
		// Get position of first child
		const firstChild = parent.children[0];
		const firstChildRect = firstChild.getBoundingClientRect();
		const containerRect = container.getBoundingClientRect();
		Array.from(parent.children).forEach((child: Element) => {
			const childElement = child as HTMLElement;
			if (childElement !== container) {
				if (isFocused) {
					addAndRemoveClass(childElement, 'animate__backOutUp', 'animate__backInDown');
				} else addAndRemoveClass(childElement, 'animate__backInDown', 'animate__backOutUp');
			}
		});
		// translate the position of the clicked card to the top of the parent smoothly
		// if (isFocused) {
		// 	container.style.transform = `translateX(${firstChildRect.x - containerRect.x}px)`;
		// } else {
		// 	container.style.transform = `translateX(0px)`;
		// }
		if (isFocused) {
			container.style.width = `${containerRect.width}px`;
			container.style.transition = 'width 0.5s ease-in-out';
			container.style.transition = 'position 0.5s ease-in-out';
			container.style.width = `${parent.getBoundingClientRect().width}px`;
			container.style.position = 'absolute';
		}
	};

	// add event listeners to hero text button for scaling the icon button
	onMount(() => {
		function getElements() {
			const modelCanvas = document.getElementById(`${model}-scene`);
			const text = document.getElementById(`${containerId}-div`);
			return { modelCanvas, text };
		}

		const container = document.getElementById(containerId);
		if (!container) return;
		container.addEventListener(
			'mouseenter',
			() => {
				const { modelCanvas, text } = getElements();
				if (!modelCanvas || !text) return;
				addAndRemoveClass(modelCanvas, 'w-full', 'w-1/2');
				text.classList.add('hidden');
			},
			false
		);
		container.addEventListener(
			'mouseleave',
			() => {
				if (isFocused) return;
				const { modelCanvas, text } = getElements();
				if (!modelCanvas || !text) return;
				addAndRemoveClass(modelCanvas, 'w-1/2', 'w-full');
				addAndRemoveClass(text, 'display', 'hidden');
			},
			false
		);
	});
</script>

<div
	class={'relative bg-light-dark overflow-hidden card rounded-[3rem] flex flex-col py-10 text-white box-border max-h-full transition-all cursor-pointer animate__animated animate__faster hover:bg-black hover:shadow-lg'}
	id={containerId}
	on:click={() => handleClick(containerId)}
	on:keydown={(e) => e.key === 'Enter' && console.log('clicked')}
	role="button"
	tabindex="0"
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
