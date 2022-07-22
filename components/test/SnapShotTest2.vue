<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  name: 'SnapShotTest2',
  props: {
    message: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss"></style>
