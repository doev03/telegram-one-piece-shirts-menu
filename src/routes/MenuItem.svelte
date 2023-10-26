<script lang="ts">
	import type { ProductModel } from './models';

	export let data: ProductModel;

	let count = 0;
	const incr = () => count++;
	const decr = () => count--;

</script>

<div class="product-item js-item">
	{#if count > 0}
		<div class="counter">{count}</div>
	{/if}
	<div class="cafe-item-photo">
		<picture class="cafe-item-lottie js-item-lottie">
			<img class="skeleton photo" src={data.image} alt={data.title} />
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
			<span class="ripple-mask"><span class="ripple" /></span>
		</button>
		{/if}
		<button class="button-item incr-button" on:click={incr}>
			<span class="button-item-label">+</span>
			<span class="ripple-mask"><span class="ripple" /></span>
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
	.product-item,
	.product-item-shadow {
		position: relative;
		width: 120px;
		height: 159px;
		padding: 4px 5px 21px;
		box-sizing: border-box;
		text-align: center;
	}
	.product-item-shadow {
		height: 0;
		padding: 0;
		margin: 0;
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
</style>
