<template>
  <q-page class="bg-brown-1" padding>
    <div
      class="col-12 text-center bg-white shadow-7 rounded-borders"
      rounded
      filled
    >
      <h1 class="text-h4 text-brown-14 q-pa-lg">Carta de cafés</h1>
      <img
        class="bg-white rounded-borders"
        alt="Quasar logo"
        src="~assets/Cafe.png"
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
    name: "Affogato",
    description: "Is a shot of separately served espresso that is later poured over a the top of a scoop of vanilla ice cream or gelato."
  },
  {
    name: "Americano",
    description: "Also known as 'Lungo' or 'Long Black' and made by diluting 1-2 shots of espresso with hot water."
  },
  {
    name: "Babycino",
    description: "It consists of warm milk in a small cup and topped with milk froth and chocolate powder."
  },
  {
    name: "Latte",
    description: "A ‘premium milk coffee experience’. Freshly steamed milk without foam served in a tall glass with a shot of espresso coffee."
  },
  {
    name: "Mocha",
    description: "A combination of chocolate syrup and a shot of espresso, topped with steamed milk and a layer of micro-foam. Finished with a sprinkled of chocolate."
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
