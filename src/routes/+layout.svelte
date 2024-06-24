<script>
	import Footer from '$components/footer.svelte';
	import Navbar from '$components/header.svelte';
	import '../app.css';
</script>

<Navbar />
<slot />
<Footer />
