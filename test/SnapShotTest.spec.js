import { shallowMount } from '@vue/test-utils'
import SnapShotTest from '@/components/test/SnapShotTest.vue'

describe('コンポーネントのテスト', () => {
  const wrapper = shallowMount(SnapShotTest)
  it.only('正しくレンダリングされるか', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('messageが正しいか', () => {
    // wrapperのテキストは「Vue Test Utilsを使ったコンポーネントのテスト」である
    expect(wrapper.text()).toBe('Vue Test Utilsを使ったコンポーネントのテスト')
  })
})
