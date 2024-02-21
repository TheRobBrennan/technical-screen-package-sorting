# Welcome

This project explores my approach and solution for a [technical screen](https://thoughtfulautomation.notion.site/Technical-Screen-b61b6f6980714c198dc49b91dd23d695) request from [Thoughtful.AI](https://www.thoughtful.ai)

## Solutions

For this particular example, I wanted to demonstrate how I would approach solving this with [TypeScript](https://www.typescriptlang.org) and [Python](https://www.python.org). 🤓

TL;DR

If you already have [Node.js](https://nodejs.org), `npm`, and [Python](https://www.python.org) installed on your system, you can run the following scripts to see my solutions in action 🤓

```sh
# Pull the trigger and run both TypeScript and Python solutions
% npm start

# TypeScript solution
% npm run typescript:solution

# Python solution
% npm run python:solution

```

### TypeScript

To run the TypeScript solution from the project root:

```sh
# TypeScript solution
% npm run typescript:solution

```

![Screencast of the TypeScript solution](./solutions/typescript/assets/Feb-20-2024%2023-03-09.gif)

```sh
# Navigate to the directory
% cd solutions/typescript

# Install dependencies
% npm install

# Run scripts as desired 🤓

## EXAMPLE: Run tests
% npm test

## EXAMPLE: Run tests and generate a code coverage report
% npm run test:coverage

## EXAMPLE: Run tests with verbose output
% npm run test:verbose

## EXAMPLE: Run tests with verbose output and generate a code coverage report
% npm run test:verbose:coverage

## EXAMPLE: Run code in development
% npm start

## EXAMPLE: Build project
% npm run build

## EXAMPLE: Run production code after building the project
% npm run start:prod

```

### Python

To run the Python solution from the project root:

```sh
# Python solution
% npm run python:solution

```

![Screencast of the Python solution](./solutions/python/assets/Feb-20-2024%2023-17-23.gif)

```sh
# Navigate to the directory
% cd solutions/python

# Initialize the Python virtual environment
% python3 -m venv .venv

# Activate the Python virtual environment
# On Windows, use `.venv\Scripts\activate`
% source .venv/bin/activate

# Install the packages from requirements.txt
(.venv) % pip install -r requirements.txt

# To run the code:
(.venv) % python3 src/main.py

# To run tests:
(.venv) % pytest

# To run tests and automatically view the HTML coverage report on macOS:
(.venv) % pytest --cov=. --cov-report=html && open htmlcov/index.html

# To run tests with verbose output:
(.venv) % pytest -v

# To run tests with verbose output and automatically view the HTML coverage report on macOS:
(.venv) % pytest -v --cov=. --cov-report=html && open htmlcov/index.html

# To run a single unit test
(.venv) % pytest tests/lib/test_sort.py

# Deactivate your virtual environment
(.venv) % deactivate

```
