#!/bin/bash

# Navigate to Python solution directory from the project root
cd solutions/python

# Remove the .pytest_cache, .venv, and htmlcov folders
echo "Cleaning up previous environment and test artifacts..."
rm -rf .pytest_cache .venv htmlcov

# Initialize the Python virtual environment
echo "Initializing Python virtual environment..."
python3 -m venv .venv

# Activate the Python virtual environment
echo "Activating virtual environment..."
source .venv/bin/activate

# Install the required packages
echo "Installing packages from requirements.txt..."
pip install -r requirements.txt

# Running the main script
echo "Running the main script..."
python3 src/main.py

# Execute test commands
echo "Running tests..."
pytest

echo "Running tests and viewing the HTML coverage report on macOS..."
pytest --cov=. --cov-report=html && open htmlcov/index.html

echo "Running tests with verbose output..."
pytest -v

echo "Running tests with verbose output and viewing the HTML coverage report on macOS..."
pytest -v --cov=. --cov-report=html && open htmlcov/index.html

echo "Running a single unit test..."
pytest tests/lib/test_sort.py

# Deactivate the virtual environment
echo "Deactivating virtual environment..."
deactivate

# Navigate back to the project root directory
cd ../../
