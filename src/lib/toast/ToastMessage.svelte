<script>
  import { tweened } from 'svelte/motion';
  import { toast } from '$lib/toast/toast';
  import { onMount } from 'svelte';

  export let message;

  let progress = tweened(100, { duration: message.duration });

  onMount(async () => {
    await progress.set(0);
    toast.remove(message.id);
  });
</script>

<div class="progress" style={`width: ${$progress}%;`} />
<p>{message.message}</p>

<style>
  .progress {
    height: 5px;
    background-color: white;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  p {
    margin: 0;
  }
</style>
