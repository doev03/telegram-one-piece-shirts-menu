<script lang="ts">
	import type { ProductModel } from './models';

	export let data: ProductModel;

	let count = 0;
	const incr = () => count++;
	const decr = () => count--;
</script>

<div class="product-item">
	<div class="photo-box">
		<div class="shadow-box price-box">
			<span class="price-label">{data.price} ₽</span>
		</div>
		{#if count > 0}
			<div class="shadow-box counter-box">
				<span class="counter-label">{count}</span>
			</div>
		{/if}
		<picture class="photo">
			<img class="photo-img" src={data.image} alt={data.title} />
		</picture>
	</div>
	<div class="counter-buttons">
		{#if count > 0}
			<button class="button-item decr-button" on:click={decr}>
				<span class="button-item-label">-</span>
			</button>
		{/if}
		<button class="button-item incr-button" on:click={incr}>
			<span class="button-item-label {count > 0 ? "" : "full-add-button"}">
				{#if count > 0}
					+
				{:else}
					Добавить
				{/if}
			</span>
		</button>
	</div>
</div>

<style>
	.product-item {
		position: relative;
		width: calc(50% - 12px);
		box-sizing: border-box;
		text-align: center;
	}
	.counter-buttons {
		display: flex;
		margin: 8px 16px 0 16px;
	}
	.button-item {
		flex: 50%;
		padding: 0;
		height: 32px;
	}
	.decr-button {
		background-color: var(--error-color);
		margin: 0 8px 0px 0px;
	}
	.button-item-label {
		font-size: 24px;
	}
	.full-add-button {
		font-size: 18px;
	}
	.photo-box {
		margin: auto;
		width: 100%;
		aspect-ratio: 2/3;
		overflow: hidden;
		border-radius: var(--primary-radius);
	}
	.photo-img {
		width: 100%;
		height: 100%;
	}
	img {
		object-fit: cover;
	}
	.shadow-box {
		background-color: var(--shadow);
		padding: 4px 8px;
		color: var(--on-primary);
		font-weight: 600;
	}
	.counter-box {
		position: absolute;
		right: 0;
		top: 0;
		border-radius: 0px 10px 0px 10px;
	}
	.price-box {
		position: absolute;
		left: 0;
		top: 0;
		border-radius: 10px 0px 10px 0px;
	}
</style>
