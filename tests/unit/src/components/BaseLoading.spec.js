import BootstrapVue from 'bootstrap-vue'

import { shallowMount, createLocalVue } from '@vue/test-utils'
import BaseLoading from '@/components/BaseLoading'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('BaseLoading.vue', () => {
  it('Component has `h1` tag with text `Loading...`', () => {
    const wrapper = shallowMount(BaseLoading, {
      localVue
    })
    expect(wrapper.find('h1').text()).toBe('Loading...')
  })
})
