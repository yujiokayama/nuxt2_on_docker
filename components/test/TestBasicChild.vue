<template>
  <div>
    <div>
      <h2>コンポーネントのプロパティ</h2>
      <div class="component-props-test">{{ number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestBasicChild',
  props: {
    number: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  mounted() {
    this.$emit('sampleChildEvent', 'child event!!')
  },
}
</script>

<style lang="scss"></style>
