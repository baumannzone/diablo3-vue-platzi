<template>
  <section class="hero-items mb-5">
    <h2 class="font-diablo">Items</h2>

    <hr class="bg-white">

    <b-row>
      <b-col cols="4" offset="4">
        <ItemDetail :item="itemsData.head"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="itemsData.shoulders"/>
      </b-col>
      <b-col>
        <ItemDetail :item="itemsData.torso"/>
      </b-col>
      <b-col>
        <ItemDetail :item="itemsData.neck"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="itemsData.hands"/>
      </b-col>
      <b-col>
        <ItemDetail :item="itemsData.waist"/>
      </b-col>
      <b-col>
        <ItemDetail :item="itemsData.bracers"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="itemsData.leftFinger"/>
      </b-col>
      <b-col>
        <ItemDetail :item="itemsData.legs"/>
      </b-col>
      <b-col>
        <ItemDetail :item="itemsData.rightFinger"/>
      </b-col>
    </b-row>

    <hr>

    <b-row>
      <b-col>
        <ItemDetail :item="itemsData.mainHand"/>
      </b-col>
      <b-col>
        <ItemDetail :item="itemsData.feet"/>
      </b-col>
      <b-col>
        <ItemDetail :item="itemsData.offHand"/>
      </b-col>
    </b-row>

  </section>

</template>

<script>
import ItemDetail from './ItemDetail'

const defaultItems = {
  head: {
    slotName: 'head'
  },
  shoulders: {
    slotName: 'Shoulders'
  },
  torso: {
    slotName: 'Torso'
  },
  neck: {
    slotName: 'Neck'
  },
  hands: {
    slotName: 'Hands'
  },
  waist: {
    slotName: 'Waist'
  },
  bracers: {
    slotName: 'Bracers'
  },
  leftFinger: {
    slotName: 'Left Finger'
  },
  legs: {
    slotName: 'Legs'
  },
  rightFinger: {
    slotName: 'Right Finger'
  },
  mainHand: {
    slotName: 'Main Hand'
  },
  feet: {
    slotName: 'Feet'
  },
  offHand: {
    slotName: 'Off Hand'
  }
}

export default {
  name: 'HeroItems',
  components: { ItemDetail },
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  computed: {
    itemsData () {
      return {
        ...defaultItems,
        ...this.items
      }
    }
  }
}
</script>
