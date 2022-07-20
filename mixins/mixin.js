export default {
  data() {
    return {
      mixinData: 'Mixin!!',
    }
  },
  computed: {
    testMixinData() {
      return this.mixinData
    },
  },
}
