<script>
	import '../app.css';
	import 'animate.css';
	import Header from '$components/header.svelte';

	import { page } from '$app/stores';
	import Footer from '$components/footer.svelte';

	// Get the category or project name from the page store. Use 'Albin Kjellberg' as default.
	// $: title = $page.data.category || $page.data.name || 'Albin Kjellberg';
</script>

<svelte:head>
	<title>Albin Kjellberg</title>
</svelte:head>
{#if $page.data.url === undefined}
	<!-- <Header {title} /> -->
{/if}
<slot />
<Footer />
