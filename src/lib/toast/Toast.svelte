<script>
  import Portal from '$lib/Portal.svelte';
  import { fly, fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { toast } from '$lib/toast/toast';
  import ToastMessage from './ToastMessage.svelte';
</script>

<Portal>
  <div class="toast-wrapper">
    {#each $toast as message (message.id)}
      <div
        class={`toast ${message.type.toLowerCase()}`}
        animate:flip
        in:fly={{ opacity: 0, x: 100 }}
        out:fade
        on:click={toast.remove(message.id)}
      >
        <ToastMessage {message} />
      </div>
    {/each}
  </div>
</Portal>

<style>
  .toast-wrapper {
    position: fixed;
    bottom: 0;
    right: 20px;
  }

  .toast {
    overflow: hidden;
    position: relative;
    margin-bottom: 1rem;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    color: white;
    background-color: var(--toastBackground, #625df5);
  }
  .toast.error {
    color: black;
    background-color: var(--toastErrorBackground, #e54b4b);
  }
</style>
