<script setup>

</script>

<template>

    <section class="hero">
        <div class="herotext">
            <h3>The Majestic Rainforest</h3>
            <p>Discover the world's most biodiverse ecosystems, home to millions of species and vital to our planet's
                health</p>
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
        <div class="cards-container d-flex">
            <div class="row kartyak">
                <div class="col-lg-3">
                    <div class="card">
                        <img src="../assets/map.jpg" alt="Map" title="Rainforest map of the world" />
                        <div class="card-content">
                            <strong>Interactive map</strong> <span class="tag">Education</span>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="../assets/jaguar.jpg" alt="Jaguar" title="Jaguar" />
                        <div class="card-content">
                            <strong>Plants and animals</strong> <span class="tag">Education</span>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="../assets/quiz.jpg" alt="Quiz" title="Quiz" />
                        <div class="card-content">
                            <strong>Quiz</strong> <span class="tag">Canopy</span>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="../assets/sustain.jpg" alt="Sus" title="Sustainability" />
                        <div class="card-content">
                            <strong>Sustainability tips</strong> <span class="tag">Canopy</span>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
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
        <p>
            Rainforests contain over 50% of all plant species on Earth, with incredible diversity in every layer of the
            forest
        </p>
        <div class="cards-container">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="...">
                    </div>
                </div>
            </div>
        </div>

        <div class="tabs">
            <div class="tab">Trees</div>
            <div class="tab">Flowers</div>
            <div class="tab">Plants</div>
        </div>

        <div class="cards-container">
            <div class="card">
                <div class="card-content">
                    <a href="#">Kapok Tree</a>
                    <p>A massive emergent tree that can grow up to 200 feet tall, with a trunk up to 10 feet in
                        diameter.</p>
                    <p>Produces seed pods with cotton-like fibers used by animals for nesting</p>
                </div>
            </div>

            <div class="card">
                <div class="card-content">
                    <a>Rubber Tree</a>
                    <p>Native to the Amazon, this tree produces latex which is harvested to make natural rubber.</p>
                    <p>Can live up to 100 years and grows to about 100 feet tall</p>
                </div>
            </div>

            <div class="card">
                <div class="card-content">
                    <a>Strangler Fig</a>
                    <p>Begins life as an epiphyte in the canopy, sending roots down that eventually surround and
                        'strangle' the host tree.</p>
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

p {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.pics {
    border-radius: 12px;
    max-width: 48%;
    margin: 0 1%;
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

.herotext {
    background-color: rgba(255, 255, 255, 0.7);
    color: #000;
    border-radius: 20px;
    padding: 10px;
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
}

.card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    max-width: 280px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.5s ease;
}

.card:hover {

    box-shadow: 0 8px 16px rgb(0 0 0 / 0.5);
}

.kartyak {
    padding-bottom: 20px;
}

.card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
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
    background: #ebfcf4;
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
