<script setup>
import { ref } from "vue";
import { RainforestTipsData } from "../data/RainforestTipsData.js";

const tipsData = new RainforestTipsData();
const tips = ref(tipsData.getAll());
</script>

<template>
  <section class="hero">
    <div class="herotext">
      <h3>Save the Rainforests</h3>
      <p>
        Small actions lead to big change — learn how you can help protect the
        world’s most vital ecosystems.
      </p>
    </div>
  </section>

  <section class="section tips-section">
    <h2>Simple Ways to Make a Difference</h2>
    <p>
      Everyone can play a part in saving the rainforests — whether through
      lifestyle changes, education, or community action.
    </p>

    <div class="cards-container">
      <div v-for="(tip, i) in tips" :key="i" class="card">
        <img :src="tip.icon" :alt="tip.title" class="tip-icon" />
        <div class="card-content">
          <strong>{{ tip.title }}</strong>
          <span class="tag">{{ tip.tag }}</span>
          <p class="mt-2">{{ tip.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="layer-section">
    <h4>Together for a Greener Future</h4>
    <p>
      Protecting rainforests isn’t just about trees — it’s about people,
      wildlife, and the climate. Your choices matter every day.
    </p>
  </section>
</template>

<style scoped>
.hero {
  background-image: url("../assets/mainpage/pexels-davidriano-975771.jpg");
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
}

.herotext {
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  border-radius: 20px;
  padding: 20px 30px;
  max-width: 600px;
}

.section {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: box-shadow 0.5s ease;
}

.card:hover {
  box-shadow: 0 8px 16px rgb(0 0 0 / 0.2);
}

.tip-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
}

.card-content {
  text-align: center;
}

.tag {
  background-color: #dfe6eb;
  border-radius: 10px;
  padding: 3px 8px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
  margin-left: 10px;
}

.layer-section {
  background: linear-gradient(135deg, #a5d6a7, #66bb6a);
  color: #fff;
  border-radius: 12px;
  padding: 30px;
  margin: 40px auto;
  max-width: 1000px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
