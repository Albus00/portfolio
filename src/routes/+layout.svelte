<script>
	import '../app.css';
	import 'animate.css';

	// Get the category or project name from the page store. Use 'Albin Kjellberg' as default.
	// $: title = $page.data.category || $page.data.name || 'Albin Kjellberg';
</script>

<svelte:head>
	<title>Albin Kjellberg</title>
</svelte:head>
<slot />
