<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">

    <ActiveSkills :skills="skills.active"/>

    <hr>

    <PassiveSkills :skills="skills.passive"/>

  </div>
</template>

<script>
import ActiveSkills from './ActiveSkills'
import PassiveSkills from './PassiveSkills'

export default {
  name: 'Skills',
  components: { ActiveSkills, PassiveSkills },
  props: {
    skills: {
      required: true,
      type: Object
    }
  }
}
</script>
