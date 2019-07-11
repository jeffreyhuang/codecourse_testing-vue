import { mount } from '@vue/test-utils'
import AppReveal from '../AppReveal'

describe('AppReveal', () => {
  it('renders the text on click', () => {
    let wrapper = mount(AppReveal, {
      propsData: {
        text: 'Hello'
      }
    })

    console.log(wrapper.find('a'))
  })
})
