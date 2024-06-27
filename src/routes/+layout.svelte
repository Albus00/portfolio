<script>
	import '../app.css';
	import 'animate.css';
	import Footer from '$components/footer.svelte';
	import Navbar from '$components/header.svelte';
</script>

<Navbar />
<slot />
<Footer />
