<script setup>

import { ref, onMounted, onBeforeUnmount } from "vue";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { RainforestData } from "../data/RainforestData.js";
import { RainforestPlants } from '../data/RainforestPlants.js'

const plantData = new RainforestPlants()
const categories = ref([])
const activeCategory = ref(null)

onMounted(() => {
    categories.value = plantData.getCategories()
})

function toggleCategory(index) {
    activeCategory.value = activeCategory.value === index ? null : index
}


const mapContainer = ref(null);
const map = ref(null);
const selected = ref(null);
const query = ref("");


const rainforest = new RainforestData();

function resetView() {
    if (map.value) map.value.flyTo({ center: [0, 0], zoom: 2 });
}

function search() {
    const found = rainforest.findByName(query.value);
    if (found) {
        const bounds = new maplibregl.LngLatBounds();
        found.coordinates.forEach(([lng, lat]) => bounds.extend([lng, lat]));
        map.value.fitBounds(bounds, { padding: 50 });
        selected.value = found;
    } else {
        alert("Region not found");
    }
}

onMounted(() => {
    map.value = new maplibregl.Map({
        container: mapContainer.value,
        style: "https://demotiles.maplibre.org/style.json",
        center: [0, 0],
        zoom: 2,
    });

    map.value.on("load", () => {
        map.value.addSource("rainforests", {
            type: "geojson",
            data: rainforest.getGeoJSON(),
        });

        map.value.addLayer({
            id: "rainforest-fill",
            type: "fill",
            source: "rainforests",
            paint: { "fill-color": ["get", "color"], "fill-opacity": 0.5 },
        });

        map.value.addLayer({
            id: "rainforest-outline",
            type: "line",
            source: "rainforests",
            paint: { "line-color": "#000", "line-width": 1 },
        });

        map.value.on("click", "rainforest-fill", e => {
            const props = e.features[0].properties;
            props.countries = JSON.parse(props.countries || "[]");
            selected.value = props;
            map.value.flyTo({ center: e.lngLat, zoom: 4 });
        });

        map.value.on("mouseenter", "rainforest-fill", () => {
            map.value.getCanvas().style.cursor = "pointer";
        });
        map.value.on("mouseleave", "rainforest-fill", () => {
            map.value.getCanvas().style.cursor = "";
        });
    });
});

onBeforeUnmount(() => {
    if (map.value) {
        map.value.remove();
        map.value = null;
    }
});

</script>

