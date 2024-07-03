<script lang="ts">
	import { onMount } from 'svelte';
	import CategoryCard from '$components/categoryCard.svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';

	// Set default base header height, before the actual header height is calculated
	let headerHeight = getHeaderHeight(false);

	// Get height of the header
	onMount(() => {
		headerHeight = getHeaderHeight();
	});
</script>

<section
	style="--header: {headerHeight}"
	class="bg-black relative grid grid-cols-3 gap-20 px-2horizontal box-border pt-28 pb-32"
	id="selection"
>
	<CategoryCard title="WEB APPS" model="laptop">
		This space is dedicated to my web application projects, where functionality meets aesthetic
		design. These applications demonstrate my proficiency in web development, covering a range of
		technologies from front-end frameworks to back-end solutions.
	</CategoryCard>
	<CategoryCard title="GAMES" model="tree">
		Here, you'll find a collection of my interactive and engaging game projects. Each game showcases
		my skills in game design, programming, and user experience. Dive in and explore the worlds I've
		built!
	</CategoryCard>
	<CategoryCard title="OTHER PROJECTS" model="other">
		Over here's a variety of creative and technical endeavors that showcase my versatility and
		curiosity. From experimental applications and innovative software solutions to personal passion
		projects,
	</CategoryCard>
</section>

<style>
	#selection {
		height: calc(100vh - var(--header) * 1px);
	}
</style>
