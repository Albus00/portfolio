<script lang="ts">
	import { onMount } from 'svelte';
	import IconButton from './iconButton.svelte';

	export let category: string;
	export let project;

	let footer: Element | undefined = undefined;

	category = category.toLowerCase().replace(/ /g, '-');
	const containerId = project.name
		.toLowerCase()
		.replace(/ö/g, 'o')
		.replace(/ä/g, 'a')
		.replace(/å/g, 'a')
		.replace(/ /g, '-');

	onMount(() => {
		// get card footer
		footer = document.getElementById(containerId)?.getElementsByClassName('footer-bg')[0];
	});

	const onMouseEnter = (containerId: string) => {
		if (!footer) return;
		// translate footer down
		// footer.classList.add('opacity-0');
	};
	const onMouseExit = (containerId: string) => {
		if (!footer) return;
		// translate footer down
		// footer.classList.remove('opacity-0');
	};
</script>

<a
	class={'relative overflow-hidden bg-light-dark card-shadow box-border rounded-[2rem] opac text-white transition-all cursor-pointer' +
		'hover:bg-black hover:scale-110'}
	id={containerId}
	on:mouseenter={() => onMouseEnter(containerId)}
	on:mouseleave={() => onMouseExit(containerId)}
	href={`/${category}/${containerId}`}
>
	<div
		class="w-full h-full bg-cover"
		style="background-image: url(/projects/{containerId}.png);"
	></div>
	<div class="absolute bottom-0 left-0 right-0 flex flex-row justify-between px-7 box-content py-3">
		<h3 class="z-10">{project.name}</h3>
		<div class="flex flex-row gap-x-3 z-10">
			{#each project.stack as { id, url }}
				<IconButton icon={id} size="sm" onClickUrl={url} targetBlank={true} />
			{/each}
		</div>
		<div
			class="absolute left-0 right-0 top-0 h-full transition-all animate__animated animate__faster footer-bg bg-light-dark"
		></div>
	</div>
</a>
