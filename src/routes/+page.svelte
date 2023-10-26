<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	import burgerImage from '$lib/img/shirt_example.png';
	import type { ProductModel } from './models';

	const item: ProductModel = {
		title: 'Burger',
		price: 4.99,
		image: burgerImage
	};

	const items = [item, item, item, item, item, item, item];
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<section class="cafe-page cafe-items">
	{#each items as item}
		<MenuItem data={item} />
	{/each}
</section>

<style>
	.cafe-items {
		display: flex;
		flex-wrap: wrap;
		margin: 0 auto;
		max-width: 480px;
		justify-content: space-around;
		align-content: flex-end;
		transition: max-height var(--page-animation), opacity var(--page-animation);
		background-color: var(--block-bg-color);
	}
</style>
