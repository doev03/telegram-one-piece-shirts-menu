<script lang="ts">
	import ParameterPickerItem from "./ParameterPickerItem.svelte";

  export let values: string[];
  export let value: string | undefined;
  export let onChanged : {
    (value: string, index: number): void;
};
</script>

<div>
  <div class="items">
    {#each values as v, index}
      <div class="item">
        <ParameterPickerItem selected={value === v} onClick={() => {onChanged(v, index)}}>
          <span>{v}</span>
        </ParameterPickerItem>
      </div>
    {/each}
  </div>
</div>

<style>
  span {
    font-size: 20px;
    font-weight: 400;
    color: var(--on-background);
  }
  .item {
    display: inline;
    margin: 0 8px 0 0;
  }
</style>
