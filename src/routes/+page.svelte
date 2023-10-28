<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	import burgerImage from '$lib/img/shirt_example.png';
	import type { ProductModel } from './models';

	const item: ProductModel = {
		title: 'Burger',
		price: 1500,
		image: burgerImage
	};

	const items = [item, item, item, item, item, item, item];
</script>

<button on:click={window.Telegram.WebApp.MainButton.show}></button>
<section class="cafe-page cafe-items">
	{#each items as item}
		<MenuItem data={item} />
	{/each}
</section>

<style>
	.cafe-items {
		display: flex;
		flex-wrap: wrap;
		margin: 16px;
		gap: 24px;
		max-width: max-content;
		align-content: flex-end;
		transition: max-height var(--page-animation), opacity var(--page-animation);
		background-color: var(--block-bg-color);
	}
</style>
