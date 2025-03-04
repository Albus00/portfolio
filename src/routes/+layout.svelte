<script>
	import '../app.css';
	import 'animate.css';

	import { page } from '$app/stores';
	import Footer from '$components/footer.svelte';

	// Get the category or project name from the page store. Use 'Albin Kjellberg' as default.
	// $: title = $page.data.category || $page.data.name || 'Albin Kjellberg';
</script>

<svelte:head>
	<title>Albin Kjellberg</title>
</svelte:head>
<slot />
{#if $page.url.pathname === '/'}
	<Footer />
{/if}
