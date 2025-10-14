<script setup>

</script>

<template>

<section class="hero">
        <h3>The Majestic Rainforest</h3>
        <p>Discover the world's most biodiverse ecosystems, home to millions of species and vital to our planet's health</p>
    </section>

    <section class="section" id="animals">
        <h2>Rainforest Animals & Their Habitats</h2>
        <p style="text-align:center; max-width: 600px; margin: 0 auto;">
            Rainforests are structured in distinct layers, each hosting unique communities of wildlife adapted to their specific environment
        </p>
        <div class="cards-container">
            <div class="card">
                <img src="../assets/jaguar.jpg" alt="Jaguar" />
                <div class="card-content">
                    <strong>Jaguar</strong> <span class="tag">Multiple Layers</span>
                    <p>Forest Floor & Canopy</p>
                    <p>The largest cat in the Americas, jaguars are powerful predators that hunt on the forest floor and are excellent swimmers.</p>
                </div>
            </div>

            <div class="card">
                <img src="../assets/dart_frog.jpg" alt="Poison Dart Frog" />
                <div class="card-content">
                    <strong>Poison Dart Frog</strong> <span class="tag">Understory</span>
                    <p>Forest Floor</p>
                    <p>These brightly colored amphibians secrete toxins through their skin and are found among leaf litter and low vegetation.</p>
                </div>
            </div>

            <div class="card">
                <img src="../assets/toucan.webp" alt="Toucan" />
                <div class="card-content">
                    <strong>Toucan</strong> <span class="tag">Canopy</span>
                    <p>Canopy</p>
                    <p>Known for their large, colorful beaks, toucans live high in the canopy and feed on fruits, insects, and small reptiles.</p>
                </div>
            </div>

            <div class="card">
                <img src="../assets/sloth.jpeg" alt="Sloth" />
                <div class="card-content">
                    <strong>Sloth</strong> <span class="tag">Canopy</span>
                    <p>Canopy</p>
                    <p>Slow-moving mammals that spend most of their lives hanging from tree branches, coming down only once a week.</p>
                </div>
            </div>
        </div>

        <div class="layers-container">
            <div class="layer">
                <a href="#">Emergent Layer</a>
                <p>Tallest trees reaching 60m, home to eagles, butterflies, and monkeys</p>
            </div>
            <div class="layer">
                <a href="#">Canopy</a>
                <p>Dense ceiling of branches, most animals live here including birds, snakes, and primates</p>
            </div>
            <div class="layer">
                <a href="#">Understory</a>
                <p>Shaded layer with smaller trees and plants, home to frogs, insects, and small mammals</p>
            </div>
            <div class="layer">
                <a href="#">Forest Floor</a>
                <p>Dark, damp ground layer with decomposing matter, inhabited by jaguars, tapirs, and insects</p>
            </div>
        </div>
    </section>

    <section class="section" id="plants">
        <h2>Rainforest Plants & Vegetation</h2>
        <p style="text-align:center; max-width: 600px; margin: 0 auto;">
            Rainforests contain over 50% of all plant species on Earth, with incredible diversity in every layer of the forest
        </p>
        <div class="cards-container">
            <img src="../assets/leaf.png" alt="Kapok Tree" style="border-radius: 12px; max-width: 48%; margin: 0 1%;" />
            <img src="../assets/hibiscus.jpeg" alt="Hibiscus" style="border-radius: 12px; max-width: 48%; margin: 0 1%;" />
        </div>

        <div class="tabs">
            <div class="tab active">Trees</div>
            <div class="tab">Flowers</div>
            <div class="tab">Plants</div>
        </div>

        <div class="cards-container">
            <div class="card">
                <div class="card-content">
                    <a href="#">Kapok Tree</a>
                    <p>A massive emergent tree that can grow up to 200 feet tall, with a trunk up to 10 feet in diameter.</p>
                    <p>Produces seed pods with cotton-like fibers used by animals for nesting</p>
                </div>
            </div>

            <div class="card">
                <div class="card-content">
                    <a href="#">Rubber Tree</a>
                    <p>Native to the Amazon, this tree produces latex which is harvested to make natural rubber.</p>
                    <p>Can live up to 100 years and grows to about 100 feet tall</p>
                </div>
            </div>

            <div class="card">
                <div class="card-content">
                    <a href="#">Strangler Fig</a>
                    <p>Begins life as an epiphyte in the canopy, sending roots down that eventually surround and 'strangle' the host tree.</p>
                    <p>Provides food for many rainforest animals year-round</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #e9f7f2;
            color: #333;
        }
        .hero {
            background-image: url('../assets/pexels-davidriano-975771.jpg');
            background-size: cover;
            background-position: center;
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            text-align: center;
            padding: 0 20px;
        }
        .section {
            max-width: 1200px;
            margin: 40px auto;
            padding: 20px;
        }
        .section h2 {
            text-align: center;
        }
        .cards-container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
            overflow: hidden;
            max-width: 280px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .card img {
            width: 100%;
            display: block;
        }
        .card-content {
            padding: 16px;
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
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
            padding: 20px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
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
        .tabs {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin: 20px 0;
        }
        .tab {
            background: #f0f0f0;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            user-select: none;
        }
        .tab.active {
            background: #d1e7e3;
            font-weight: 700;
        }
</style>
