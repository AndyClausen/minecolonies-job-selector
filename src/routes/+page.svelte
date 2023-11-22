<script lang="ts">
	import { DataTable, MultiSelect, Tag } from 'carbon-components-svelte';
	import type { DataTableHeader } from 'carbon-components-svelte/types/DataTable/DataTable.svelte.js';
	import jobsRaw, { skills, type Skill } from './jobs.js';

	const jobs = jobsRaw.map((job) => ({
		...job,
		...job.traits,
		primaryEffect: job.effects.primary,
		secondaryEffect: job.effects.secondary,
		id: job.name
	}));
	const headers: Array<DataTableHeader & { key: keyof (typeof jobs)[0] }> = [
		{
			key: 'name',
			value: 'Name'
		},
		{
			key: 'primary',
			value: 'Primary Skill'
		},
		{
			key: 'secondary',
			value: 'Secondary Skill'
		},
		{
			key: 'primaryEffect',
			value: 'Primary Effect'
		},
		{
			key: 'secondaryEffect',
			value: 'Secondary Effect'
		},
		{
			key: 'buildings',
			value: 'Buildings'
		}
	];

	let selectedSkills: Skill[] = [];
	let filteredJobs: typeof jobs = jobs;

	$: filteredJobs = jobs
		.filter(
			(job) =>
				!selectedSkills.length ||
				selectedSkills.includes(job.primary) ||
				selectedSkills.includes(job.secondary)
		)
		.sort((a, b) =>
			selectedSkills.includes(a.primary) && selectedSkills.includes(a.secondary)
				? -1
				: selectedSkills.includes(a.primary) && !selectedSkills.includes(b.primary)
				  ? -1
				  : 1
		);
</script>

<div class="flex min-h-screen">
	<div class="container flex mx-auto flex-col p-8">
		<h1 class="text-5xl text-center font-bold mb-8">Job Selector</h1>
		<div>
			{#each selectedSkills as skill}
				<Tag filter on:close={(e) => (selectedSkills = selectedSkills.filter((s) => s !== skill))}
					>{skill}</Tag
				>
			{/each}
		</div>
		<MultiSelect
			filterable
			sortItem={() => {}}
			bind:selectedIds={selectedSkills}
			titleText="Skills"
			label="Select skills to filter on"
			items={skills.map((skill) => ({ id: skill, text: skill }))}
		/>
		<DataTable {headers} rows={filteredJobs}>
			<svelte:fragment slot="cell" let:row let:cell>
				{#if cell.key === 'name'}
					<strong>{cell.value}</strong>
				{:else if cell.key === 'primary' && selectedSkills.includes(cell.value)}
					<span class="text-green-500">{cell.value}</span>
				{:else if cell.key === 'secondary' && selectedSkills.includes(cell.value)}
					<span class="text-yellow-500">{cell.value}</span>
				{:else}
					{cell.value}
				{/if}
			</svelte:fragment>
		</DataTable>
	</div>
</div>

<style lang="postcss">
</style>
