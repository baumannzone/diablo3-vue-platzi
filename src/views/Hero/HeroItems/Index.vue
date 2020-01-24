<template>
  <section class="hero-items mb-5">
    <h2 class="font-diablo">Items</h2>

    <hr class="bg-white">

    <template v-if="items === null">
      <h3>Loading...</h3>
    </template>
    <template v-else>
      <b-row>
        <b-col cols="4" offset="4">
          <ItemDetail :item="items.head"/>
        </b-col>
      </b-row>

      <hr>

      <b-row>
        <b-col>
          <ItemDetail :item="items.shoulders"/>
        </b-col>
        <b-col>
          <ItemDetail :item="items.torso"/>
        </b-col>
        <b-col>
          <ItemDetail :item="items.neck"/>
        </b-col>
      </b-row>

      <hr>

      <b-row>
        <b-col>
          <ItemDetail :item="items.hands"/>
        </b-col>
        <b-col>
          <ItemDetail :item="items.waist"/>
        </b-col>
        <b-col>
          <ItemDetail :item="items.bracers"/>
        </b-col>
      </b-row>

      <hr>

      <b-row>
        <b-col>
          <ItemDetail :item="items.leftFinger"/>
        </b-col>
        <b-col>
          <ItemDetail :item="items.legs"/>
        </b-col>
        <b-col>
          <ItemDetail :item="items.rightFinger"/>
        </b-col>
      </b-row>

      <hr>

      <b-row>
        <b-col>
          <ItemDetail :item="items.mainHand"/>
        </b-col>
        <b-col>
          <ItemDetail :item="items.feet"/>
        </b-col>
        <b-col>
          <ItemDetail :item="items.offHand"/>
        </b-col>
      </b-row>
    </template>

  </section>

</template>

<script>
import ItemDetail from './ItemDetail'

export default {
  name: 'HeroItems',
  components: { ItemDetail },
  props: {
    items: {
      type: Object,
      required: true
    }
  }
}
</script>
