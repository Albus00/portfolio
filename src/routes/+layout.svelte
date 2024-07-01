<script>
	import '../app.css';
	import 'animate.css';
	import Footer from '$components/footer.svelte';
	import Header from '$components/header.svelte';

	import { page } from '$app/stores';

	// Get the category from the page store. Use 'Albin Kjellberg' as default.
	$: title = $page.data.category || 'Albin Kjellberg';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<Header {title} />
<slot />
<Footer />
