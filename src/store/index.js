import { createStore } from 'vuex'

// export default createStore({
//   // 存放信息，相当于data
//   state: {
//     username: 'xiaoming'
//   },
//   // 相当于计算属性
//   getters: {
//     newName (state) {
//       return state.username + '!'
//     }
//   },
//   // 相当于methods
//   mutations: {
//     changeName (state) {
//       state.username = 'Daming'
//     }
//   },
//   // 定义异步任务
//   actions: {
//     updateName (ctx) {
//       setTimeout(() => {
//         ctx.commit('changeName')
//       }, 2000)
//     }
//   },
//   // 模块化
//   modules: {}
// })

const moduleA = {
  state: {
    username: 'moduleA'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'moduleAA'
    }
  }
}
const moduleB = {
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'moduleBB'
    }
  }
}
export default createStore({
  modules: {
    moduleA,
    moduleB
  }
})
