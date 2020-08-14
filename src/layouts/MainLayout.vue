<template>
  <q-layout view="lHh LpR fff">
    <q-header class="bg-white text-primary">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          {{ toolbar_title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <Drawer />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Drawer from "components/Drawer";
import { mapState } from "vuex";
export default {
  components: { Drawer },
  data() {
    return {
      left: false
    };
  },
  computed: {
    ...mapState("common", ["toolbar_title"])
  }
};
</script>
