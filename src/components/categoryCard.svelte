<script lang="ts">
	import Scene from '$components/scene.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	// import { onMouseEnter, onMouseLeave } from '$lib/functions/card';

	export let title: string;
	export let model: string;
	export let fadeDelay: number;

	let node: HTMLElement;
	let intersectOnce: boolean = false;

	const containerId = title.toLowerCase().replace(' ', '-');

	export const hoverToggle = (containerId: string) => {
		const title = document.getElementById(`${containerId}-title`);
		if (!title) return;
		title.style.transition = 'opacity 0.2s';
		title.style.opacity = title.style.opacity === '0' ? '1' : '0';
	};

	const fadeIn = () => {
		if (intersectOnce) return;
		intersectOnce = true;
		setTimeout(() => {
			node.style.opacity = '1';
		}, fadeDelay);
	};
</script>

<IntersectionObserver once element={node} on:intersect={fadeIn} threshold={0.5}>
	<div class="transition-all hover:scale-125 container" style="opacity: 0;" bind:this={node}>
		<a
			class={'overflow-hidden rounded-[3rem] py-10 text-white box-border max-h-full h-fit'}
			id={containerId}
			on:mouseenter={() => hoverToggle(containerId)}
			on:mouseleave={() => hoverToggle(containerId)}
			href={`/projects/${containerId}`}
		>
			<div class="w-full transition-all">
				<Scene elementId={`${model}-scene`} className={'w-full transition-all ease-out'} />
			</div>
			<div class="flex flex-row justify-center transition-all" id={`${containerId}-div`}>
				<h1 class="text-6xl text-center font-bold" id={`${containerId}-title`}>{title}</h1>
			</div>
		</a>
	</div>
</IntersectionObserver>
