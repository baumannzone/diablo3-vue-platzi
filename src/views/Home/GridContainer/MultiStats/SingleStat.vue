<template>
  <div class="single-stat w-100">
    <b-card class="text-body">
      <div class="d-flex">
        <div class="d-block ico-cont">
          <div class="text-center">
            <font-awesome-icon :icon="icoName" class="fa-3x" :style="{color: icoColor}"/>
          </div>
        </div>
        <div class="flex-grow-1">
          <h4 class="font-weight-bold mb-0">{{ info.value | formatNumber }}</h4>
          <span class="text-muted font-weight-light mb-0">{{ info.text }}</span>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { formatNumber } from '@/filters/numeral'

export default {
  name: 'SingleStat',
  filters: {
    formatNumber
  },
  props: {
    icoName: {
      required: true,
      type: String
    },
    icoColor: {
      required: true,
      type: String
    },
    info: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
  .single-stat
    .ico-cont
      width 80px

</style>
