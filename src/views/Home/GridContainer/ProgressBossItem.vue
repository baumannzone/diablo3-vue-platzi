<template>
  <div class="d-flex flex-column">
    <div class="boss-img pt-2">
      <div class="act" :class="actClass"></div>
    </div>
    <div class="d-block text-center">{{ fullActName }}</div>
  </div>
</template>

<script>
const acts = {
  act1: 'I',
  act2: 'II',
  act3: 'III',
  act4: 'IV',
  act5: 'V'
}

export default {
  name: 'ProgressBossItem',
  props: {
    act: {
      required: true,
      type: Object,
      validator: (obj) => {
        return Object.keys(obj).length === 2
      }
    }
  },
  computed: {
    fullActName () {
      return `Act ${acts[this.act.actNum]}`
    },
    actClass () {
      const done = this.act.value ? 'done' : 'pending'
      return `${this.act.actNum} ${done}`
    }
  }
}
</script>
