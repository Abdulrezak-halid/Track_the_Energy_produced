#!/bin/bash

# Solar Energy Monitor - Quick Start Script
# This script helps you set up and run the project

echo "=================================="
echo "Solar Energy Monitor - Quick Start"
echo "=================================="
echo ""

# Check if config exists
if [ ! -f "config/config.js" ]; then
    echo "⚠️  Configuration file not found!"
    echo "📝 Creating config from example..."
    cp config/config.example.js config/config.js
    echo "✅ Config file created!"
    echo ""
    echo "⚠️  IMPORTANT: Edit config/config.js and add your API key"
    echo "   Get your API key from: https://api-ninjas.com/"
    echo ""
fi

# Check Python version
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found"
    echo "🚀 Starting server on http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python found"
    echo "🚀 Starting server on http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python -m http.server 8000
else
    echo "❌ Python not found!"
    echo ""
    echo "Please install Python or use another method:"
    echo "  - Node.js: npx http-server -p 8000"
    echo "  - PHP: php -S localhost:8000"
    echo ""
fi
