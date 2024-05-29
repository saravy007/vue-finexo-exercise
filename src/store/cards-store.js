import { defineStore } from 'pinia'

export const useCardStore = defineStore('cards-store', {
  state: () => ({
    cards:[
        {
            imgPath:'images/team-1.jpg',
            name:'Joseph Brown',
            position:'Marketing Head',
            quote:'I have alot of money'
        },
        {
            imgPath:'images/team-2.jpg',
            name:'Nancy White',
            position:'Marketing Head'
        },
        {
            imgPath:'images/team-3.jpg',
            name:'Earl Martinez',
            position:'Marketing Head'
        },
        {
            imgPath:'images/team-4.jpg',
            name:'Josephine Allard',
            position:'Marketing Head',
            quote:'Long life learning'
        },
    ]
  }),
  actions: {
    /* increment() {
      this.count++
    },
    decrement() {
      this.count--
    } */
  }
})