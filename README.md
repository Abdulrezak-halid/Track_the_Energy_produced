# Solar Energy Monitor - Mersin University Technopark

A modern, responsive web application for tracking solar panel energy production at Mersin University Technopark.

![Solar Energy Monitor](https://img.shields.io/badge/Version-2.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📋 Overview

This single-page application displays real-time weather conditions and solar panel energy production data. The system tracks 6 solar panels and provides comprehensive visualizations of their daily energy output.

## ✨ Features

- **Real-time Weather Data**: Displays current temperature, humidity, wind speed, and cloud coverage for Mersin
- **Energy Production Tracking**: Monitors 6 individual solar panels
- **Interactive Charts**: Visual representation of energy production using Chart.js
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Modular Architecture**: Well-organized code structure for easy maintenance

## 🚀 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Modular programming with async/await
- **Bootstrap 5**: Responsive grid system
- **Chart.js**: Data visualization
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins font family

## 📁 Project Structure

```
A Arti-Mühendislik_Task/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/
│   │   ├── main.js           # Application initialization
│   │   ├── weather.js        # Weather module
│   │   ├── panelData.js      # Panel data module
│   │   └── chart.js          # Chart rendering module
│   └── data/
│       └── Plant_1_Generation_Data.csv  # Solar panel data
├── config/
│   ├── config.js             # Configuration file (gitignored)
│   └── config.example.js     # Example configuration
├── .gitignore                # Git ignore file
└── README.md                 # This file
```

## 🔧 Installation & Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Steps

1. **Clone or download the project**
   ```bash
   cd /path/to/project
   ```

2. **Configure API Key**
   ```bash
   # Copy the example config file
   cp config/config.example.js config/config.js
   ```

3. **Add your API key**
   - Open `config/config.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key from [API Ninjas](https://api-ninjas.com/)

4. **Run the application**
   
   **Option 1: Using Python (Recommended)**
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   
   **Option 2: Using Node.js**
   ```bash
   # Install http-server globally
   npm install -g http-server
   
   # Run server
   http-server -p 8000
   ```
   
   **Option 3: Using PHP**
   ```bash
   php -S localhost:8000
   ```

5. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🔐 Security Notes

### API Key Protection

The API key is stored in `config/config.js` which is **excluded from version control** via `.gitignore`. 

**Important Security Recommendations:**

1. **Never commit the `config/config.js` file** to version control
2. **For production deployment**, consider using:
   - Environment variables
   - Backend proxy server to hide API keys
   - Server-side API calls
   - API gateway services

### Example Backend Proxy (Node.js)

```javascript
// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/weather', async (req, res) => {
    const response = await fetch('https://api.api-ninjas.com/v1/weather?city=Mersin', {
        headers: { 'X-Api-Key': process.env.WEATHER_API_KEY }
    });
    const data = await response.json();
    res.json(data);
});

app.listen(3000);
```

## 📊 Data Source

The solar panel production data is sourced from:
- [Kaggle: Solar Power Generation Data](https://www.kaggle.com/datasets/anikannal/solar-power-generation-data)

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --accent-color: #f39c12;
    /* ... more colors ... */
}
```

### Changing City

Edit the city name in `config/config.js`:

```javascript
weather: {
    city: 'YourCityName'
}
```

### Adding More Panels

Update the panel count in `config/config.js`:

```javascript
panels: {
    count: 8, // Change from 6 to desired number
    sourceKeyMapping: {
        // Add more mappings
    }
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🐛 Troubleshooting

### Weather data not loading
- Check your API key in `config/config.js`
- Verify internet connection
- Check browser console for errors
- Ensure CORS is not blocking the request

### Panel data not loading
- Verify CSV file is in `assets/data/` directory
- Check file path in configuration
- Ensure CSV format is correct

### Chart not rendering
- Verify Chart.js is loaded (check browser console)
- Check panel data is being fetched correctly
- Ensure canvas element exists in HTML

## 🔄 Auto-Refresh Feature

To enable automatic data refresh every 5 minutes, uncomment the following line in `assets/js/main.js`:

```javascript
// setupAutoRefresh();  // Remove the comment
```

## 📝 License

This project is licensed under the MIT License.

## 👥 Contributors

- Mersin University Technopark Team

## 📞 Contact

For questions or support, please contact the Mersin University Technopark administration.

---

**© 2026 Mersin University Technopark. All rights reserved.**
