<script lang="ts">
	import type { ProductModel } from './models';

	export let data: ProductModel;

	let count = 0;
	const incr = () => count++;
	const decr = () => count--;

</script>

<div class="product-item">
	{#if count > 0}
		<div class="counter">{count}</div>
	{/if}
	<div class="photo">
		<picture class="photo">
			<img class="photo-img" src={data.image} alt={data.title} />
		</picture>
	</div>
	<div class="cafe-item-label">
		<span class="cafe-item-title">{data.title}</span>
		<span class="cafe-item-price">{data.price}</span>
	</div>
	<div class="cafe-item-buttons">
		{#if count > 0}
		<button class="button-item decr-button" on:click={decr}>
			<span class="button-item-label">-</span>
		</button>
		{/if}
		<button class="button-item incr-button" on:click={incr}>
			<span class="button-item-label">+</span>
		</button>
	</div>
</div>

<!-- <style>
	:root {
		--loading-grey: #ededed;
	}

	.photo {
		border-radius: 10px;
	}

	.skeleton {
		background-color: var(--loading-grey);
		background: linear-gradient(
				100deg,
				rgba(255, 255, 255, 0) 40%,
				rgba(255, 255, 255, 0.5) 50%,
				rgba(255, 255, 255, 0) 60%
			)
			var(--loading-grey);
		background-size: 200% 100%;
		background-position-x: 180%;
		animation: 1s skeleton ease-in-out infinite;
	}

	@keyframes skeleton {
		to {
			background-position-x: -20%;
		}
	}
</style> -->

<style>
	.cafe-item-label {
		margin: auto;
		padding: 0px 16px;
	}
	.cafe-item-title {
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.product-item {
		background-color: red;
		position: relative;
		width: 240px;
		height: 360px;
		padding: 4px 5px 21px;
		box-sizing: border-box;
		text-align: center;
	}
	.counter {
		--min-size: 18px;

		position: absolute;
		right: 0%;
		min-width: var(--min-size);
		min-height: var(--min-size);
		padding: 4px;
		border-radius: 50%;
		background-color: var(--main-color);
		font-family: var(--default-font);
		font-weight: 700;
		font-size: 14px;
		line-height: var(--min-size);
		color: #fff;
	}
	.button-item {
		flex: 50%;
		padding: 0;
	}
	.decr-button {
		background-color: var(--error-color);
		margin: 0 4px 0px 0px;
	}
	.button-item-label {
		font-size: 24px;
		height: 24px;
	}
	.photo {
		margin: auto;
		height: 300px;
		overflow: hidden;
	}
	.photo-img {
		width: 100%;
		height: 100%;
	}
	img {
		object-fit: cover;
	}
</style>
