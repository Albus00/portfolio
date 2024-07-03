<script lang="ts">
	import IconButton from '$components/iconButton.svelte';
	import ProjectText from '$components/projectText.svelte';
	import Attribute from './attribute.svelte';
	import Extra from './extra/extra.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	console.log(data.description.text);

	// data.description =
	// 	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet tortor quis odio consequat sollicitudin tempus vitae quam. Nunc varius nec sapien in dapibus. Mauris elementum orci in augue pellentesque tristique. Donec odio dolor, varius ut euismod id, maximus ac turpis. Integer bibendum, metus in consectetur fermentum, odio magna iaculis libero, finibus molestie tortor libero ac tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris efficitur laoreet tempor. Vivamus tempus cursus mattis. Nam sodales diam nec nulla posuere mollis. Vestibulum eleifend volutpat nibh, id volutpat tortor posuere at. Aliquam varius dolor et purus consequat, sed gravida massa vulputate. Quisque feugiat, tellus ac vulputate tempus, elit ex tempus ex, nec condimentum neque nisi nec nibh. Sed varius vitae sapien id consectetur. Sed volutpat suscipit felis, vel vestibulum urna egestas et. Cras imperdiet felis vitae tellus vehicula porta. \n Nullam tortor lacus, condimentum eget sollicitudin a, iaculis at purus. Duis consequat erat a vehicula accumsan. Nulla euismod hendrerit vehicula. Etiam nec maximus dolor, et condimentum augue. Phasellus rutrum vel leo in scelerisque. Aliquam vitae feugiat tortor. Quisque erat orci, pharetra sed mollis id, rhoncus ac odio. Fusce laoreet, augue sed consequat aliquam, lacus lacus tempor nisi, non scelerisque eros lectus nec nibh. Suspendisse libero sem, dapibus quis nisl nec, cursus malesuada eros. In placerat quis justo non condimentum. Proin vel est nisi. Phasellus rutrum neque sed erat congue, nec ornare sapien mollis. Fusce nec molestie turpis. Praesent purus leo, dictum quis pellentesque id, pretium a ligula. \n Nam orci neque, tincidunt vel interdum eu, ullamcorper ut magna. Maecenas sed ultrices nisi. In orci nulla, elementum sed ipsum quis, laoreet rutrum libero. Aliquam erat volutpat. Aliquam erat volutpat. Ut ultrices risus ut risus semper, non mollis tellus bibendum. Suspendisse sit amet congue neque, eu elementum nunc. Morbi eget lobortis quam. Sed ut enim diam. Aenean risus leo, tincidunt non maximus id, gravida et quam. Cras rhoncus vehicula mollis. In vitae libero a urna pulvinar commodo. Proin iaculis diam quam, vel tincidunt justo vehicula aliquam. Sed lobortis pellentesque neque, id dapibus urna pharetra eu. Donec at placerat nunc. Nulla fermentum dolor vitae ornare tristique.';
</script>

<main class="bg-black">
	<div
		style="background-image: url(/projects/{data.id}.png);"
		class="project-background w-full h-screen absolute top-0"
	>
		<div class="bg-black opacity-60 w-full h-full"></div>
	</div>
	<div class="absolute top-8 right-8 z-40 back-button">
		<IconButton
			icon="cross"
			size="l"
			onClickUrl="javascript:history.back()"
			style="filter: invert();"
		/>
	</div>
	<section class="pt-16 px-horizontal attributes-container flex flex-col gap-7 relative z-20">
		<h1 class="h1-project">{data.name}</h1>
		<Attribute title="CLIENT">
			<h2 class="pl-7 text-gray-400">{data.client}</h2>
		</Attribute>
		<Attribute title="REPOSITORY">
			<a href={data.github} class="pl-7 h2-link">{data.github}</a>
		</Attribute>
		<Attribute title="URL">
			<a href={data.url} class="pl-7 h2-link">{data.url}</a>
		</Attribute>
		<Attribute title="MADE WITH">
			<div class="flex flex-row gap-x-5 pl-7">
				{#each data.stack as { name, url }}
					<a class="h2-link" href={url}>{name}</a>
				{/each}
			</div>
		</Attribute>
	</section>
	<section class="py-10 bot-section px-horizontal">
		<ProjectText text={data.description} />
		<Extra projectName={data.name} />
	</section>
</main>

<style>
	main {
		color: white;
	}
	section {
		min-height: 100vh;
	}
	h1 {
		animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 3s;
		animation-delay: 3s;
		animation-fill-mode: both; /* Hides the element until after the animation is complete */
	}
	p {
		font-size: large;
	}
	.project-background {
		animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 4s;
		animation-fill-mode: both; /* Hides the element until after the animation is complete */
	}
	.back-button {
		animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
		animation-duration: 1s;
		animation-delay: 5s;
		animation-fill-mode: both; /* Hides the element until after the animation is complete */
	}
	.bot-section {
		background-color: black;
	}
</style>
