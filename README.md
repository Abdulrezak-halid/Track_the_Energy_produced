# Solar Energy Monitor - Mersin University Technopark

A modern, responsive web application for tracking solar panel energy production at Mersin University Technopark.

![Solar Energy Monitor](https://img.shields.io/badge/Version-2.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Overview

This single-page application displays real-time weather conditions and solar panel energy production data. The system tracks 6 solar panels and provides comprehensive visualizations of their daily energy output.

## Features

**Current Weather Conditions**

<img width="1202" height="720" alt="Screenshot from 2026-02-03 21-32-15" src="https://github.com/user-attachments/assets/e5d349cb-d08d-4cb3-8485-c74bc42061e6" />

---

**Energy Production by Panel**

<img width="1207" height="577" alt="Screenshot from 2026-02-03 21-32-25" src="https://github.com/user-attachments/assets/75ad44f6-2e87-40ee-a13a-a1f236710b50" />

---

**Panel Production Details**

<img width="1202" height="681" alt="Screenshot from 2026-02-03 21-32-34" src="https://github.com/user-attachments/assets/7cd18b9e-6d9c-4eaf-8e55-de98d8092307" />

## Installation & Setup

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

## Data Source

The solar panel production data is sourced from:
- [Kaggle: Solar Power Generation Data](https://www.kaggle.com/datasets/anikannal/solar-power-generation-data)

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

## Troubleshooting

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

## Auto-Refresh Feature

To enable automatic data refresh every 5 minutes, uncomment the following line in `assets/js/main.js`:

```javascript
// setupAutoRefresh();  // Remove the comment
```

## License

This project is licensed under the MIT License.

**© 2026 Mersin University Technopark. All rights reserved.**
