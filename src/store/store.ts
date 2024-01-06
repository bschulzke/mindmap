import { defineStore } from 'pinia'

export const useStore = defineStore('storeUser', {
  state: () => {
    return {
      text: "Test Store"
    }
  },
  actions: {
    setText (value: string) {
      this.text = value
    }
  },
  persist: {
    enabled: true
  }
})