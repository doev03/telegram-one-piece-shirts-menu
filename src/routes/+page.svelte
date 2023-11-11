<script lang="ts">
	import type { ProductModel } from '$lib/models/models';
	import { AppState } from '$lib/app_state';
	import MenuItem from './MenuItem.svelte';

	const appState = AppState.instance;
	const items = appState.products;

	let count = 0;
	const incr = (data: ProductModel) => {
		count++;
	}
	const decr = (data: ProductModel) => {
		count--;
	}
	const toggle = () => {
		//appState.toggleMode(!appState.modeOrder);
	}
	const onItemPressed = () => {
	}
</script>

<section class="cafe-page cafe-items">
	{#each items as item}
		<MenuItem data={item} count={count} onClick={onItemPressed}/>
	{/each}
</section>

<style>
	.cafe-page {
		position: relative;
		margin: auto;
	}
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
