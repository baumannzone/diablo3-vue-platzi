<template>
  <div class="search-form my-5">

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <b-form @submit.prevent="onSubmit">

          <b-form-group
            id="input-group-1"
            label="BattleTag:"
            label-for="input-text"
            description="Format: YourProfile#1234"
          >
            <b-form-input
              id="input-text"
              v-model="form.battleTag"
              type="text"
              size="lg"
              required
              placeholder="BattleTag"
            />
          </b-form-group>

          <b-form-group id="input-group-3" label="Region:" label-for="input-region">
            <b-form-select
              id="input-region"
              v-model="form.region"
              size="lg"
              :options="regions"
              required
            />
          </b-form-group>

          <div class="d-flex justify-content-end mt-5">
            <b-button type="submit" variant="primary" size="lg">Submit</b-button>
          </div>

        </b-form>
      </div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import { regions, defaultLocales } from '@/utils/regions'
import { getAccount } from '@/api/search'

export default {
  name: 'MainForm',
  data () {
    return {
      form: {
        battleTag: '',
        region: 'eu'
      }
    }
  },
  computed: {
    regions () {
      return regions.map(region => ({ value: region, text: region.toUpperCase() }))
    }
  },
  methods: {
    ...mapMutations([ 'SET_REGION', 'SET_LOCALE', 'SET_BATTLE_TAG' ]),
    onSubmit () {
      const locale = defaultLocales[regions.findIndex(r => r === this.form.region)]

      // Set Data
      this.SET_BATTLE_TAG(this.form.battleTag)
      this.SET_REGION(this.form.region)
      this.SET_LOCALE(locale)

      // Fetch data from Blizzard APIs
      console.log('GUARDADO....=?')
      getAccount()
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
