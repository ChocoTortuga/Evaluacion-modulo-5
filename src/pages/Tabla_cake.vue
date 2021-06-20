<template>
  <q-page class="bg-brown-1" padding>
    <div
      class="col-12 text-center bg-white shadow-7 rounded-borders"
      rounded
      filled
    >
      <h1 class="text-h4 text-brown-14 q-pa-lg">Carta de pasteles</h1>
      <img
        class="bg-white rounded-borders"
        alt="Quasar logo"
        src="~assets/Torta.png"
        style="width: 350px; height: 250px"
      />

      <div class="q-pa-md">
        <q-table
          class="my-sticky-header-table bg-brown-3"
          :rows="rows"
          :columns="columns"
          row-key="name"
          flat
          bordered
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "description",
    align: "center",
    label: "Description",
    field: (row) => row.description,
    sortable: true,
  }
];

const rows = [
  {
    name: "Strawberry cake",
    description: "Strawberry cake is a crumbly bread made by strawberry."
  },
  {
    name: "Bulla cake",
    description: "Bulla cake is a rich Jamaican cake made with molasses and spiced with ginger and nutmeg."
  },
  {
    name: "Lemon cheesecake",
    description: "A cheesecake made of lemon"
  },
  {
    name: "Victoria Sponge",
    description: "Sponge cake with jam"
  },
  {
    name: "Carrot cake",
    description: "Bugs bunnys favourite"
  },
  {
    name: "Chocolate cake",
    description: "Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or sometimes both."
  },
  {
    name: "Apple cake",
    description: "Apple cake is a popular dessert produced with the main ingredient of apples."
  },
  {
    name: "Birthday cake",
    description: "A yearly treat"
  }
];

export default defineComponent({
  name: "PageIndex",

  setup() {
    return {
      columns,
      rows,
    };
  },
});
</script>

<style lang="scss">
.my-sticky-header-table {
  /* height or max-height is important */
  height: 410px;
  color: white;
}

.q-table__top,
.q-table__bottom,
thead tr:first-child th {
  /* bg color is important for th; just specify one */
  background-color:#38302c;
}

thead tr th {
  position: sticky;
  z-index: 1;
}

thead tr:first-child th {
  top: 0;
}

/* this is when the loading indicator appears */
.q-table--loading thead tr:last-child th {
  /* height of all previous header rows */
  top: 48px;
}
</style>
