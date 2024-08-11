<script lang="ts">
	export let project;
	export let order: number;

	let footer: HTMLElement | null = null;

	const projectId = project.name
		.toLowerCase()
		.replace(/ö/g, 'o')
		.replace(/ä/g, 'a')
		.replace(/å/g, 'a')
		.replace(/ /g, '-');
</script>

<div
	class="grid grid-cols-2 h-screen items-center {order % 2 == 1
		? 'justify-items-end'
		: 'justify-items-start'}"
>
	<a
		class="w-5/6 transition-all hover:scale-105 {order % 2 == 1 ? 'order-1' : ''}"
		id={projectId}
		href={`/${projectId}`}
	>
		<img
			class="aspect-square object-cover object-center"
			src={`/projects/${projectId}.png`}
			alt={project.name}
		/>
	</a>
	<h1>{project.name}</h1>
</div>
