<template>
  <button @click="sendValue">親にイベント通知</button>
</template>

<script>
export default {
  name: 'VueBasicChild',
  props: {
    propsMessage: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      message: '子のイベントが発火されました',
    }
  },
  methods: {
    sendValue() {
      this.$emit('child-click-event', this.message)
    },
  },
}
</script>

<style lang="scss"></style>
