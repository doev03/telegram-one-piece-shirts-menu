<script lang="ts">
	import type { ProductModel } from '$lib/models/models';
	import { Store } from '$lib/store';
	import MenuItem from './MenuItem.svelte';
	import { fly } from 'svelte/transition';

	const items = Store.instance.products;

	let count = 0;
	const incr = (data: ProductModel) => {
		count++;
	}
	const decr = (data: ProductModel) => {
		count--;
	}
	const toggle = () => {
		const store = Store.instance;
		store.toggleMode(!store.modeOrder);
	}
</script>

<section class="cafe-page cafe-items" transition:fly={{}} >
	{#each items as item}
		<MenuItem data={item} onIncr={() => incr(item)} onDecr={() => decr(item)} count={count}/>
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
