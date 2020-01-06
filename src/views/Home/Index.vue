<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { listSeason } from '@/api'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created () {
    listSeason()
      .then(res => {
        console.log('""""""""""""res""""""""""""')
        console.log(res)
      })
      .catch(err => {
        console.log('""""""""""""err""""""""""""')
        console.log(err)
      })
  }
}
</script>
