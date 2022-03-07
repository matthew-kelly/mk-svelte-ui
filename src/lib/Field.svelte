<script>
  export let type = 'text';
  export let label = '';
  export let instructions = '';
  export let style = '';
  export let value;
  export let placeholder = '';

  function handleInput(event) {
    value = type.match(/^(number|range)$/) ? +event.target.value : event.target.value;
  }
</script>

<div class="wrapper" {style}>
  <label>
    {#if label}
      <span>{label}</span>
      <br />
    {/if}
    {#if instructions}
      <span class="instructions">{instructions}</span>
      <br />
    {/if}
    <input {type} {value} {placeholder} on:input={handleInput} />
  </label>
</div>

<style>
  .wrapper {
    margin-bottom: 1rem;
  }

  .instructions {
    opacity: 0.7;
    font-size: var(--instructionsFontSize, 14px);
  }
</style>
