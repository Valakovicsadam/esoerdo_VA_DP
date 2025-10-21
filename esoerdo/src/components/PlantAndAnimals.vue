<script setup>
import { ref, computed } from 'vue';
import { rainforest } from '../data/PlantsAndAnimals.js';

const openWikipedia = (name) => {
  const wikiName = encodeURIComponent(name.replace(/\s+/g, '_'));
  const wikiUrl = `https://en.wikipedia.org/wiki/${wikiName}`;
  window.open(wikiUrl, '_blank');
};

const which = ref(1);
const search = ref("");

const filteredItems = computed(() => {
  const term = search.value.trim().toLowerCase();

  if (which.value === 1) {
    if (!term) return rainforest.animals;
    return rainforest.animals.filter(animal =>
      animal.name.toLowerCase().includes(term)
    );
  } else if (which.value === -1) {
    if (!term) return rainforest.plants;
    return rainforest.plants.filter(plant =>
      plant.name.toLowerCase().includes(term)
    );
  }
  return [];
});

const showAnimals = () => {
  which.value = 1;
  search.value = ""; 
}

const showPlants = () => {
  which.value = -1;
  search.value = "";
}
</script>

<template>
  <div class="container">
    <h1 class="title">Plants and Animals</h1>

    <div class="button-group">
      <button :class="which === 1 ? 'btn-active' : 'btn-passive'" @click="showAnimals">Animals</button>
      <button :class="which === -1 ? 'btn-active' : 'btn-passive'" @click="showPlants">Plants</button>
    </div>

    <input
      type="text"
      class="search-bar"
      placeholder="search"
      v-model="search"
    />

    <transition-group name="fade" tag="div" class="entry-list">
      <div
        v-for="item in filteredItems"
        :key="item.name"
        class="entry"
        @click="openWikipedia(item.name)"
        role="button"
        tabindex="0"
        @keyup.enter="openWikipedia(item.name)"
      >
        <img :src="item.imageUrl" :alt="item.name" />
        <div class="info">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <button class="info-btn" @click.stop="openWikipedia(item.name)">More info</button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

.container {
  max-width: 100%;
  margin: 60px auto;
  padding: 4rem 3rem;
  background: linear-gradient(to bottom right, #1b3a2e, #2f4f3f);
  border-radius: 32px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  font-family: 'Segoe UI', sans-serif;
  color: #e6fffa;
}

.title {
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  color: #a0d9b4;
  margin-bottom: 2rem;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.btn-active, .btn-passive {
  padding: 1rem 2.5rem;
  border-radius: 40px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-active {
  background-color: #38a169;
  color: #f0fdf4;
  border: none;
  box-shadow: 0 6px 20px rgba(56, 161, 105, 0.4);
}
.btn-active:hover {
  background-color: #2f855a;
  transform: scale(1.05);
}

.btn-passive {
  background-color: transparent;
  color: #a0d9b4;
  border: 2px solid #a0d9b4;
}
.btn-passive:hover {
  background-color: #a0d9b4;
  color: #1b3a2e;
  transform: scale(1.05);
}

.search-bar {
  display: block;
  margin: 0 auto 3rem;
  max-width: 600px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 40px;
  border: 2px solid #38a169;
  background-color: #2f4f3f;
  color: #e6fffa;
}
.search-bar::placeholder {
  color: #a0d9b4;
}
.search-bar:focus {
  outline: none;
  box-shadow: 0 0 16px rgba(56, 161, 105, 0.5);
}

.entry-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.entry {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background-color: #264d3c;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.6s ease forwards;
  transition: transform 0.3s ease;
}
.entry:hover {
  transform: translateY(-6px) scale(1.01);
}

.entry img {
  width: 360px;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease;
  background-color: #1b3a2e;
}
.entry:hover img {
  transform: scale(1.08);
  filter: brightness(1.15);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #a0d9b4;
  margin-bottom: 1rem;
}

.info p {
  font-size: 1.2rem;
  color: #e6fffa;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.info-btn {
  align-self: flex-start;
  background-color: #38a169;
  color: #f0fdf4;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}
.info-btn:hover {
  background-color: #2f855a;
  color: #e6fffa;
}

@media (max-width: 768px) {
  .entry {
    flex-direction: column;
    align-items: center;
  }

  .entry img {
    width: 100%;
    max-width: 360px;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 20px;
    background-color: #1b3a2e;
  }

  .info {
    align-items: center;
    text-align: center;
  }
}
</style>
