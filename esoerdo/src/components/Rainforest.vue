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
                        <img src="../assets/mainpage/cards/map.jpg" alt="Map" title="Rainforest map of the world" />
                        <div class="card-content ">
                            <strong>Interactive map</strong> <span class="tag">Education</span>
                            <p class="mt-2">An Interactive way to learn about our Rainforests</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="../assets/mainpage/cards/jaguar.jpg" alt="Jaguar" title="Jaguar" />
                        <div class="card-content">
                            <strong>Plants and animals</strong> <span class="tag">Wildlife</span>
                            <p class="mt-2">Learn about the wildlife in the rainforests </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <router-link to="/quiz" class="links"> 
                        <img src="../assets/mainpage/cards/quiz.jpg" alt="Quiz" title="Quiz" />
                        <div class="card-content">
                            <strong>Quiz</strong> <span class="tag">Brainstorm</span>
                            <p class="mt-2">A playfull quiz for every age group</p>
                        </div>
                    </router-link>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card">
                        <img src="../assets/mainpage/cards/sustain.jpg" alt="Sus" title="Sustainability" />
                        <div class="card-content">
                            <strong>Sustainability tips</strong> <span class="tag">Tips</span>
                            <p class="mt-2">Let's unite for the rainforests to save them</p>
                        </div>
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

        <div class="tabs">
            <p class=" tab trees">
                <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1"
                    aria-expanded="false" aria-controls="collapseExample">
                    Trees
                </button>
            </p>
            <p class="tab flowers">
                <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2"
                    aria-expanded="false" aria-controls="collapseExample">
                    Flowers
                </button>
            </p>
            <p class=" gap-1 tab plants">
                <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3"
                    aria-expanded="false" aria-controls="collapseExample">
                    Plants
                </button>
            </p>
        </div>

        <div class="cards-container">
            <div class="card">
                <div class="collapse" id="collapseExample1">
                    <div class="card-body">
                        <h6>Kapok Tree</h6>
                        <p>The Kapok tree (Ceiba pentandra) is known for its towering height and large buttress roots
                            that help stabilize it in the shallow rainforest soil. It is mainly found in the tropical
                            rainforests of Central and South America. This tree provides habitat and food for many
                            animals.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="collapse" id="collapseExample1">
                    <div class=" card-body">
                        <h6>Mahogany</h6>
                        <p>Mahogany (Swietenia macrophylla) is prized for its durable and beautiful wood. It grows in
                            the rainforests of Central and South America. Due to heavy logging, conservation efforts are
                            important to protect this majestic species.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="collapse" id="collapseExample1">
                    <div class=" card-body">
                        <h6>Dipterocarp Trees</h6>
                        <p>Dipterocarp trees dominate the rainforests of Southeast Asia. These towering giants are known
                            for their massive size and hardwood timber. They play a crucial role in the forest canopy by
                            providing shelter and food for many creatures, and they influence the forest’s microclimate.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="cards-container">
            <div class="card">
                <div class="collapse" id="collapseExample2">
                    <div class=" card-body">
                        <h6>Rafflesia</h6>
                        <p>The Rafflesia flower is famous for producing the largest single bloom in the world. Found in
                            the rainforests of Southeast Asia, especially in Malaysia and Indonesia, this flower is also
                            known as the “corpse flower” because of its strong, unpleasant odor that attracts flies for
                            pollination.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="collapse" id="collapseExample2">
                    <div class=" card-body">
                        <h6>Heliconia</h6>
                        <p>Heliconia, often called “lobster claw” or “wild plantain,” is known for its bright, colorful
                            bracts that look like flowers. These plants grow in tropical rainforests across Central and
                            South America and provide food and shelter for hummingbirds and other pollinators.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="collapse" id="collapseExample2">
                    <div class=" card-body">
                        <h6>Passion Flower</h6>
                        <p>The Passion Flower grows in rainforests in Central and South America. It is admired for its
                            intricate and beautiful flowers, which have a unique structure that helps attract
                            pollinators like bees and butterflies. The fruit of some species is also edible.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="cards-container">
            <div class="card">
                <div class="collapse" id="collapseExample3">
                    <div class=" card-body">
                        <h6>Epiphytes</h6>
                        <p>Epiphytes are plants that grow on other plants, especially trees, without harming them.
                            Common in rainforests worldwide, they absorb moisture and nutrients from the air and rain.
                            Orchids and bromeliads are well-known examples of epiphytes.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="collapse" id="collapseExample3">
                    <div class=" card-body">
                        <h6>Ferns</h6>
                        <p>Ferns thrive in the humid, shaded environment of rainforests. They have been around for
                            millions of years and contribute to the forest’s undergrowth, helping to retain moisture and
                            provide habitat for small animals and insects.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="collapse" id="collapseExample3">
                    <div class=" card-body">
                        <h6>Bamboo</h6>
                        <p>Bamboo is a fast-growing plant found in many tropical rainforests, especially in Asia and
                            South America. It is important for the ecosystem as food and shelter for animals like pandas
                            and various insects, and it is also used by humans for construction and crafts</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="layers-container2 mt-3">
            <h4>Quick Facts</h4>
            <div class="row d-flex">
                <div class="col-lg-4 facts">
                    <img class="fact-icon" src="../assets/mainpage/icons/map.png" alt="">
                    <p><strong>Tropical Rainforests are mostly found near the Equator</strong>, in regions like the Amazon Basin in South America, the Congo Basin in Africa, and Southeast Asia.</p>
                </div>
                <div class="col-lg-4 facts">
                    <img class="fact-icon" src="../assets/mainpage/icons/climate-change.png" alt="">
                    <p><strong>These forests have a hot, humid climate year-round</strong>, with average temperatures between 20-30°C (68-86°F) and heavy rainfall often exceeding 2,000 mm (80 inches) annually.</p>
                </div>
                <div class="col-lg-4 facts">
                    <img class="fact-icon" src="../assets/mainpage/icons/humidity.png" alt="">
                    <p><strong>Rainforests play a crucial role in regulating the global climate</strong>, acting as massive carbon sinks and influencing rainfall patterns locally and worldwide.</p>
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
    background-image: url('../assets/mainpage/pexels-davidriano-975771.jpg');
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

.links {
  color: inherit !important;
  text-decoration: none !important;
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
    padding: 10px;
    flex-grow: 1;
}

.carousel-inner img {
    height: 700px;
    width: 1000px;
    object-fit: cover;
    border-radius: 20px;
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

.layers-container2 {
    background: #69b5789d;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}

.d-flex {
    flex-wrap: nowrap;
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

.tabs {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 20px 0;
}

.tab {
    background: #ffffff;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    user-select: none;
    transition: box-shadow 0.5s ease;
}

.tab:hover {
    box-shadow: 0 4px 8px rgb(0 0 0 / 0.5);
}

.tab.active {
    background: #d1e7e3;
    font-weight: 700;
}

.trees {
    background-color: #a5784c;

}

.flowers {
    background-color: #ee5d92;

}

.plants {
    background-color: #5FAD56;
}

.trees,
.flowers,
.plants {
    color: #fff;
    font-weight: bold;
}
</style>
