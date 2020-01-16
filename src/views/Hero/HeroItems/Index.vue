<template>
  <section class="hero-items">

    <b-row>
      <b-col>
        <ItemDetail :item="items.head"/>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <ItemDetail :item="items.shoulders"/>
      </b-col>
      <b-col>
        <ItemDetail :item="items.torso"/>
      </b-col>
      <b-col>
        <div class="text-center">Neck</div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <div class="text-center">Hands</div>
      </b-col>
      <b-col>
        <div class="text-center">Waist</div>
      </b-col>
      <b-col>
        <div class="text-center">Bracers</div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <div class="text-center">slot-rightFinger</div>
      </b-col>
      <b-col>
        <div class="text-center">Legs</div>
      </b-col>
      <b-col>
        <div class="text-center">slot-leftFinger</div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <div class="text-center">mainHand</div>
      </b-col>
      <b-col>
        <div class="text-center">Feet</div>
      </b-col>
      <b-col>
        <div class="text-center">offHand</div>
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
