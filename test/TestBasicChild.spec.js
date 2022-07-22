import { shallowMount } from '@vue/test-utils'
import TestBasicChild from '@/components/test/TestBasicChild.vue'

describe('コンポーネントのテスト', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TestBasicChild, {
      propsData: {
        number: 100,
      },
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('コンポーネントのプロパティ', () => {
    // インスタンスプロパティへのアクセス
    expect(wrapper.vm.number).toBe(100)

    // 渡したプロパティの出力検証
    expect(wrapper.find('div.component-props-test').text()).toBe('100')
  })

  it.only('$emitの検証', () => {
    // イベントが発行されたか検証
    expect(wrapper.emitted('sampleChildEvent')).toBeTruthy()
    // イベントの数を検証
    expect(wrapper.emitted('sampleChildEvent').length).toBe(1)
    // イベントのペイロードを検証
    expect(wrapper.emitted('sampleChildEvent')[0][0]).toEqual('child event!!')
  })
})
