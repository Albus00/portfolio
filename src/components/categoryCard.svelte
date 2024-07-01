<script lang="ts">
	import Scene from '$components/scene.svelte';
	import { onMouseEnter, onMouseLeave } from '$lib/functions/card';

	export let title: string;
	export let model: string;

	const containerId = title.toLowerCase().replace(' ', '-');
</script>

<a
	class={'bg-light-dark overflow-hidden card-shadow rounded-[3rem] flex flex-col py-10 text-white box-border max-h-full transition-all cursor-pointer hover:bg-black'}
	id={containerId}
	on:mouseenter={() => onMouseEnter(model, containerId)}
	on:mouseleave={() => onMouseLeave(model, containerId)}
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
