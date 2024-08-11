<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let node: HTMLElement;

	const lockTitle = () => {
		const title = document.getElementById('about-title');
		if (!title) return;
		title.style.position = 'fixed';
		title.style.top = '0';
		title.style.left = '0';
		const scrollPosition = window.scrollY;
		console.log(scrollPosition);

		const maxScroll = scrollPosition + screen.height + screen.height;
		console.log(maxScroll);
		const scrollPercentage = (maxScroll / scrollPosition) * 100;
		const textColor = `hsl(${scrollPercentage}, 100%, 50%)`;
		title.style.color = textColor;
	};
</script>

<section class="grid items-center" id="about">
	<IntersectionObserver element={node} on:intersect={lockTitle} threshold={0}>
		<div class="h-screen">
			<h2 class="px-horizontal -z-10" id="about-title">ABOUT ME</h2>
		</div>
		<div class="h-screen" bind:this={node}></div>
		<div class="h-screen px-horizontal">
			<p class="w-3/4">
				Hi! My name is Albin. A 5th Year Student in M.Sc Media Technology and Engineering.<br /><br
				/>
				I create web apps and games
			</p>
		</div>
	</IntersectionObserver>
</section>

<style>
	p {
		@apply text-6xl handheld:text-5xl;
	}
</style>
