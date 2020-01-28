import BootstrapVue from 'bootstrap-vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import Index from '@/components/HeaderBar/Index.vue'
import BrandTitle from '@/components/HeaderBar/BrandTitle'
import BreadcrumbBar from '@/components/HeaderBar/BreadcrumbBar'
// import * as season from '@/api/season'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('HeaderBar', () => {
  describe('Index.vue', () => {
    it('fetchSeasons method is called', () => {
      const fetchSeasons = jest.fn()
      const region = 'eu'

      shallowMount(Index, {
        localVue,
        methods: {
          fetchSeasons
        }
      })

      expect(fetchSeasons).toBeCalledTimes(1)
      expect(fetchSeasons).toBeCalledWith(region)
    })

    it('BrandTitle component exists', () => {
      const wrapper = shallowMount(Index, {
        localVue
      })
      expect(wrapper.find(BrandTitle).exists()).toBe(true)
    })

    it('BreadcrumbBar component exists', () => {
      const wrapper = shallowMount(Index, {
        localVue
      })
      expect(wrapper.find(BreadcrumbBar).exists()).toBe(true)
    })
  })
})
