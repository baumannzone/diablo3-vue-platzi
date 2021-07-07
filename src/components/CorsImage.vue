<template>
    <div>
        <img :src="imgSrc" :alt="alt || ''" :title="title || ''">
    </div>
</template>

<script>

import { getImage } from '@/api/images'

export default {

  name: 'CorsImage',

  data: function () {
    return {
      imgSrc: ''
    }
  },

  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  },

  async created () {
    this.imgSrc = await getImage(this.src)
  }

}
</script>
