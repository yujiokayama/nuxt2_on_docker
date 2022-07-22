import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import axios from 'axios'
import TestBasicParent from '@/components/test/TestBasicParent.vue'

// ライブラリ・モジュール全体をmock

// jest.mock('axios', () => ({
//   get: jest.fn(() =>
//     Promise.resolve({
//       data: [
//         { id: 1, name: 'Leanne Graham' },
//         { id: 2, name: 'Ervin Howell' },
//       ],
//     })
//   ),
// }))

// オブジェクト・単一メソッドをmock
jest.spyOn(axios, 'get').mockResolvedValue({
  data: [
    { id: 1, name: 'Lee Graham' },
    { id: 2, name: 'Ervin Howell' },
  ],
})

describe('コンポーネントのテスト', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TestBasicParent)
    // mount後にメソッドを上書き
    wrapper.vm.getString = jest.fn().mockReturnValue('test2')
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('コンポーネントが表示される', () => {
    // wrapperが存在する
    expect(wrapper.exists()).toBe(true)
  })
  it('ルート要素に.sampleクラスがついている', () => {
    // wrapperのルート要素に.sampleクラスがついている
    expect(wrapper.classes()).toContain('sample')
  })
  it('コンポーネントが表示されているか', () => {
    // wrapper内の`v-show-test`クラスが付与されている要素が表示されているか
    expect(wrapper.find('div.v-show-test').isVisible()).toBeTruthy()
  })
  it('イベントトリガー', () => {
    expect(wrapper.vm.count).toBe(0)
    wrapper.find('button.component-test-event-button').trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
  it('mock化したメソッド', async () => {
    const result = wrapper.vm.getString()
    // DOMの変更を待つ
    await flushPromises()
    expect(result).toBe('test2')
  })
  it('ラジオボタンの検証', () => {
    const radios = wrapper.findAll(
      'div.component-test-radio-checkbox input[type=radio]'
    )
    expect(radios.length).toBe(3)
    expect(radios.at(0).element.checked).toBe(true)
    expect(radios.at(1).element.checked).toBe(false)
    expect(radios.at(2).element.checked).toBe(false)
  })
  it.only('axios get', async () => {
    await flushPromises()

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users'
    )
  })
})
