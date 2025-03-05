<script lang="ts">
	import { onMount } from 'svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import InputField from './inputField.svelte';
	import Button from '$components/button.svelte';

	let name = '';
	let email = '';
	let message = '';
	let isSuccess: boolean = false;
	let isError: boolean = false;

	async function handleSubmit() {
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message })
			});

			const data = await res.json();
			if (res.ok) {
				isSuccess = true;
				name = email = message = '';
			} else {
				console.log(data.error || 'Failed to send message.');
				isError = true;
			}
		} catch (err) {
			console.log('Error:', err);
			isError = true;
		}
	}
</script>

<main class="w-full py-10">
	<div class="form-container w-full flex flex-col items-center">
		<h1>Contact me</h1>
		{#if !isSuccess && !isError}
			<p class="my-10 w-full md:w-1/2 px-8">
				Do you have a project, or maybe something else on your mind? Let me know and we can have a
				chat about how <span class="marked-text">I might be able to help</span>. I would love to
				hear from you!
			</p>
			<form
				class="flex flex-col items-center gap-6 px-10 w-full md:w-2/3"
				on:submit|preventDefault={handleSubmit}
			>
				<InputField label="Your name" bind:value={name} />
				<InputField label="Preferred email" bind:value={email} />
				<InputField label="A message" bind:value={message} textarea={true} />
				<Button text="SEND!" type="submit" isFilled />
			</form>
		{:else if isSuccess}
			<p class="my-10 w-full md:w-1/2 px-8">
				Thank you for reaching out! <span class="marked-text"
					>I'll get back to you as soon as possible</span
				>. I'm looking forward to our chat!
			</p>
			<Button text="GO BACK" href="/" />
		{:else}
			<p class="my-10 w-full md:w-1/2 px-8">
				Something went wrong. Please try again later or reach out to me on my email.
			</p>
			<div class="flex flex-col items-center gap-5">
				<Button text="SEND AN EMAIL" href="mailto:albin.kjellberg2000@gmail.com" isFilled />
				<Button text="GO BACK" href="/" />
			</div>
		{/if}
	</div>
</main>
