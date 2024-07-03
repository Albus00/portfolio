<script lang="ts">
	import { onMount } from 'svelte';
	import getHeaderHeight from '$lib/hooks/getHeaderHeight';
	import {
		Timeline,
		TimelineConnector,
		TimelineContent,
		TimelineDot,
		TimelineItem,
		TimelineOppositeContent,
		TimelineSeparator
	} from 'svelte-vertical-timeline';

	// Set default base header height, before the actual header height is calculated
	let headerHeight = getHeaderHeight(false);

	const options = [
		{
			time: '2021',
			title: 'Started working on the project'
		},
		{
			time: '2022',
			title: 'Finished the project'
		}
	];

	// Get height of the header
	onMount(() => {
		headerHeight = getHeaderHeight();
	});
</script>

<section
	style="--header: {headerHeight}"
	class="bg-black relative grid grid-cols-3 gap-20 px-2horizontal box-border pt-28 pb-32"
	id="timeline"
>
	<Timeline position="alternate">
		{#each options as option}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content">
					<p>{option.time}</p>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<h3>{option.title}</h3>
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</section>

<style>
	#timeline {
		min-height: calc(100vh - var(--header) * 1px);
	}
</style>
