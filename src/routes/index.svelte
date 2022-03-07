<script>
  import Accordion from '$lib/Accordion.svelte';
  import Toggle from '$lib/Toggle.svelte';
  let isToggled = true;
</script>

<Toggle bind:isToggled />

<Toggle
  bind:isToggled
  buttonColor="blue"
  backgroundColor="orange"
  backgroundColorChecked="pink"
  label="Custom"
/>

<Accordion
  buttonText="Do I need a credit card???"
  duration={300}
  animationEnd={() => console.log('animation ended')}
>
  <div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quod, hic maxime facere dicta
      praesentium quos dolorem impedit, magnam voluptatum dignissimos illo voluptate, eligendi nihil
      voluptatem quasi enim nam quisquam!
    </p>
  </div>
</Accordion>

{#if isToggled}
  <h1>I'm toggled</h1>
{/if}
