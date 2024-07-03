<script lang="ts">
	export let title: string;

	const animationDelay: number = 4.5;
</script>

<div style="--delay: {animationDelay}" class="attribute">
	<h2>{title}</h2>
	<slot />
</div>

<!-- <style>
	.attribute {
		animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 1s;
		animation-fill-mode: both; /* Hides the element until after the animation is complete */
	}
	.attribute:nth-child(2) {
		animation-delay: calc(var(--delay) * 1s);
	}
	.attribute:nth-child(3) {
		animation-delay: calc(0.2s + var(--delay) * 1s);
	}
	.attribute:nth-child(4) {
		animation-delay: calc(0.4s + var(--delay) * 1s);
	}
	.attribute:nth-child(5) {
		animation-delay: calc(0.5s + var(--delay) * 1s);
	}
</style> -->
