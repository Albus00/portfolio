<script>
	import Footer from '$components/footer.svelte';
	import About from '$layout/about.svelte';
	import Hero from '$layout/hero.svelte';
	import Projects from '$layout/projects.svelte';
	// import Timeline from '$layout/timeline.svelte';

	export let data;
	let projects = data.projects ?? [];
	const lastProjectColor =
		projects.length > 0 ? projects[projects.length - 1].customColor : '200,200,200';
</script>

<main class="relative pb-36 sm:pb-0">
	<Hero />
	<About />
	<Projects {projects} />
	<!-- <Timeline /> -->
</main>
<Footer {lastProjectColor} />
