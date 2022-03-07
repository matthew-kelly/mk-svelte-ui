<script>
  import Toggle from '$lib/Toggle.svelte';
  let isToggled = true;
  let isToggled2 = false;
</script>

<Toggle bind:isToggled />
<Toggle
  bind:isToggled
  backgroundColor="orange"
  buttonColor="blue"
  backgroundColorChecked="pink"
  label="Custom"
/>

{#if isToggled}
  <h1>I'm toggled</h1>
{/if}
