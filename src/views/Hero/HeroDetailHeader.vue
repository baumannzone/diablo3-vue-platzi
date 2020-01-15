<template>
  <b-row class="my-5">
    <b-col cols="12">
      <div class="text-center">
        <h1 class="font-diablo text-truncate">{{ detail.name }}</h1>
        <div>
          <small>
            <span>{{ detail.level }}</span>
            <span class="text-info" v-if="detail.paragonLevel">
              <span class="text-white"> · </span>
              ({{ detail.paragonLevel }})</span>
            <span> · {{classToName(detail.classSlug)}}</span>
            <span v-if="detail.seasonal" class="text-success"> · Seasonal </span>
            <span v-if="detail.hardcore" class="text-danger"> · Hardcore </span>
          </small>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import heroName from '@/mixins/heroName'

export default {
  name: 'HeroDetailHeader',
  mixins: [heroName],
  props: {
    detail: {
      type: Object,
      required: true
    }
  }
}
</script>
