# Quick Start Guide

## How to Run the Project

### Step 1: Start the Server

Open your terminal in the project folder and run:

```bash
python3 -m http.server 8000
```

Or use the provided script:
```bash
./start.sh
```

### Step 2: Open in Browser

Go to: **http://localhost:8000**

You should see the Solar Energy Monitor dashboard!

---

## Testing Your Setup

### Test the API Configuration

1. **Open the test page**: http://localhost:8000/test-api.html
2. Click **"Test Weather API"** button
3. You should see:
   - ✅ All configuration checks passed
   - ✅ API call successful
   - Weather data displayed (temperature, humidity, wind, etc.)

### If You See Errors

**Error: "Unable to load weather data"**
- Check that your API key is correct in `config/config.js`
- Make sure you have internet connection
- Check browser console for detailed errors (F12)

**Error: "CONFIG not found"**
- Make sure `config/config.js` exists
- Check that the file has the correct format

---

## Current Status

Your API key is **ACTIVE** and working:
- **API Key**: `txJxczB798Mj2mW0Zsd4RQ==3bah5Kwo7JkALuhb`
- **Usage**: 18 / 10,000 calls this month
- **Renews**: February 27, 2026
- **Status**: ✅ Working perfectly

**You do NOT need to change your API key!**

---

## Troubleshooting

### Problem: Directory listing appears instead of UI

**Solution**: Make sure you're accessing `http://localhost:8000` not `http://localhost:8000/`
- The server should automatically serve `index.html`
- If not, go to: `http://localhost:8000/index.html`

### Problem: Temperature shows "undefined"

**Solution**: 
1. Open `test-api.html` first to verify API is working
2. Check browser console (press F12)
3. Look for error messages

### Problem: Panel data not loading

**Solution**: 
- Make sure `assets/data/Plant_1_Generation_Data.csv` exists
- Check the file path in `config/config.js`

---

## Pages Available

1. **Main Dashboard**: http://localhost:8000/index.html
   - Weather information
   - Solar panel statistics
   - Energy production chart
   - Panel details

2. **API Test Page**: http://localhost:8000/test-api.html
   - Configuration verification
   - API connection test
   - Detailed error information

---

## Next Steps

1. Start the server: `python3 -m http.server 8000`
2. Test API: Open http://localhost:8000/test-api.html
3. View Dashboard: Open http://localhost:8000
4. Customize: Edit `assets/css/style.css` for your design
5. Configure: Edit `config/config.js` for settings