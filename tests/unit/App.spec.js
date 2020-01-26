import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import BaseLoading from '@/components/BaseLoading'
import LoadLayout from '@/layouts/LoadLayout'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App.vue', () => {
  it('LoadLayout comp is shown when isLoading is true', () => {
    const store = new Vuex.Store({
      modules: {
        loading: {
          namespaced: true,
          state: {
            isLoading: true
          }
        }
      }
    })
    const wrapper = shallowMount(App, {
      localVue,
      store
    })

    // console.log(wrapper.vm)
    expect(wrapper.find(LoadLayout).exists()).toBe(true)
  })

  it('LoadLayout comp is hidden when isLoading is false', () => {
    const store = new Vuex.Store({
      modules: {
        loading: {
          namespaced: true,
          state: {
            isLoading: false
          }
        }
      }
    })
    const wrapper = shallowMount(App, {
      localVue,
      store
    })

    expect(wrapper.find(LoadLayout).exists()).toBe(false)
  })

  it('BaseLoading comp is shown when isLoading is true', () => {
    const store = new Vuex.Store({
      modules: {
        loading: {
          namespaced: true,
          state: {
            isLoading: true
          }
        }
      }
    })
    const wrapper = shallowMount(App, {
      localVue,
      store
    })

    // console.log(wrapper.vm)
    expect(wrapper.find(BaseLoading).exists()).toBe(true)
  })

  it('BaseLoading comp is hidden when isLoading is false', () => {
    const store = new Vuex.Store({
      modules: {
        loading: {
          namespaced: true,
          state: {
            isLoading: false
          }
        }
      }
    })
    const wrapper = shallowMount(App, {
      localVue,
      store
    })

    expect(wrapper.find(BaseLoading).exists()).toBe(false)
  })
})
