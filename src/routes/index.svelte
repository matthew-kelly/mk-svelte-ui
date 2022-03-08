<script>
  // import Field from '$lib/Field.svelte';
  import Markdown from '$lib/Markdown.svelte';
  import Modal from '$lib/Modal.svelte';
  import Portal from '$lib/Portal.svelte';
  import Toast from '$lib/toast/Toast.svelte';
  import { toast } from '$lib/toast/toast';
  // import SearchFilter from '$lib/SearchFilter.svelte';
  // import Accordion from '$lib/Accordion.svelte';
  // import Toggle from '$lib/Toggle.svelte';
  // let isToggled = true;
  // let search = '';
  // let items = ['Matt', 'Rob', 'Jeff', 'Darcy', 'Kelly'];
  let text = 'hello!';
  let isModalOpen = false;
</script>

<Portal>
  <Markdown bind:text />
</Portal>

<code>{text}</code>

<button on:click={() => (isModalOpen = true)}>Open modal</button>
<br />
<button on:click={() => toast.send('New message!')}>New toast</button>
<button on:click={() => toast.send('New message!', { duration: 1000 })}>1000 Duration</button>
<button on:click={() => toast.send('New message!', { duration: 5000, type: 'ERROR' })}
  >Error Message</button
>

<Toast />

<Modal bind:isModalOpen>
  <p>Hello from the modal!</p>
</Modal>

<!-- <Field bind:value={search} label="Search" instructions="Type to search" placeholder="Name" /> -->
<!-- <Field value={0} type="number" label="Number" /> -->

<!-- <p>This is the current search: {search}</p> -->

<!-- <SearchFilter {items} bind:search /> -->

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
