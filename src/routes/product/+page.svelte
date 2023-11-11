<script lang="ts">
  import Carousel from '$lib/components/Сarousel.svelte';
	import { ProductParameterType, type ProductModel, type ProductParameter, type ProductParameterColorData } from '$lib/models/models';
	import ParameterPickerItem from './ParameterPickerItem.svelte';
	import TextParamPicker from './TextParamPicker.svelte';

  export let data : ProductModel;

  const params = data.params;

  const stringParams: {
    type: ProductParameterType;
    title: string;
    items: string[];
  }[] = [];
  const colorParams: {
    type: ProductParameterType;
    title: string;
    items: ProductParameterColorData[];
  }[] = [];
  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    switch (param.type) {
      case ProductParameterType.string:
        stringParams.push(param as {
          type: ProductParameterType;
          title: string;
          items: string[];
        });
        break;
      case ProductParameterType.color:
        colorParams.push(param as {
          type: ProductParameterType;
          title: string;
          items: ProductParameterColorData[];
        });
        break;
    }
  }

  const onParamChanged = (param: ProductParameter, value: any) => {
    selectedParams.set(param, value);
    selectedParams = selectedParams;
  }

  let selectedParams = new Map<ProductParameter, string>();
  selectedParams.set(stringParams[0], stringParams[0].items[0]);
</script>

<section class="page">
  <div class="images-box">
    <Carousel images = {data.images} alt={data.title}/>
  </div>
  <p class="name">{data.title}</p>
  {#each stringParams as param}
    <div class="param-block">
      <p class="param-title">{param.title}</p>
      <TextParamPicker values={param.items} onChanged={(value) => {onParamChanged(param, value)}} value={selectedParams.get(param)} />
    </div>
  {/each}
  <!-- <span class="subtitle">{data}</span> -->
</section>

<style>
  .page {
    padding: 16px 0px 24px 0px;
  }
  .param-block {
    padding: 0 16px;
  }
  .name {
    padding: 0 16px;
    font-size: 18px;
    font-weight: 500;
    color: var(--on-background);
  }
  .param-title {
    font-size: 20px;
    font-weight: 700;
  }
</style>