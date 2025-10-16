<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


</script>

<template>

  <Navbar />

  <main>
    <router-view></router-view>
  </main>

  <Footer />
  
  </template>

<style scoped>

main {
  background-color: #efefef;
}

</style>
