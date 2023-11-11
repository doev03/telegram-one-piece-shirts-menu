<script lang="ts">
  export let selected: boolean;
  export let onClick: VoidFunction;
</script>

<button class={selected ? "selected" : ""} on:click={onClick}>
  <slot></slot>
</button>

<style>
  button {
    border-radius: var(--primary-radius);
    border: 2px solid var(--secondary-background);
    padding: 4px 8px;
    cursor: pointer;
    background-color: transparent;
  }
  button.selected {
    border: 2px solid var(--button-color);
  }
</style>
