<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <b-table
      hover
      dark
      :items="heroes"
      :fields="fields"
      small
      responsive>
      <template v-slot:cell(name)="data">
        <HeroIco :hero="data.item"/>
      </template>

      <template v-slot:cell(class)="data">
        <HeroNameLevel :hero="{ class: data.item.class, level: data.item.level}"/>
      </template>

      <template v-slot:cell(kills)="data">
        <span>{{ data.item.kills.elites }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import HeroIco from './HeroIco'
import HeroNameLevel from './HeroName'

export default {
  name: 'HeroesList',
  components: { HeroNameLevel, HeroIco },
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
