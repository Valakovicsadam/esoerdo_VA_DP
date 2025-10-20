export class RainforestPlants {
  constructor() {
    this.categories = [
      {
        name: "Trees",
        items: [
          {
            name: "Kapok Tree",
            description: "The Kapok tree (Ceiba pentandra) is known for its towering height and large buttress roots that help stabilize it in the shallow rainforest soil. It is mainly found in the tropical rainforests of Central and South America. This tree provides habitat and food for many animals."
          },
          {
            name: "Mahogany",
            description: "Mahogany (Swietenia macrophylla) is prized for its durable and beautiful wood. It grows in the rainforests of Central and South America. Due to heavy logging, conservation efforts are important to protect this majestic species."
          },
          {
            name: "Dipterocarp Trees",
            description: "Dipterocarp trees dominate the rainforests of Southeast Asia. These towering giants are known for their massive size and hardwood timber. They play a crucial role in the forest canopy by providing shelter and food for many creatures, and they influence the forest’s microclimate."
          }
        ]
      },
      {
        name: "Flowers",
        items: [
          {
            name: "Rafflesia",
            description: "The Rafflesia flower is famous for producing the largest single bloom in the world. Found in the rainforests of Southeast Asia, especially in Malaysia and Indonesia, this flower is also known as the “corpse flower” because of its strong, unpleasant odor that attracts flies for pollination."
          },
          {
            name: "Heliconia",
            description: "Heliconia, often called “lobster claw” or “wild plantain,” is known for its bright, colorful bracts that look like flowers. These plants grow in tropical rainforests across Central and South America and provide food and shelter for hummingbirds and other pollinators."
          },
          {
            name: "Passion Flower",
            description: "The Passion Flower grows in rainforests in Central and South America. It is admired for its intricate and beautiful flowers, which have a unique structure that helps attract pollinators like bees and butterflies. The fruit of some species is also edible."
          }
        ]
      },
      {
        name: "Plants",
        items: [
          {
            name: "Epiphytes",
            description: "Epiphytes are plants that grow on other plants, especially trees, without harming them. Common in rainforests worldwide, they absorb moisture and nutrients from the air and rain. Orchids and bromeliads are well-known examples of epiphytes."
          },
          {
            name: "Ferns",
            description: "Ferns thrive in the humid, shaded environment of rainforests. They have been around for millions of years and contribute to the forest’s undergrowth, helping to retain moisture and provide habitat for small animals and insects."
          },
          {
            name: "Bamboo",
            description: "Bamboo is a fast-growing plant found in many tropical rainforests, especially in Asia and South America. It is important for the ecosystem as food and shelter for animals like pandas and various insects, and it is also used by humans for construction and crafts."
          }
        ]
      }
    ];
  }

  getCategories() {
    return this.categories;
  }

  getCategoryByName(name) {
    return this.categories.find(c => c.name.toLowerCase() === name.toLowerCase());
  }
}
