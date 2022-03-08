import { writable } from "svelte/store";

const newToast = () => {
  const { subscribe, update } = writable([]);

  function send(message, { duration = 3000, type = "INFO" } = {}) {
    update((state) => {
      const id = Math.floor(Math.random() * 1000);
      const newMessage = {
        id,
        message,
        duration,
        type
      }
      return [...state, newMessage];
    })
  }

  function remove(id) {
    update((state) => {
      let newState = state.filter(item => item.id !== id);
      return [...newState];
    })
  }

  return { subscribe, send, remove }
}

export const toast = newToast();