import { shallowMount } from '@vue/test-utils'
import Index from '@/components/FooterBar/Index.vue'
import MadeByFoot from '@/components/FooterBar/MadeByFoot'
import PoweredByFoot from '@/components/FooterBar/PoweredByFoot'
import FootLinks from '@/components/FooterBar/FootLinks'

describe('FooterBar', () => {
  describe('Index.vue', () => {
    it('MadeByFoot component exists', () => {
      const wrapper = shallowMount(Index, {})

      expect(wrapper.find(MadeByFoot).exists()).toBe(true)
    })

    it('PoweredByFoot component exists', () => {
      const wrapper = shallowMount(Index, {})

      expect(wrapper.find(PoweredByFoot).exists()).toBe(true)
    })

    it('FootLinks component exists', () => {
      const wrapper = shallowMount(Index, {})

      expect(wrapper.find(FootLinks).exists()).toBe(true)
    })
  })
})