<template>

    <section class="hero position-relative d-flex align-items-center justify-content-center text-center text-white">
        <div class="overlay position-absolute top-0 start-0 w-100 h-100"></div>

        <div class="herotext position-relative">
            <h3 class="display-4 fw-bold animate-fade-in">The Majestic Rainforest</h3>
            <p class="lead mt-3 animate-fade-in delay-1">
                Discover the world's most biodiverse ecosystems, home to millions of species and vital to our planet's
                health.
            </p>
        </div>
    </section>
    <section class="section" id="animals">
        <div class="aboutText">
            <h2>About our project</h2>
            <p>
                Rainforests are structured in distinct layers, each hosting unique communities of wildlife adapted to
                their
                specific environment
            </p>
        </div>
        <div class="container my-5">
            <div class="row justify-content-center gy-4">
                <div class="col-10 col-sm-8 col-md-6 col-lg-3 d-flex justify-content-center">
                    <div class="card w-100 text-center">
                        <a href="#mapSection">
                            <img src="../assets/mainpage/cards/map.jpg" class="card-img-top img-fluid" alt="Map"
                                title="Rainforest map of the world" />
                            <div class="card-body">
                                <strong>Interactive map</strong> <span class="tag d-block mb-2">Education</span>
                                <p class="mt-2">An Interactive way to learn about our Rainforests</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-10 col-sm-8 col-md-6 col-lg-3 d-flex justify-content-center">
                    <div class="card w-100 text-center">
                        <router-link to="/plantAndAnimals" class="links">
                            <img src="../assets/mainpage/cards/jaguar.jpg" class="card-img-top img-fluid"
                                alt="PlantsAndAnimals" title="PlantsAndAnimals" />
                            <div class="card-body">
                                <strong>Plants and animals</strong> <span class="tag d-block mb-2">Wildlife</span>
                                <p class="mt-2">Learn about the wildlife in the rainforests</p>
                            </div>
                        </router-link>
                    </div>
                </div>

                <div class="col-10 col-sm-8 col-md-6 col-lg-3 d-flex justify-content-center">
                    <div class="card w-100 text-center">
                        <router-link to="/quiz" class="links">
                            <img src="../assets/mainpage/cards/quiz.jpg" class="card-img-top img-fluid" alt="Quiz"
                                title="Quiz" />
                            <div class="card-body">
                                <strong>Quiz</strong> <span class="tag d-block mb-2">Brainstorm</span>
                                <p class="mt-2">A playful quiz for every age group</p>
                            </div>
                        </router-link>
                    </div>
                </div>

                <div class="col-10 col-sm-8 col-md-6 col-lg-3 d-flex justify-content-center">
                    <div class="card w-100 text-center">
                        <router-link to="/tips" class="links">
                            <img src="../assets/mainpage/cards/sustain.jpg" class="card-img-top img-fluid"
                                alt="Sustainability" title="Sustainability" />
                            <div class="card-body">
                                <strong>Sustainability tips</strong> <span class="tag d-block mb-2">Tips</span>
                                <p class="mt-2">Let's unite for the rainforests to save them</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="layers-container">
            <h4>Did you know?</h4>
            <div class="row d-flex">
                <div class="col-lg-4 facts">
                    <img class="fact-icon" src="../assets/mainpage/icons/jungle.png" alt="">
                    <p>Rainforests get a lot of rain – They can receive over 2,000 mm (80 inches) of rain each year!</p>
                </div>
                <div class="col-lg-4 facts">
                    <img class="fact-icon" src="../assets/mainpage/icons/sun.png" alt="">
                    <p>Home to half of all species – Although they cover only about 6% of Earth's surface, rainforests
                        are home to over 50% of the world’s plant and animal species.</p>
                </div>
                <div class="col-lg-4 facts">
                    <img class="fact-icon" src="../assets/mainpage/icons/temple.png" alt="">
                    <p>The Amazon is the largest – The Amazon Rainforest in South America is the largest rainforest in
                        the world, often called the "lungs of the Earth" because it produces so much oxygen.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="plants">
        <h2>Rainforest Plants & Vegetation</h2>
        <p>
            Rainforests contain over 50% of all plant species on Earth, with incredible diversity in every layer of the
            forest
        </p>
        <div class="cards-container">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src="../assets/mainpage/carousel/carousel1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="../assets/mainpage/carousel/carousel2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="../assets/mainpage/carousel/carousel3.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="../assets/mainpage/carousel/carousel4.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="../assets/mainpage/carousel/carousel5.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="../assets/mainpage/carousel/carousel6.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div class="map-section" id="mapSection">
            <div class="rainforest-map-wrap">
                <div class="controls">
                    <input v-model="query" placeholder="Search rainforest (e.g. Amazon)" @keyup.enter="search"
                        class="search" />
                    <button @click="resetView">Reset View</button>
                </div>

                <div ref="mapContainer" class="map"></div>

                <aside class="info-panel">
                    <h3>Rainforest Regions</h3>
                    <div v-if="selected">
                        <h4>{{ selected.name }}</h4>
                        <p><strong>Area:</strong> {{ selected.area_km2.toLocaleString() }} km²</p>
                        <p><strong>Countries:</strong> {{ selected.countries.join(', ') }}</p>
                        <p>{{ selected.description }}</p>
                        <p><a :href="selected.more" target="_blank">Learn more →</a></p>
                    </div>
                    <div v-else>
                        <p>Click a rainforest region to view its details.</p>
                    </div>
                </aside>
            </div>
        </div>

        <div class="accordion" id="rainforestAccordion">
            <div v-for="(category, catIndex) in categories" :key="catIndex" class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" :class="{ collapsed: activeCategory !== catIndex }" type="button"
                        @click="toggleCategory(catIndex)">
                        {{ category.name }}
                    </button>
                </h2>

                <div class="accordion-collapse collapse" :class="{ show: activeCategory === catIndex }">
                    <div class="accordion-body">
                        <div class="row justify-content-center gy-4">
                            <div v-for="(item, index) in category.items" :key="index"
                                class="col-10 col-sm-8 col-md-6 col-lg-4 d-flex justify-content-center">
                                <div class="card w-100 text-center">
                                    <div class="card-header">
                                        <strong>{{ item.name }}</strong>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="layers-container mt-3">
            <h4>Quick Facts</h4>
            <div class="row d-flex">
                <div class="col-lg-4 facts">
                    <img class="fact-icon" src="../assets/mainpage/icons/map.png" alt="">
                    <p><strong>Tropical Rainforests are mostly found near the Equator</strong>, in regions like the
                        Amazon Basin in South America, the Congo Basin in Africa, and Southeast Asia.</p>
                </div>
                <div class="col-lg-4 facts">
                    <img class="fact-icon" src="../assets/mainpage/icons/climate-change.png" alt="">
                    <p><strong>These forests have a hot, humid climate year-round</strong>, with average temperatures
                        between 20-30°C (68-86°F) and heavy rainfall often exceeding 2,000 mm (80 inches) annually.</p>
                </div>
                <div class="col-lg-4 facts">
                    <img class="fact-icon" src="../assets/mainpage/icons/humidity.png" alt="">
                    <p><strong>Rainforests play a crucial role in regulating the global climate</strong>, acting as
                        massive carbon sinks and influencing rainfall patterns locally and worldwide.</p>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
