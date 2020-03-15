<template>
  <div class="passive-skills">
    <h4 class="my-5">Passive</h4>
    <div class="skills">
      <b-row>
        <b-col v-for="(skill, idx) in skills" :key="idx" cols="6" lg="12">
          <PassiveSkill :skill="skill.skill"/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import PassiveSkill from './PassiveSkill'

export default {
  name: 'PassiveSkills',
  components: { PassiveSkill },
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>
