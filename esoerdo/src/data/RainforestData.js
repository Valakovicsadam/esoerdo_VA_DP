// src/data/RainforestData.js
export class RainforestData {
  constructor() {
    this.features = [
      {
        name: "Amazon Rainforest",
        area_km2: 5500000,
        countries: ["Brazil", "Peru", "Colombia", "Venezuela", "Ecuador", "Bolivia"],
        description: "World's largest tropical rainforest, covering much of the Amazon basin.",
        color: "#2E8B57",
        more: "https://en.wikipedia.org/wiki/Amazon_rainforest",
        coordinates: [
          [-74.0, -8.0],
          [-60.0, -8.0],
          [-50.0, -2.0],
          [-63.0, 0.0],
          [-68.0, 3.0],
          [-74.0, -2.0],
          [-74.0, -8.0],
        ],
      },
      {
        name: "Congo Basin",
        area_km2: 3700000,
        countries: ["DRC", "Congo", "Cameroon", "Gabon"],
        description: "Second-largest tropical rainforest, located in Central Africa.",
        color: "#228B22",
        more: "https://en.wikipedia.org/wiki/Congo_Basin",
        coordinates: [
          [12.0, 5.0],
          [30.0, 5.0],
          [30.0, -5.0],
          [15.0, -5.0],
          [12.0, 5.0],
        ],
      },
      {
        name: "Southeast Asian Rainforests",
        area_km2: 2000000,
        countries: ["Indonesia", "Malaysia", "Thailand"],
        description: "Includes Sundaland, Borneo, Sumatra and other islands with high biodiversity.",
        color: "#006400",
        coordinates: [
          [95.0, 10.0],
          [125.0, 10.0],
          [125.0, -10.0],
          [95.0, -10.0],
          [95.0, 10.0],
        ],
      },
      {
        name: "New Guinea Rainforests",
        area_km2: 780000,
        countries: ["Papua New Guinea", "Indonesia"],
        description: "High endemism and unique fauna on the island of New Guinea.",
        color: "#2F4F4F",
        coordinates: [
          [140.0, 2.0],
          [155.0, 2.0],
          [155.0, -10.0],
          [140.0, -10.0],
          [140.0, 2.0],
        ],
      },
    ];
  }

  // Get GeoJSON formatted for MapLibre
  getGeoJSON() {
    return {
      type: "FeatureCollection",
      features: this.features.map(f => ({
        type: "Feature",
        properties: {
          name: f.name,
          area_km2: f.area_km2,
          countries: f.countries,
          description: f.description,
          color: f.color,
          more: f.more,
        },
        geometry: {
          type: "Polygon",
          coordinates: [f.coordinates],
        },
      })),
    };
  }

  // Search by name
  findByName(query) {
    const q = query.trim().toLowerCase();
    return this.features.find(f => f.name.toLowerCase().includes(q));
  }
}
