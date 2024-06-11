<script>
	export let size = 'md';
</script>

<button
	class={`bg-slate-950 text-white font-bold text-2xl py-6 px-24 rounded-2xl ${size === 'sm' ? 'text-sm' : 'text-base'}`}
>
	<slot />
</button>
