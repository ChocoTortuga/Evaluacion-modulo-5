<template>
  <div class="fullscreen bg-brown-14 text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 15vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Página no encontrada
      </div>

      
      <br>
      <q-btn
        class="q-mt-xl"
        color="brown-1"
        text-color="brown-14"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
