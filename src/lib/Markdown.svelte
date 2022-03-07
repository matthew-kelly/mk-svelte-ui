<script>
  import { marked } from 'marked';
  export let text = '';
  let markdownText = text;
  // reactive expression
  $: {
    markdownText = marked(text);
  }
</script>

<div class="wrapper">
  <textarea bind:value={text} />
  <div class="markdown">{@html markdownText}</div>
</div>

<style>
  .wrapper {
    display: flex;
  }

  .wrapper > * {
    width: 50%;
  }

  .markdown {
    margin-left: 1rem;
  }
</style>
