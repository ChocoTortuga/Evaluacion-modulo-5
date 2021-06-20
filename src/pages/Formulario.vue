<template>
  <q-page class="bg-brown-1" padding>
    <div
      class="col-12 text-center bg-brown-1 rounded-borders"
      rounded
      filled
    >
    </div>
    <div class="q-pa-md bg-brown-4 text-white rounded-borders shadow-7" style="max-width: 100%; height: 600px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="nombre"
          label="Su Nombre *"
          hint="Nombre y Apellido"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) ||
              'Por favor, escriba su Nombre Completo',
          ]"
        />

        <q-input
          filled
          v-model="orden"
          label="Su orden"
          hint="Lo que quiere pedir"
        />

        <q-toggle v-model="aceptar" label="Acepto los términos y condiciones" />

        <div>
          <q-btn label="Submit" type="submit" color="brown-1" text-color="brown-14" />

          <!-- Alerta pop up: INICIO -->
          <q-dialog v-model="dialog">
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar icon="new_releases" color="white" text-color="white" />
                <span class="q-mt-md col-12">Estimado(a): {{ nombre }}</span>
                <span class="q-mt-md col-12"
                  >Debes aceptar los términos y condiciones</span
                >
              </q-card-section>

              <!-- Notice v-close-popup -->
              <q-card-actions align="right">
                <q-btn flat label="Aceptar" color="brown-14" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
          <!-- Alerta pop up: FIN -->

          <q-btn
            label="Reset"
            type="reset"
            color="white"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      orden: "",
      aceptar: false,
      dialog: false,
      nodialog: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.aceptar !== true) {
        this.dialog = true;
        this.nodialog = false;
      } else {
        this.dialog = false;
        this.nodialog = true;
        alert("Su orden fue");
      }
    },
    onReset() {
      this.orden = "";
      this.nombre = "";
      this.aceptar = false;
      this.dialog = false;
      this.nodialog = false;
    },
  },
};
</script>

<style></style>
