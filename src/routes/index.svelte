<script>
  // import Field from '$lib/Field.svelte';
  import Markdown from '$lib/Markdown.svelte';
  import Portal from '$lib/Portal.svelte';
  // import SearchFilter from '$lib/SearchFilter.svelte';
  // import Accordion from '$lib/Accordion.svelte';
  // import Toggle from '$lib/Toggle.svelte';
  // let isToggled = true;
  // let search = '';
  // let items = ['Matt', 'Rob', 'Jeff', 'Darcy', 'Kelly'];
  let text = '';
</script>

<Portal>
  <Markdown bind:text />
</Portal>

<code>{text}</code>

<!-- <Field bind:value={search} label="Search" instructions="Type to search" placeholder="Name" />
<Field value={0} type="number" label="Number" />

<p>This is the current search: {search}</p>

<SearchFilter {items} bind:search /> -->

<!-- <Toggle bind:isToggled />
<Toggle
  bind:isToggled
  buttonColor="blue"
  backgroundColor="orange"
  backgroundColorChecked="pink"
  label="Custom"
/> -->

<!-- <Accordion
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
</Accordion> -->
