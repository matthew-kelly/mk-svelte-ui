<script>
  export let label = '';
  export let isToggled = false;
  export let backgroundColor = undefined;
  export let backgroundColorChecked = undefined;
  export let buttonColor = undefined;

  let styleString = '';
  if (backgroundColor) styleString += `--toggleBackgroundColor: ${backgroundColor}; `;
  if (backgroundColorChecked)
    styleString += `--toggleBackgroundColorChecked: ${backgroundColorChecked}; `;
  if (buttonColor) styleString += `--toggleButtonColor: ${buttonColor}; `;

  function handleKeyDown(event) {
    if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') {
      return;
    }
    return (isToggled = !isToggled);
  }
</script>

<label style={styleString}>
  <input type="checkbox" bind:checked={isToggled} />
  <div
    class="toggle"
    tabindex="0"
    role="button"
    aria-pressed={isToggled}
    on:keydown={handleKeyDown}
  />
  {label}
</label>

<style>
  label {
    --width: 40px;
    --height: calc(var(--width) / 2);
    --radius: calc(var(--height) / 2);
    display: flex;
    line-height: calc(var(--height) * 1.1);
  }

  .toggle {
    position: relative;
    width: var(--width);
    height: var(--height);
    border-radius: var(--radius);
    border: solid 1px #777;
    transition: background-color 0.2s ease;
    margin-right: 5px;
    background-color: var(--toggleBackgroundColor, #fff);
    outline-width: 2px;
  }

  .toggle::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    height: var(--height);
    width: var(--height);
    border-radius: var(--radius);
    background-color: var(--toggleButtonColor, #ddd);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease;
  }

  input {
    display: none;
  }

  input:checked + .toggle {
    background-color: var(--toggleBackgroundColorChecked, #00ff00);
  }

  input:checked + .toggle::after {
    transform: translate3d(100%, 0, 0);
  }
</style>
