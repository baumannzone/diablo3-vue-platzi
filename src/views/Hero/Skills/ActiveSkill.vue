<template>
  <div class="d-flex align-items-center mb-3">
    <div class="mr-2">
      <img :src="skillUrl" :alt="skill.skill.name">
    </div>
    <div>
      <p class="skill-name m-0" :title="skill.skill.description">
        {{ skill.skill.name }}
      </p>
      <small class="rune-name text-muted" :title="skill.rune.description">
        {{ skill.rune.name }}
      </small>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ActiveSkill',
  props: {
    skill: {
      required: true,
      type: Object
    }
  },
  computed: {
    skillUrl () {
      const sizes = [21, 42, 64]
      const host = `http://media.blizzard.com/d3/icons/skills/${sizes[1]}/`
      return `${host}${this.skill.skill.icon}.png`
    }
  }
}
</script>
