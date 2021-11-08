<template>
  <div>
    <p>{{ $store.state.moduleA.username }}</p>
    <p>{{ $store.getters.newName }}</p>
    <p>{{ $store.state.moduleB.username }}</p>
    <p>{{ $store.getters['moduleB/newName'] }}</p>
    <button @click="changeName">修改名字</button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    const changeName = function () {
      store.commit('moduleB/updateName')
    }
    return { changeName }
  }
}
</script>
<style lang="less" scoped></style>

<style lang="less" scoped></style>
