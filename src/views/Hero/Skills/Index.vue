<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">

    <b-nav pills small>
      <b-nav-item :active="!isPassiveSkillsActive" @click="changeComponent('ActiveSkills')">Active</b-nav-item>
      <b-nav-item :active="isPassiveSkillsActive" @click="changeComponent('PassiveSkills')">Link</b-nav-item>
    </b-nav>

    <keep-alive>
      <component :is="activeComponent" v-bind:skills="componentProps"/>
    </keep-alive>

    <!--<ActiveSkills :skills="skills.active"/>

    <hr>

    <PassiveSkills :skills="skills.passive"/>-->

  </div>
</template>

<script>

export default {
  name: 'Skills',
  components: {
    // Dynamic Components
    ActiveSkills: () => import(/* webpackChunkName: "ACTIVE" */'./ActiveSkills'),
    PassiveSkills: () => import(/* webpackChunkName: "PASSIVE" */'./PassiveSkills')
  },
  props: {
    skills: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      activeComponent: 'ActiveSkills'
    }
  },
  computed: {
    componentProps () {
      return this.activeComponent === 'ActiveSkills' ? this.skills.active : this.skills.passive
    },
    isPassiveSkillsActive () {
      return this.activeComponent === 'PassiveSkills'
    }
  },
  methods: {
    changeComponent (component) {
      this.activeComponent = component
    }
  }
}
</script>
