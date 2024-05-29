import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: []
  }),
  actions: {
    async fetchUser() {
        const {data} = await axios.get('http://172.23.128.253:3000/users')
        this.users = data
    }
  }
})