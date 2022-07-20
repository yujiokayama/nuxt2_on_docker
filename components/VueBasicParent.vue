<template>
  <div>
    <h1 class="">Vueの基礎</h1>
    <div>
      <h2>data</h2>
      <div>data:numの数値を取得する: {{ num }}</div>
    </div>
    <div>
      <h2>computed</h2>
      <h3>getterのみ</h3>
      <div>data:numの2倍の数値を取得する: {{ getDoubleNum }}</div>
      <h3>getterとsetter</h3>
      <p><input v-model="fullName" /></p>
      <p>苗字: {{ lastName }}</p>
      <p>名前: {{ firstName }}</p>
    </div>
    <div>
      <h2>イベントハンドリング</h2>
      <div>
        <button @click="addNum">+</button>
        <button @click="reduceNum">-</button>
      </div>
    </div>
    <div>
      <h2>v-model</h2>
      <input id="" v-model="inputText" type="text" name="" />
      <span>{{ inputText }}</span>
    </div>
    <div>
      <h2>Emit</h2>
      <VueBasicChild @child-click-event="handleChildClick($event)" />
    </div>
    <div>
      <h2>nextTick</h2>
      <button @click="handleClickNextTick">Insert/Remove</button>
      <div v-if="isShow" ref="content">I am an element</div>
    </div>
    <div>
      <h2>mixin</h2>
      <p>{{ testMixinData }}</p>
    </div>
  </div>
</template>

<script>
import VueBasicChild from './VueBasicChild.vue'
import MixinTest from '@/mixins/mixin'

export default {
  name: 'VueBasicParent',
  components: {
    VueBasicChild,
  },
  mixins: [MixinTest],
  data() {
    return {
      num: 0,
      firstName: 'yuji',
      lastName: 'okayama',
      inputText: '',
      isShow: true,
    }
  },
  computed: {
    getDoubleNum() {
      // only getter
      return this.num * 2
    },
    fullName: {
      // getter 関数
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter 関数
      set(value) {
        this.lastName = value.split(' ')[0]
        this.firstName = value.split(' ')[1]
      },
    },
    // storeの値を取得
    todos() {
      return this.$store.state.todos.list
    },
  },
  watch: {
    num: {
      handler(newVal, oldVal) {
        console.log(`newVal: ${newVal}`, `oldVal: ${oldVal}`)
      },
      // 対象がオブジェクトの場合はtrueにする
      deep: false,
    },
  },
  created() {
    // DOMが生成される前
  },
  mounted() {
    // DOMが生成された後
  },
  methods: {
    addNum() {
      this.num++
    },
    reduceNum() {
      this.num--
    },
    async handleClickNextTick() {
      /**
       * コンポーネントのデータを変更すると、VueはDOMを非同期的に更新するのでコンポーネントのデータ変更後にDOMが更新された瞬間を捉えたい場合は、Vue.nextTick(callback)またはthis.$nextTick(callback)関数を使用する必要がある
       */
      this.isShow = !this.isShow
      await this.$nextTick()
      console.log(this.isShow, this.$refs.content)
    },
    handleChildClick(e) {
      console.log(e)
    },
  },
}
</script>

<style lang="scss"></style>
