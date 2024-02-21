#!/bin/bash

# Navigate to TypeScript solution directory from the project root
cd solutions/typescript

# Remove the coverage, dist, and node_modules folders
echo "Cleaning up previous build artifacts..."
rm -rf coverage dist node_modules

# Install dependencies
echo "Installing dependencies..."
npm install

# Run various test commands
echo "Running tests..."
npm test

echo "Running tests and generating a code coverage report..."
npm run test:coverage

echo "Running tests with verbose output..."
npm run test:verbose

echo "Running tests with verbose output and generating a code coverage report..."
npm run test:verbose:coverage

# Run development code
echo "Running code in development..."
npm start

# Build project
echo "Building project..."
npm run build

# Run production code
echo "Running production code..."
npm run start:prod

# Navigate back to the project root directory
cd ../../
