import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: []
  }),
  actions: {
    async fetchUser() {
        const {data} = await axios.get(`${process.env.VUE_APP_URL}/users`)
        this.users = data
    }
  }
})