<script lang="ts">
	import { onMount } from 'svelte';
	import IconButton from './iconButton.svelte';

	export let category: string;
	export let project;

	let footer: HTMLElement | null = null;

	category = category.toLowerCase().replace(/ /g, '-');
	const containerId = project.name
		.toLowerCase()
		.replace(/ö/g, 'o')
		.replace(/ä/g, 'a')
		.replace(/å/g, 'a')
		.replace(/ /g, '-');

	onMount(() => {
		// get card footer
		footer = document
			.getElementById(containerId)
			?.getElementsByClassName('project-card-footer')[0] as HTMLElement;
	});

	const onMouseEnter = (containerId: string) => {
		if (!footer) return;
		footer.style.transform = 'translateX(0)';
	};
	const onMouseExit = (containerId: string) => {
		if (!footer) return;
		footer.style.transform = 'translateX(100%)';
	};
</script>

<a
	class={'relative overflow-hidden bg-black card-shadow box-border rounded-[2rem] text-white transition-all cursor-pointer' +
		'hover:bg-black hover:scale-110'}
	id={containerId}
	on:mouseenter={() => onMouseEnter(containerId)}
	on:mouseleave={() => onMouseExit(containerId)}
	href={`/${category}/${containerId}`}
>
	<div class="w-full h-full bg-cover" style="background-image: url(/projects/{containerId}.png);">
		<div
			class="bg-black relative z-20 opacity-60 w-full h-full grid justify-center items-center transition-all hover:opacity-0"
		>
			<h2 class="h2-project">{project.name}</h2>
		</div>
	</div>
	<div
		class="absolute project-card-footer w-fit top-0 right-0 flex flex-row justify-end py-3 px-3 bg-black opacity-90 rounded-bl-2xl transition-all"
		style="transform: translateX(100%);"
	>
		<div class="flex flex-row gap-3">
			{#each project.stack as { id, url }}
				<IconButton icon={id} size="sm" onClickUrl={url} targetBlank={true} />
			{/each}
		</div>
	</div>
</a>
