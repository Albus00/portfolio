<script lang="ts">
	import Scene from '$components/scene.svelte';
	// import { onMouseEnter, onMouseLeave } from '$lib/functions/card';

	export let title: string;
	export let model: string;

	const containerId = title.toLowerCase().replace(' ', '-');

	export const hoverToggle = (containerId: string) => {
		const title = document.getElementById(`${containerId}-title`);
		if (!title) return;
		title.classList.toggle('hidden');
	};
</script>

<a
	class={'bg-dark-base overflow-hidden rounded-[3rem] py-10 text-white box-border max-h-full h-fit transition-transform ' +
		'hover:bg-black hover:scale-125 hover:translate-y-16'}
	id={containerId}
	on:mouseenter={() => hoverToggle(containerId)}
	on:mouseleave={() => hoverToggle(containerId)}
	href={`/projects/${containerId}`}
>
	<div class="w-full transition-all">
		<Scene elementId={`${model}-scene`} className={'w-full transition-all ease-out'} />
	</div>
	<div
		class="flex flex-row justify-center transition-all animate__animated animate__faster animate__fadeIn"
		id={`${containerId}-div`}
	>
		<h1 class="text-6xl text-center font-bold" id={`${containerId}-title`}>{title}</h1>
	</div>
</a>
