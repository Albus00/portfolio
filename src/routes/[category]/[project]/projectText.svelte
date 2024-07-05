<script lang="ts">
	export let text;
</script>

<div class="flex flex-col gap-10 w-3/4 handheld:w-full">
	<div>
		<h2>SCOPE</h2>
		<p>{text.scope}</p>
	</div>
	<div>
		<h2>DESCRIPTION</h2>
		<p>{text.description}</p>
	</div>
	<div>
		<h2>OUTCOME</h2>
		<p>{text.outcome}</p>
	</div>
	<div>
		<h2>PROBLEMS SOLVED</h2>
		<p>{text.problems}</p>
	</div>
</div>

<style>
	h2 {
		@apply handheld:text-4xl;
	}
	p {
		@apply pt-2 pl-7 text-xl text-gray-400 handheld:text-lg;
	}
</style>
