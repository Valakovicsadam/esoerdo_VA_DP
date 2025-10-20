<script setup>

import { ref } from 'vue';
import { animals } from '../data/PlantsAndAnimals';
const allatok = ref(animals)


</script>

<template>
    <template>
        <section>
            <div class="gallery">
                <h1 class="title">Animals Gallery</h1>
                <div class="cards">
                    <div class="card" v-for="animal in allatok" :key="animal.name">
                    
                        <h2 class="card-title">{{ animal.name }}</h2>
                        <p class="card-description">{{ animal.description }}</p>
                    </div>
                </div>
            </div>
        </section>

    </template>
</template>
<style scoped>

.section {
   padding-top: 300px;
}


</style>
