<script lang="ts">
	import { base } from "$app/paths";
	import InnerBox from "$lib/components/InnerBox.svelte";
	import type { ProductModel } from "$lib/models/models";

	export let data: ProductModel;
	export let count: number;
	export let onClick: VoidFunction;

	const _onClick = () => {
		window.Telegram.WebApp.expand();
		onClick();
	}
</script>

<div class="product-item">
	<a href="{base}/product?id=0" on:click={_onClick}>
		<div class="photo-box">
			<div class="inner-box price-box">
				<InnerBox>
					<span class="price-label">{data.price} ₽</span>
				</InnerBox>
			</div>
			{#if count > 0}
				<div class="inner-box counter-box">
					<InnerBox>
						<span class="counter-label">{count}</span>
					</InnerBox>
				</div>
			{/if}
			<picture class="photo">
				<img class="photo-img" src={data.images[0]} alt={data.title} />
			</picture>
		</div>
	</a>
	<div class="title">
		<span>{data.title}</span>
	</div>
</div>

<style>
	.product-item {
		position: relative;
		width: calc(50% - 12px);
		box-sizing: border-box;
		text-align: center;
	}
	.photo-box {
		margin: auto;
		width: 100%;
		aspect-ratio: 3/4;
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
	.title {
		color: var(--on-background);
		font-size: 14px;
		font-weight: 700;
		margin: 4px 0 4px 0;
	}
</style>
