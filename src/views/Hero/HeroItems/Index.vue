<template>
  <section class="hero-items mb-5">
    <h2 class="font-diablo">Items</h2>

    <hr class="bg-white">

    <b-row>
      <b-col cols="4" offset="4">
        <ItemDetail :item="this.items.head"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="this.items.shoulders"/>
      </b-col>
      <b-col>
        <ItemDetail :item="this.items.torso"/>
      </b-col>
      <b-col>
        <ItemDetail :item="this.items.neck"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="this.items.hands"/>
      </b-col>
      <b-col>
        <ItemDetail :item="this.items.waist"/>
      </b-col>
      <b-col>
        <ItemDetail :item="this.items.bracers"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="this.items.leftFinger"/>
      </b-col>
      <b-col>
        <ItemDetail :item="this.items.legs"/>
      </b-col>
      <b-col>
        <ItemDetail :item="this.items.rightFinger"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="this.items.mainHand"/>
      </b-col>
      <b-col>
        <ItemDetail :item="this.items.feet"/>
      </b-col>
      <b-col>
        <ItemDetail :item="this.items.offHand"/>
      </b-col>
    </b-row>

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