.map-section {
    margin-bottom: 20px;
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

html {
    scroll-behavior: smooth;
}

a {
    color: inherit;
    text-decoration: none;
}

.map-section {
    background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    margin-top: 2rem;
}

.rainforest-map-wrap {
    display: flex;
    gap: 1.5rem;
    height: 70vh;
    font-family: 'Inter', system-ui, sans-serif;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    overflow: hidden;
    position: relative;
}

.controls {
    position: absolute;
    z-index: 10;
    top: 15px;
    left: 15px;
    display: flex;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 8px 12px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    align-items: center;
}

.controls input {
    padding: 6px 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
    font-size: 14px;
    width: 180px;
    transition: 0.3s ease;
}

.controls input:focus {
    border-color: #4caf50;
    box-shadow: 0 0 4px #4caf5066;
}

.controls button {
    background: linear-gradient(135deg, #43a047, #2e7d32);
    border: none;
    color: white;
    font-weight: 600;
    border-radius: 8px;
    padding: 6px 12px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.controls button:hover {
    background: linear-gradient(135deg, #4caf50, #388e3c);
}

.map {
    flex: 1;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.info-panel {
    width: 28%;
    background: rgba(255, 255, 255, 0.95);
    padding: 1.2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
}

.info-panel h3 {
    margin-top: 0;
    font-size: 18px;
    border-bottom: 2px solid #4caf50;
    padding-bottom: 6px;
}

.info-panel h4 {
    margin: 0.5rem 0;
    color: #2e7d32;
}

.info-panel p {
    margin: 0.25rem 0;
    font-size: 14px;
    line-height: 1.5;
}

.info-panel a {
    color: #43a047;
    text-decoration: none;
    font-weight: 600;
}

.info-panel a:hover {
    text-decoration: underline;
}

@media (max-width: 900px) {
    .rainforest-map-wrap {
        flex-direction: column;
        height: 90vh;
    }

    .info-panel {
        width: 100%;
        height: auto;
        margin-top: 1rem;
    }
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    background-color: #e9f7f2;
    color: #333;
}

p {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.hero {
    background-image: url('../assets/mainpage/pexels-davidriano-975771.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.herotext {
    z-index: 2;
    max-width: 800px;
    padding: 0 20px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    opacity: 0;
    animation: fadeIn 1.2s ease forwards;
}

.delay-1 {
    animation-delay: 0.6s;
}

.d-flex {
    flex-wrap: wrap;
}

.facts {
    background-color: rgba(255, 255, 255, 0.7);
    margin: 10px;
    border-radius: 10px;
    text-align: center;
    padding: 20px;

    flex: 1 1 300px;
    max-width: 100%;
}

.fact-icon {
    width: 60px;
    height: 60px;
    display: block;
    margin: 0 auto 10px auto;
}

.section {
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
}

.aboutText {
    margin-bottom: 20px;
}

.section h2 {
    text-align: center;
}

.cards-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}

.card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.5s ease;
    margin: 10px;
}

.card:hover {
    box-shadow: 0 8px 16px rgb(0 0 0 / 0.5);
}

.card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
}

.card-content {
    padding: 10px;
    flex-grow: 1;
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

.layers-container {
    background: #afecd0;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}

.layers-container,
h4 {
    text-align: center;
}

.layer {
    flex: 1;
    min-width: 200px;
}

.layer a {
    color: #0c7b5f;
    text-decoration: none;
    font-weight: 600;
}

.carousel-inner img {
    height: 700px;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
}


.accordion-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
    background-color: #f5f5f5;
}

.card.mb-3 {
    background: white;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card.mb-3:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-header {
    background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
    padding: 1rem;
    font-weight: bold;
    color: #2e7d32;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.card-body {
    padding: 1rem;
    font-size: 14px;
    color: #444;
    flex-grow: 1;
}

.card-text {
    margin: 0;
    line-height: 1.6;
}

@media (max-width: 600px) {
    .accordion-body {
        grid-template-columns: 1fr;
    }
}
</style>
