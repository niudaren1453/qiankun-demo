<template>
    <div>姓名:{{ userInfo.name }} age : {{ userInfo.age }}</div>
</template>

<script setup lang="ts">
import ls from '@/utils/ls'
import { useCounterStore,useUserInfoStore } from '@/stores'
interface userInfo {
    name: string,
    age: number

}
ls.set('userInfo', { name: 'chenkniu', age: 18 } as userInfo)
const store = useCounterStore()
const userInfoStore = useUserInfoStore()
console.log(store)
console.log(store.double)
const doubleValue = computed(() => store.double)
store.increment()
console.log(doubleValue)
console.log(doubleValue.value)
const userInfo = computed(()=> userInfoStore.get)
console.log(userInfo.value)
</script>

<style scoped></style>
