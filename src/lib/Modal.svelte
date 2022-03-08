<script>
  import { fly, fade } from 'svelte/transition';
  import Portal from './Portal.svelte';

  export let isModalOpen = false;

  function closeModal() {
    isModalOpen = false;
  }
</script>

{#if isModalOpen}
  <Portal>
    <div class="modal" transition:fly={{ opacity: 0, y: 100 }}>
      <button on:click={closeModal} aria-label="close modal box" type="button">Close</button>
      <slot />
    </div>
    <div class="background" on:click={closeModal} transition:fade />
  </Portal>
{/if}

<style>
  .modal {
    position: fixed;
    inset: 100px 0 0;
    min-width: 320px;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
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
</style>
