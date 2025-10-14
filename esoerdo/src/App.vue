<script setup>
import Rainforest from './components/Rainforest.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Quiz from './components/Quiz.vue';

</script>

<template>

  <Navbar />
  <main>
    <Rainforest />
    <Quiz />
  </main>

  <Footer />
</template>

<style scoped>

main {
  background-color: #efefef;
}

</style>
