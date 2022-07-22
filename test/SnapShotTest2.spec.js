import { shallowMount } from '@vue/test-utils'
import SnapShotTest2 from '@/components/test/SnapShotTest2.vue'

describe('コンポーネントのテスト', () => {
  test('何もレンダリングされないケース', () => {
    const wrapper = shallowMount(SnapShotTest2)

    expect(wrapper.element).toMatchSnapshot()
  })

  test('文字列を渡すケース', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        message: 'Vue Test Utils',
      },
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
