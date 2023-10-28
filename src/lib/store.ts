import { writable } from "svelte/store";

export const webAppStore = writable(window.Telegram.WebApp);

export function updateWebAppStore() {
    webAppStore.set(window.Telegram.WebApp);
}

export class Store {
  static init () {
    window.Telegram.WebApp.ready();
  }
}
