<template>
  <section class="hero-items mb-5">
    <h2 class="font-diablo">Items</h2>

    <hr class="bg-white">

    <b-row>
      <b-col cols="4" offset="4">
        <ItemDetail :item="items.head" slot-name="head"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="items.shoulders" slot-name="Shoulders"/>
      </b-col>
      <b-col>
        <ItemDetail :item="items.torso" slot-name="Torso"/>
      </b-col>
      <b-col>
        <ItemDetail :item="items.neck" slot-name="Neck"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="items.hands" slot-name="Hands"/>
      </b-col>
      <b-col>
        <ItemDetail :item="items.waist" slot-name="Waist"/>
      </b-col>
      <b-col>
        <ItemDetail :item="items.bracers" slot-name="Bracers"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="items.leftFinger" slot-name="Left Finger"/>
      </b-col>
      <b-col>
        <ItemDetail :item="items.legs" slot-name="Legs"/>
      </b-col>
      <b-col>
        <ItemDetail :item="items.rightFinger" slot-name="Right Finger"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="items.mainHand" slot-name="Main Hand"/>
      </b-col>
      <b-col>
        <ItemDetail :item="items.feet" slot-name="Feet"/>
      </b-col>
      <b-col>
        <ItemDetail :item="items.offHand" slot-name="Off Hand"/>
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
