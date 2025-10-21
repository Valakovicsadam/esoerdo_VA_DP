
export class RainforestTipsData {
  constructor() {
    this.tips = [
      {
        title: "Reduce Paper & Wood Consumption",
        desc: "Buy recycled paper and certified wood products (like FSC). Each ton of recycled paper saves 17 trees!",
        icon:  new URL('../assets/tipsicons/deforestation.png', import.meta.url).href,
        tag: "Sustainability",
      },
      {
        title: "Support Sustainable Brands",
        desc: "Choose products that are sustainably sourced — especially coffee, chocolate, and palm oil alternatives.",
        icon:  new URL('../assets/tipsicons/recycle-sign.png', import.meta.url).href,
        tag: "Consumer Awareness",
      },
      {
        title: "Plant a Tree",
        desc: "Join reforestation programs or plant native trees in your community to offset carbon and restore ecosystems.",
        icon:  new URL('../assets/tipsicons/plant.png', import.meta.url).href,
        tag: "Action",
      },
      {
        title: "Reduce Meat Consumption",
        desc: "Livestock farming drives deforestation. Eating less meat lowers the pressure on rainforest land.",
        icon:  new URL('../assets/tipsicons/eating.png', import.meta.url).href,
        tag: "Lifestyle",
      },
      {
        title: "Donate or Volunteer",
        desc: "Support rainforest charities such as Rainforest Alliance, WWF, or Cool Earth. Small actions make a big impact!",
        icon:  new URL('../assets/tipsicons/public-relation.png', import.meta.url).href,
        tag: "Community",
      },
      {
        title: "Spread Awareness",
        desc: "Share information about rainforest conservation on social media or in your school. Education is powerful.",
        icon:  new URL('../assets/tipsicons/altruism.png', import.meta.url).href,
        tag: "Education",
      },
    ];
  }

  getAll() {
    return this.tips;
  }

  findByTag(tag) {
    return this.tips.filter(t => t.tag.toLowerCase() === tag.toLowerCase());
  }
}
