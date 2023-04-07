import { defineStore } from 'pinia'
import ls from '@/utils/ls'


export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0, }),
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({
        userInfo: ls.get('userInfo').value
    }),
    getters: {
        get: (state) => state.userInfo || {}
    },
    actions: {
    },
})