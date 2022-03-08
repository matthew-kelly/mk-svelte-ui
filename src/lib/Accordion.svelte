<script>
  import { slide } from '$lib/slide';

  export let buttonText = '';
  export let isOpen = false;
  export let duration;
  export let animationEnd;
</script>

<div>
  <button type="button" on:click={() => (isOpen = !isOpen)}>
    <span class:isOpen>▲</span>
    {buttonText}
  </button>
  <div
    use:slide={{ isOpen, duration }}
    class="accordion-content"
    class:isOpen
    on:animationEnd={animationEnd}
  >
    <div class="wrapper">
      <slot />
    </div>
  </div>
</div>

<style>
  button {
    display: block;
    border: solid 1px #333;
    width: 100%;
    text-align: left;
    margin: 0;
  }

  span {
    margin-right: 5px;
    display: inline-block;
    transform: rotate(0.25turn);
    transition: transform 0.2s ease;
  }
  span.isOpen {
    transform: rotate(0.5turn);
  }

  .accordion-content {
    border: solid 1px #333;
    border-top: 0;
    border-bottom: 0;
  }
  .accordion-content.isOpen {
    border-bottom: solid 1px #333;
  }

  .wrapper {
    padding: 20px;
  }
</style>
