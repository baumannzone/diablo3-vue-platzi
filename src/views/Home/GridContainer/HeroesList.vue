<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <b-table
      striped
      hover
      dark
      :items="heroes"
      :fields="fields"
      small
      borderless
      responsive>
      <template v-slot:cell(name)="data">
        <HeroIco :hero="data.item"/>
      </template>

      <template v-slot:cell(class)="data">
        <span class="font-weight-bold"> {{ data.item.class }} </span>
        <span>·</span>
        <span> {{ data.item.level }} </span>

      </template>

      <template v-slot:cell(kills)="data">
        <span>{{ data.item.kills.elites }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import HeroIco from './HeroIco'

export default {
  name: 'HeroesList',
  components: { HeroIco },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: false
        }
      ]
    }
  }
}
</script>
