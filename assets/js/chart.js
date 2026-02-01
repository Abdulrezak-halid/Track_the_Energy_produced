const ChartModule = (() => {
  let chartInstance = null;

  function renderChart(panelData) {
    const ctx = document.getElementById("energyChart");

    if (!ctx) {
      console.error("Chart canvas not found");
      return;
    }

    if (chartInstance) {
      chartInstance.destroy();
    }

    const labels = panelData.map((_, index) => `Panel ${index + 1}`);
    const data = panelData.map((panel) => panel.total);

    const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(52, 152, 219, 0.8)");
    gradient.addColorStop(1, "rgba(52, 152, 219, 0.2)");

    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Energy Production (kWh)",
            data: data,
            backgroundColor: gradient,
            borderColor: CONFIG.chart.defaultColor.border,
            borderWidth: 2,
            borderRadius: 8,
            hoverBackgroundColor: "rgba(52, 152, 219, 1)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              font: {
                family: "Poppins",
                size: 14,
              },
              padding: 20,
            },
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: 12,
            titleFont: {
              family: "Poppins",
              size: 14,
            },
            bodyFont: {
              family: "Poppins",
              size: 13,
            },
            callbacks: {
              label: function (context) {
                return `Production: ${context.parsed.y.toFixed(2)} kWh`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
            ticks: {
              font: {
                family: "Poppins",
                size: 12,
              },
              callback: function (value) {
                return value + " kWh";
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                family: "Poppins",
                size: 12,
              },
            },
          },
        },
        animation: {
          duration: 1000,
          easing: "easeInOutQuart",
        },
      },
    });
  }


  function getChart() {
    return chartInstance;
  }

  function destroy() {
    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null;
    }
  }

  return {
    render: renderChart,
    getChart: getChart,
    destroy: destroy,
  };
})();
