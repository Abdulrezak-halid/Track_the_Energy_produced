document.addEventListener("DOMContentLoaded", function () {
    const weatherApiKey = 'txJxczB798Mj2mW0Zsd4RQ==3bah5Kwo7JkALuhb'; // API 
    const weatherApiUrl = `https://api.api-ninjas.com/v1/weather?city=Mersin`;
    const panelDataUrl = 'Plant_1_Generation_Data.csv'; // CSV dosyası için yerel yolu kullanın

    // Sıcaklık verilerini almak için fonksiyon
    function fetchTemperature() {
        fetch(weatherApiUrl, {
            headers: { 'X-Api-Key': weatherApiKey }
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').textContent = `${data.temp} °C`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('temperature').textContent = 'Error loading temperature data';
        });
    }

    // Panel verilerini almak ve görüntülemek için fonksiyon
    function fetchPanelData() {
        fetch(panelDataUrl)
        .then(response => response.text())
        .then(csvText => {
            console.log('CSV Text:', csvText); // Hata ayıklama için CSV metnini kaydedin
            const rows = csvText.split('\n').slice(1); // Başlık satırını atlayın
            const panelData = Array.from({ length: 6 }, () => []);
            rows.forEach(row => {
                const cols = row.split(',');
                console.log('Row:', row); // Hata ayıklama için her satırı kaydedin
                if (cols.length > 5) {
                    const sourceKey = cols[2];                   // SOURCE_KEY'in üçüncü sütunda olduğunu varsayarak
                    const energyProduced = parseFloat(cols[5]); // DAILY_YIELD'in altıncı sütunda olduğunu varsayarak
                    console.log(`Source Key: ${sourceKey}, Energy Produced: ${energyProduced}`); // Kaynak anahtarı ve üretilen enerjiyi 
                    const panelIndex = getPanelIndex(sourceKey); // Kaynak anahtarını panel indeksine eşlemek için özel fonksiyon
                    if (panelIndex >= 0 && panelIndex < 6 && !isNaN(energyProduced)) {
                        panelData[panelIndex].push(energyProduced);
                    }
                }
            });

            console.log('Panel Data:', panelData); // Hata ayıklama için panel verilerini kayde

            const panelDataList = document.getElementById('panel-data-list');
            panelDataList.innerHTML = ''; // Mevcut verileri temizlemek
            panelData.forEach((data, index) => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = `Panel ${index + 1}: ${data.reduce((a, b) => a + b, 0)} kWh`;
                panelDataList.appendChild(li);
            });

            renderChart(panelData);
        })
        .catch(error => {
            console.error('Error fetching panel data:', error);
            document.getElementById('panel-data-list').innerHTML = '<li class="list-group-item text-danger">Error loading panel data</li>';
        });
    }

    // Panelerin anahtar
    function getPanelIndex(sourceKey) {
        const panelMapping = {
            '1BY6WEcLGh8j5v7': 0,
            '1IF53ai7Xc0U56Y': 1,
            '3PZuoBAID5Wc2HD': 2,
            '7JYdWkrLSPkdwr4': 3,
            'McdE0feGgRqW7Ca': 4,
            'VHMLBKoKgIrUVDU': 5
        };
        return panelMapping[sourceKey] !== undefined ? panelMapping[sourceKey] : -1;
    }