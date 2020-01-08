<template>
  <div class="home">
    <div class="profile-body">
      <div class="grid-container">
        <div class="block-left">
          <div class="top-heroes">Top Heroes</div>
          <div class="list-heroes">Heores list</div>
          <div class="progression">Progression</div>
        </div>
        <div class="block-right">
          <div class="stats">
            <div class="kill"></div>
            <div class="time"></div>
          </div>
        </div>
      </div>
      <div class="full-block">
        <div class="artisans">Artesanos 1 2 y 3</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getAccount } from '@/api'

export default {
  name: 'HomeView',
  components: {},
  created () {
    // getAccount()
    //   .then(res => {
    //     console.log('""""""""""""res""""""""""""')
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log('""""""""""""err""""""""""""')
    //     console.log(err)
    //   })
  }
}
</script>
