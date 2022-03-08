<script>
  import { clickOutside } from './clickOutside';
  import { fly, fade } from 'svelte/transition';
  import Portal from './Portal.svelte';

  export let isModalOpen = false;
  export let background = true;

  function closeModal() {
    isModalOpen = false;
  }
</script>

{#if isModalOpen}
  <Portal>
    <div
      class="modal"
      use:clickOutside
      on:click-outside={closeModal}
      transition:fly={{ opacity: 0, y: 100 }}
    >
      <button class="close-btn" on:click={closeModal} aria-label="close modal box" type="button"
        >&times;</button
      >
      <slot />
    </div>
    {#if background}
      <div class="background" on:click={closeModal} transition:fade />
    {/if}
  </Portal>
{/if}

<style>
  .modal {
    position: fixed;
    inset: 100px 20px 0;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    z-index: 101;
    background-color: white;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  }

  .background {
    background: black;
    opacity: 0.8;
    cursor: pointer;
    inset: 0;
    position: fixed;
    z-index: 100;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
