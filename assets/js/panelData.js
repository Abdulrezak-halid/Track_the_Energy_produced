const PanelDataModule = (() => {
  let panelData = [];
  let totalEnergy = 0;

  async function fetchPanelData() {
    try {
      const response = await fetch(CONFIG.data.csvPath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const csvText = await response.text();
      processPanelData(csvText);
      displayPanelData();
      updateStatistics();
      return panelData;
    } catch (error) {
      console.error("Error fetching panel data:", error);
      displayPanelError();
      return null;
    }
  }

  function processPanelData(csvText) {
    panelData = Array.from({ length: CONFIG.panels.count }, () => []);

    const rows = csvText.split("\n").slice(1); // Skip header row

    rows.forEach((row) => {
      const cols = row.split(",");

      if (cols.length > 5) {
        const sourceKey = cols[2]?.trim();
        const energyProduced = parseFloat(cols[5]);

        const panelIndex = CONFIG.panels.sourceKeyMapping[sourceKey];

        if (
          panelIndex >= 0 &&
          panelIndex < CONFIG.panels.count &&
          !isNaN(energyProduced)
        ) {
          panelData[panelIndex].push(energyProduced);
        }
      }
    });

    panelData = panelData.map((data) => ({
      values: data,
      total: data.reduce((a, b) => a + b, 0),
      average:
        data.length > 0 ? data.reduce((a, b) => a + b, 0) / data.length : 0,
      count: data.length,
    }));

    totalEnergy = panelData.reduce((sum, panel) => sum + panel.total, 0);
  }

  function displayPanelData() {
    const container = document.getElementById("panelDataList");

    container.innerHTML = panelData
      .map(
        (panel, index) => `
            <div class="panel-item">
                <div class="panel-header">
                    <div class="panel-icon">
                        <i class="fas fa-solar-panel"></i>
                    </div>
                    <h3>Panel ${index + 1}</h3>
                </div>
                <div class="panel-stats">
                    <div class="panel-stat">
                        <span class="stat-label">Total Production</span>
                        <span class="stat-value">${panel.total.toFixed(2)} kWh</span>
                    </div>
                    <div class="panel-stat">
                        <span class="stat-label">Average</span>
                        <span class="stat-value">${panel.average.toFixed(2)} kWh</span>
                    </div>
                    <div class="panel-stat">
                        <span class="stat-label">Data Points</span>
                        <span class="stat-value">${panel.count}</span>
                    </div>
                </div>
                <div class="panel-progress">
                    <div class="progress-bar" style="width: ${getProgressWidth(panel.total)}%"></div>
                </div>
            </div>
        `,
      )
      .join("");
  }

  function getProgressWidth(total) {
    const maxTotal = Math.max(...panelData.map((p) => p.total));
    return maxTotal > 0 ? (total / maxTotal) * 100 : 0;
  }

  function displayPanelError() {
    const container = document.getElementById("panelDataList");
    container.innerHTML = `
            <div class="error-container">
                <i class="fas fa-exclamation-circle fa-3x"></i>
                <p>Unable to load panel data</p>
            </div>
        `;
  }

  function updateStatistics() {
    document.getElementById("totalEnergy").textContent = totalEnergy.toFixed(2);

    const avgProduction =
      panelData.length > 0 ? totalEnergy / panelData.length : 0;
    document.getElementById("avgProduction").textContent =
      avgProduction.toFixed(2);

    const activePanels = panelData.filter((p) => p.total > 0).length;
    document.getElementById("activePanels").textContent = activePanels;
  }

  function getData() {
    return panelData;
  }

  function getTotalEnergy() {
    return totalEnergy;
  }

  return {
    fetch: fetchPanelData,
    getData: getData,
    getTotalEnergy: getTotalEnergy,
  };
})();
