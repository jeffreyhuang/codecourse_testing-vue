import { mount } from '@vue/test-utils'
import AppHello from '../AppHello'

describe('test', () => {
  it('renders out the hello text', () => {
    let wrapper = mount(AppHello)

    expect(wrapper.html()).toContain('Hello')
  })
})
