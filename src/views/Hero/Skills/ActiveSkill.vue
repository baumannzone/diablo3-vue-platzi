<template>
  <div class="d-flex align-items-center mb-3">
    <div class="mr-2">
      <span class="slot" :class="slotClass"/>
      <img :src="skillUrl" :alt="skill.name">
    </div>

    <div>
      <p class="skill-name m-0" :title="skill.description">
        {{ skill.name }}
      </p>
      <small v-if="rune" class="rune-name text-muted" :title="rune.description">
        {{ rune.name }}
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
    },
    rune: {
      required: false,
      type: Object
    },
    slotNum: {
      required: true,
      type: Number || String
    }
  },
  computed: {
    skillUrl () {
      const sizes = [21, 42, 64]
      const host = `http://media.blizzard.com/d3/icons/skills/${sizes[1]}/`
      return `${host}${this.skill.icon}.png`
    },
    slotClass () {
      return `slot-${this.slotNum}`
    }
  }
}
</script>
