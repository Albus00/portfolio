<script>
	import About from '$layout/about.svelte';
	import Contact from '$layout/contact.svelte';
	import Hero from '$layout/hero.svelte';
	import Projects from '$layout/projects.svelte';
	// import Timeline from '$layout/timeline.svelte';

	export let data;
	let projects = data.projects ?? [];
</script>

<main class="relative">
	<Hero />
	<About />
	<Projects {projects} />
	<!-- <Timeline /> -->
	<!-- <Contact /> -->
</main>
