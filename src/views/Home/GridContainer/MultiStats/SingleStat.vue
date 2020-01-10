<template>
  <div class="sigle-stat w-100 mb-3">
    <b-card class="text-body">
      <div class="d-flex align-content-center">
        <div class="mr-3">
          <font-awesome-icon :icon="icoName" class="fa-2x" />
        </div>
        <div>
          Numero + Texto
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'SingleStat',
  props: {
    icoName: {
      required: true,
      type: String
    }
  }
}
</script>
