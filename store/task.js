export const state = () => ({
  tasks: [
    {
      task: '料理',
    },
  ],
})

export const getters = {
  getTasks(state) {
    return state.tasks
  },
}

export const mutations = {
  addTask(state, task) {
    state.tasks = [...state.tasks, task]
  },
  removeTask(state, index) {
    state.tasks.splice(index, 1)
  },
}

export const actions = {
  addTask({ commit }, task) {
    commit('addTask', task)
  },
  removeTask({ commit }, index) {
    commit('removeTask', index)
  },
}
