<template>
  <div class="search-form">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="BattleTag:"
        label-for="input-text"
        description="Profile#1234"
      >
        <b-form-input
          id="input-text"
          v-model="form.text"
          type="email"
          required
          placeholder="BattleTag"
        />
      </b-form-group>

      <b-form-group id="input-group-3" label="Region:" label-for="input-region">
        <b-form-select
          id="input-region"
          v-model="form.region"
          :options="regions"
          required
        />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'MainForm',
  data () {
    return {
      form: {
        region: 'eu',
        battleTag: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('buscar')
    }
  }
}
</script>
