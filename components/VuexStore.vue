<template>
  <div>
    <h2>Vuex-getters</h2>
    <ul>
      <li v-for="(tasks, index) in getTasks" :key="index">
        {{ tasks.task }} <button @click="handleRemoveTask(index)">完了</button>
      </li>
    </ul>
    <h2>Vuex-actions</h2>
    <input id="" v-model="task" type="text" name="" />
    <button @click="handleAddTask">taskを追加する</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'VuexStore',
  data() {
    return {
      task: '',
    }
  },
  computed: {
    ...mapGetters({
      getTasks: 'task/getTasks',
    }),
  },
  methods: {
    handleAddTask() {
      this.addTask({
        task: this.task,
      })
      this.task = ''
    },
    handleRemoveTask(index) {
      this.removeTask(index)
    },
    ...mapActions({
      addTask: 'task/addTask',
      removeTask: 'task/removeTask',
    }),
  },
}
</script>

<style lang="scss"></style>
