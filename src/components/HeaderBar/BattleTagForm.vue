<template>
  <b-nav-form v-on:submit.prevent="submitForm">
    <b-input-group size="sm">
      <template v-slot:prepend>
        <b-input-group-text class="sm">
          <font-awesome-icon icon="search"/>
        </b-input-group-text>
      </template>
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="User#1234"
        v-model="searchText"
        autocomplete="off"
      />
    </b-input-group>
    <b-button size="sm" class="my-2 my-sm-0" variant="primary" type="submit">Search</b-button>
  </b-nav-form>
</template>

<script>
export default {
  name: 'BattleTagForm',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    submitForm () {
      console.log('BattleTag::: ', this.searchText)
    }
  }
}
</script>
