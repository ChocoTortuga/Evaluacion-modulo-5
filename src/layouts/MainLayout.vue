<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-brown-14 text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-h4 text-center my-font"> Cafetería Sin imaginación </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      show-if-above
      class="bg-brown-2 shadow-7"
    >
      <q-list class="q-pa-md text-white">

        <div class="col-12 q-pa-sm">
          <q-btn
            to="/"
            title="Home"
            color="brown-14"
            text-color="white"
            size="20px"
            square
            unelevated
            no-caps
          >
          <q-icon name="store" />
          <div>Inicio</div>
          </q-btn>
        </div>

        <div class="col-12 q-pa-sm">
          <q-btn
            to="/cafe"
            color="brown-14"
            text-color="white"
            size="20px"
            square
            unelevated
            no-caps
          >
          <q-icon name="coffee" />
          <div>Cafés</div>
          </q-btn>
        </div>

        <div class="col-12 q-pa-sm">
          <q-btn
            to="/pasteles"
            class="q-btn"
            color="brown-14"
            text-color="white"
            size="20px"
            square
            unelevated
            no-caps
          >
          <q-icon name="cake" />
          <div>Pasteles</div>
          </q-btn>
        </div>

        <div class="col-12 q-pa-sm">
          <q-btn
            to="/tienda"
            class="q-btn"
            color="brown-14"
            text-color="white"
            size="20px"
            square
            unelevated
            no-caps
          >
          <q-icon name="storefront" />
          <div>Pedir</div>
          </q-btn>
        </div>
      </q-list>
    </q-drawer>

    <q-footer class="bg-brown-14 text-white text-center">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle1">
          <q-avatar>
          </q-avatar>
          Copyright 2021
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Vanessa Godoy",
    caption: "Animadora digital",
    icon: "extension",
    link: "https://vimeo.com/504597696",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style></style>
