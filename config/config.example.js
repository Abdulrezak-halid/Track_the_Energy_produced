const CONFIG = {
  weather: {
    apiKey: "txJxczB798Mj2mW0Zsd4RQ==3bah5Kwo7JkALuhb",
    apiUrl: "https://api.api-ninjas.com/v1/weather",
    city: "Mersin",
  },

  data: {
    csvPath: "assets/data/Plant_1_Generation_Data.csv",
  },

  panels: {
    count: 6,
    sourceKeyMapping: {
      "1BY6WEcLGh8j5v7": 0,
      "1IF53ai7Xc0U56Y": 1,
      "3PZuoBAID5Wc2HD": 2,
      "7JYdWkrLSPkdwr4": 3,
      McdE0feGgRqW7Ca: 4,
      VHMLBKoKgIrUVDU: 5,
    },
  },

  chart: {
    defaultColor: {
      background: "rgba(52, 152, 219, 0.2)",
      border: "rgba(52, 152, 219, 1)",
    },
  },
};

Object.freeze(CONFIG);
