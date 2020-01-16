<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">

    <ActiveSkills :skills="skills.active"/>

  </div>
</template>

<script>
import ActiveSkills from './ActiveSkills'

export default {
  name: 'Skills',
  components: { ActiveSkills },
  props: {
    skills: {
      required: true,
      type: Object
    }
  }
}
</script>
