<script lang="ts">
	import { base } from '$app/paths';
  import { fade, fly } from 'svelte/transition';	
</script>

<section transition:fade>
  <h1>Об этом сайте</h1>
  <p>СДЕЛАТЬ...</p>
  <a href="{base}">Главная</a>
</section>