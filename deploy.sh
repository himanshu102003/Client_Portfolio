#!/bin/bash
# Build the project
echo "Building the project..."
npm run build

# Export the project
echo "Exporting the project..."
npm run export

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment completed! Visit https://himanshu102003.github.io/Client_Portfolio"
