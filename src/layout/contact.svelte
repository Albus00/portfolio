<script lang="ts">
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let isVisible = false;
	let button: HTMLElement;
	const fadeDelay = 500;

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

	const fadeIn = () => {
		if (isVisible) return;
		isVisible = true;
		setTimeout(() => {
			button.style.opacity = '1';
		}, fadeDelay);
	};
</script>

<section class="relative z-30 px-horizontal pb-32">
	<IntersectionObserver once element={button} on:intersect={fadeIn} threshold={0.5}>
		<div
			class="w-full px-horizontal py-horizontal text-white"
			style="opacity: 0; transition: all 1s;"
			bind:this={button}
		>
			<div class="m-auto w-full flex flex-col justify-center rotulo">
				<p class="text-2xl ml-44">Have something in mind?</p>
				<a href="/contact" class="contact-button w-5/6 m-auto">GET IN TOUCH</a>
				<!-- <p class="talk">GET IN TOUCH</p> -->
			</div>
		</div>
	</IntersectionObserver>
</section>

<style>
	.contact-button {
		color: black;
		font-size: 10rem;
		line-height: 10rem;
		@apply block bg-custom-yellow pt-8 px-14 text-center rounded-full transition-transform hover:bg-transparent hover:text-white hover:scale-110;
	}
</style>
