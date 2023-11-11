<script lang="ts">
	import Siema from 'siema';
	import { onMount } from 'svelte';

	let selectedIndex = 0;
	let radioSlider;

	let slider: Siema;

	let sliderMounted = false;

	onMount(() => {
		slider = new Siema({
			selector: '.siema',
			duration: 200,
			easing: 'ease-in-out',
			perPage: 1,
			startIndex: selectedIndex,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			loop: false,
			rtl: false,
			onInit: () => {
				console.log(sliderMounted);
				sliderMounted = true;
			},
			onChange: () => {
				selectedIndex = slider.currentSlide;
			}
		});
	});

	export let images: string[];
	export let alt: string;
</script>

<div class="siema">
		{#each images as image}
			<div class="content-item">
        {#if sliderMounted}
				  <img src={image} {alt} />
        {/if}
			</div>
		{/each}
</div>

<style>
	img {
		display: flex;
		width: 100%;
    aspect-ratio: 3/4;
		object-fit: cover;
    border-radius: inherit;
	}
	.siema {
	}
	.content-item {
    border-radius: var(--primary-radius);
    padding: 0 16px 0 16px;
	}
</style>
