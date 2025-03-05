<script>
	import { onMount } from 'svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import InputField from './inputField.svelte';
	import Button from '$components/button.svelte';

	let name = '';
	let email = '';
	let message = '';

	// Set default base header height, before the actual header height is calculated
	let headerHeight = getHeaderHeight(false);

	// Get height of the header
	onMount(() => {
		headerHeight = getHeaderHeight();
	});

	function handleSubmit() {
		// Handle form submission logic here
		console.log('Form submitted!');
		console.log('Name:', name);
		console.log('Email:', email);
		console.log('Message:', message);
	}
</script>

<main class="w-full py-10">
	<div style="--header: {headerHeight}" class="form-container w-full flex flex-col items-center">
		<h1>Contact me</h1>
		<p class="my-10 w-full md:w-1/2 px-8">
			Do you have a project, or maybe something else on your mind? Let me know and we can have a
			chat about how <span class="marked-text">I might be able to help</span>. I would love to hear
			from you!
		</p>
		<form
			class="flex flex-col items-center gap-10 px-10 w-full md:w-2/3"
			on:submit|preventDefault={handleSubmit}
		>
			<InputField label="Your name" bind:value={name} />
			<InputField label="Preferred email" bind:value={email} />
			<InputField label="A message" bind:value={message} textarea={true} />
			<Button text="SEND!" type="submit" isFilled />
		</form>
	</div>
</main>

<style>
	/* button {
		@apply bg-custom-yellow text-black p-4 rounded-xl;
	} */
	.form-container {
		min-height: calc(100vh - var(--header) * 1px);
		margin-top: calc(var(--header) * 1px);
	}
</style>
