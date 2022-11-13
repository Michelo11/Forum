<script setup>
import { RouterView } from "vue-router";
import Leftbar from "./components/Leftbar.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="flex">
    <Leftbar />
    <RouterView />
  </div>
</template>
