import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: []
  }),
  actions: {
    async fetchUser() {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/users`)
        this.users = data
    }
  }
})