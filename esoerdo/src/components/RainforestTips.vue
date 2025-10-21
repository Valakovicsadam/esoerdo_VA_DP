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
  overflow: hidden;
  animation: heroBackgroundShift 20s ease-in-out infinite alternate;
}

@keyframes heroBackgroundShift {
  0% {
    background-position: center top;
    filter: brightness(1);
  }
  50% {
    background-position: center bottom;
    filter: brightness(1.1);
  }
  100% {
    background-position: center top;
    filter: brightness(1);
  }
}

.herotext {
  background-color: rgba(255, 255, 255, 0.85);
  color: #000;
  border-radius: 30px;
  padding: 30px 40px;
  max-width: 600px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  transform: translateY(-20px);
  animation: fadeSlideIn 1.2s ease forwards;
  opacity: 0;
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  animation: fadeInUp 1.5s ease forwards;
  opacity: 0;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
}

.card {
  position: relative;
  background: linear-gradient(145deg, #ffffff, #e6f0e9);
  border-radius: 16px;
  overflow: hidden;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  transition: box-shadow 0.4s ease, transform 0.4s ease;
  cursor: pointer;
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
  animation: popIn 0.8s ease forwards;
  opacity: 0;
  will-change: transform;
}

.card:hover {
  box-shadow: 0 15px 30px rgba(34, 139, 34, 0.4);
  transform: scale(1.05) translateY(-10px);
  background: linear-gradient(145deg, #d4f1d4, #a1d99a);
}

.tip-icon {
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 8px rgba(102, 187, 106, 0.7));
  transition: filter 0.3s ease;
}

.card:hover .tip-icon {
  filter: drop-shadow(0 0 20px rgba(56, 142, 60, 0.9));
}

.card-content {
  text-align: center;
  user-select: none;
}

.tag {
  background-color: #a5d6a7;
  border-radius: 14px;
  padding: 5px 14px;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  display: inline-block;
  margin-left: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.layer-section {
  background: linear-gradient(135deg, #66bb6a, #a5d6a7);
  color: #fff;
  border-radius: 20px;
  padding: 40px 50px;
  margin: 60px auto;
  max-width: 1000px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  animation: slideUpFadeIn 2s ease forwards;
  opacity: 0;
  font-weight: 600;
  letter-spacing: 0.03em;
  font-size: 1.1rem;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from {
    opacity: 0;
    transform: translateY(20px);
  }
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.85);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideUpFadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  pointer-events: none;
  background: radial-gradient(circle, rgba(102,187,106,0.2) 10%, transparent 40%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.card:hover::after {
  opacity: 1;
  animation: ripplePulse 1.4s infinite;
}

@keyframes ripplePulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
}
</style>
