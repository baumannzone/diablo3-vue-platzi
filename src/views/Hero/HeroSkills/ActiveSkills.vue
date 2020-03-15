<template>
  <div class="active-skills">
    <h4 class="my-5">Active</h4>

    <div class="skills">
      <b-row>
        <b-col v-for="(skill, idx) in skills" :key="idx" cols="6" lg="12">
          <ActiveSkill :skill="skill.skill" :rune="skill.rune" :slot-num="idx+1"/>
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
