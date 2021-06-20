<template>
  <q-page class="bg-brown-1" padding>
    <div
      class="col-12 text-center bg-white rounded-borders"
      rounded
      filled
    >
    <formulario/>
    </div>
  </q-page>
</template>

<script>
import formulario from "../pages/Formulario.vue";
export default {
  components: {
    formulario,
  },
};
</script>