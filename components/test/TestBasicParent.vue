<template>
  <div>
    <h1>Vue Test Utilsを使用したテスト</h1>
    <div>
      <h2>コンポーネントの存在チェック</h2>
      <div class="sample">Sample</div>
    </div>
    <div>
      <h2>コンポーネントが表示されているか</h2>
      <div v-if="true" class="v-show-test">
        <p>content</p>
      </div>
    </div>
    <div class="component-test-event">
      <h2>イベントトリガー</h2>
      <button
        type="button"
        class="component-test-event-button"
        @click="increment"
      >
        {{ count }}
      </button>
    </div>
    <div class="component-test-radio-checkbox">
      <h2>ラジオボタンやチェックボックス</h2>
      <label
        v-for="(list, i) in radioList"
        :key="i"
        :class="{ 'is-active': radioVal === list.val }"
      >
        {{ list.id }}
        <input
          id=""
          v-model="radioVal"
          type="radio"
          name="radio"
          :value="list.val"
        />
      </label>
    </div>
    <div class="component-test-axios">
      <h2>axios get</h2>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import TestBasicChild from '../VueBasicChild'
export default {
  name: 'TestBasicParent',
  data() {
    return {
      count: 0,
      radioVal: 1,
      radioList: [
        {
          id: 1,
          val: 1,
        },
        {
          id: 2,
          val: 2,
        },
        {
          id: 3,
          val: 3,
        },
      ],
      users: [],
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      this.users = response.data
    })
  },
  methods: {
    increment() {
      this.count++
    },
    getString() {
      return 'test1'
    },
  },
  // components: { TestBasicChild },
}
</script>

<style lang="scss">
.is-active {
  color: red;
}
</style>
