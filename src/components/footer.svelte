<script>
</script>

<footer class="relative text-white bg-transparent px-8 pb-4 z-50 flex flex-row justify-evenly">
	<div>
		<p class="footer-title">Contact me</p>
		<a href="/contact" class="contact-button">GET IN TOUCH</a>
	</div>
	<div class="footer-container">
		<p class="footer-title">Connect</p>
		<a class="underline-effect" href="https://github.com/Albus00">GitHub</a>
		<a class="underline-effect" href="https://www.linkedin.com/in/albin-kjellberg-b3367b163/"
			>LinkedIn</a
		>
	</div>
	<div class="footer-container">
		<a href="https://www.flaticon.com/free-icons" title="icons"
			>Icons created by Freepik - Flaticon</a
		>
		<p>Designed and developed by Albin Kjellberg</p>
	</div>
</footer>

<style>
	a {
		@apply w-fit;
	}
	.footer-container {
		@apply flex flex-col justify-end;
	}
	.footer-title {
		color: #404040;
		@apply font-bold text-lg pb-1;
	}
	.contact-button {
		color: black;
		@apply bg-white font-bold px-2 py-1 text-center rounded-full transition-all hover:bg-transparent hover:text-white;
	}
</style>
