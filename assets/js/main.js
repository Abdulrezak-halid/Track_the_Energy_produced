(async function () {
  "use strict";

  async function init() {
    try {
      console.log("Initializing Solar Energy Monitor...");

      showLoadingState();

      const [weatherData, panelData] = await Promise.all([
        WeatherModule.fetch(),
        PanelDataModule.fetch(),
      ]);

      if (panelData) {
        ChartModule.render(PanelDataModule.getData());
      }

      hideLoadingState();

      console.log("Application initialized successfully");
    } catch (error) {
      console.error("Error initializing application:", error);
      showErrorState();
    }
  }

  function showLoadingState() {
    console.log("Loading data...");
  }

  function hideLoadingState() {
    console.log("Data loaded");
  }

  function showErrorState() {
    console.error("Failed to initialize application");
  }

  function setupAutoRefresh() {
    const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes

    setInterval(async () => {
      console.log("Auto-refreshing data...");
      await WeatherModule.fetch();
      await PanelDataModule.fetch();
      ChartModule.render(PanelDataModule.getData());
    }, REFRESH_INTERVAL);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // setupAutoRefresh();
})();
