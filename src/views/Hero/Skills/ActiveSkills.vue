<template>
  <div class="active-skills">
    <h4>Active Skills</h4>
    <div class="skills">
      <b-row>
        <b-col v-for="(skill, idx) in skills" :key="idx" cols="6" lg="12">
          <ActiveSkill :skill="skill"/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import ActiveSkill from './ActiveSkill'

export default {
  name: 'ActiveSkills',
  components: { ActiveSkill },
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>
