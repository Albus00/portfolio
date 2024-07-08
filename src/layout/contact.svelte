<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// change the text of the talk button when hovered
		const talk = document.querySelector('.contact-button');
		if (talk) {
			talk.addEventListener('mouseenter', () => {
				talk.textContent = "LETS'S TALK!";
			});
			talk.addEventListener('mouseleave', () => {
				talk.textContent = 'GET IN TOUCH';
			});
		}
	});
</script>

<section class="relative z-30 px-horizontal pb-32">
	<div class="w-full px-horizontal py-horizontal text-white">
		<div class="m-auto w-full flex flex-col justify-center rotulo">
			<p class="text-2xl ml-44">Have something in mind?</p>
			<a href="/contact" class="contact-button w-5/6 m-auto">GET IN TOUCH</a>
			<!-- <p class="talk">GET IN TOUCH</p> -->
		</div>
	</div>
</section>

<style>
	.contact-button {
		color: black;
		font-size: 10rem;
		line-height: 10rem;
		@apply block bg-custom-yellow pt-8 px-14 text-center rounded-full transition-transform hover:bg-transparent hover:text-white hover:scale-110;
	}
</style>
