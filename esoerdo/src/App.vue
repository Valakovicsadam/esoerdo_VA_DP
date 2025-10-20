<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { ref, onMounted, onBeforeUnmount } from "vue";

const showScrollTop = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
  showScrollTop.value = window.scrollY > 300;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});


</script>

<template>

  <Navbar />

  <main>
    <router-view></router-view>
    <transition name="fade">
      <button v-show="showScrollTop" @click="scrollToTop" class="scroll-top-btn" title="Back to top">
        ↑
      </button>
    </transition>
  </main>

  <Footer />

</template>

<style scoped>
main {
  background-color: #efefef;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.scroll-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, #43a047, #2e7d32);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
}

.scroll-top-btn:hover {
  background: linear-gradient(135deg, #4caf50, #388e3c);
  transform: translateY(-3px);
}
</style>
