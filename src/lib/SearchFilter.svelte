<script>
  import { fade } from 'svelte/transition';
  export let items = [];
  export let title = 'Search';
  export let search = '';
  export let listItemBackground = '';
  let styleString = '';
  if (listItemBackground) styleString += `--listItemBackground: ${listItemBackground}; `;
  let isFocused = false;

  $: filteredSearch = items.filter((item) => {
    return search === '' || item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
</script>

<div class="wrapper" style={styleString}>
  <label>
    {title} <br />
    <input
      type="text"
      placeholder="Search"
      bind:value={search}
      on:focus={() => (isFocused = true)}
    />
  </label>
  {#if isFocused}
    <ul>
      {#each filteredSearch as item}
        <li
          transition:fade={{ duration: 100 }}
          on:click={() => {
            search = item;
            isFocused = false;
          }}
        >
          {item}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .wrapper {
    display: inline-block;
    position: relative;
  }

  ul {
    position: absolute;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    border: solid 1px black;
    cursor: pointer;
  }

  li {
    padding: 5px 10px;
    transition: background-color 0.1s ease;
  }
  li:hover {
    background-color: var(--listItemBackground, #eee);
  }
</style>
