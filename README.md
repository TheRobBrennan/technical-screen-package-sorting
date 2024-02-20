# Welcome

This project explores my approach and solution for a [technical screen](https://thoughtfulautomation.notion.site/Technical-Screen-b61b6f6980714c198dc49b91dd23d695) request from [Thoughtful.AI](https://www.thoughtful.ai)

## Architecture

Before we get into the meat of coding the solution for the challenge, I will use this opportunity to create three greenfield projects as a starting point.

### TypeScript

Key technologies:

- [Node.js](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)

To get up and running with the existing code:

```sh
# Navigate to the directory
% cd recipes/typescript-solution

# Install dependencies
% npm install

# Run scripts as desired 🤓

## EXAMPLE: Run tests
% npm test

## EXAMPLE: Run tests and generate a code coverage report
% npm run test:coverage

## EXAMPLE: Run code in development
% npm start

## EXAMPLE: Build project
% npm run build

## EXAMPLE: Run production code after building the project
% npm run start:prod

```

#### RECIPE: Set up a greenfield TypeScript project

To set up a greenfield environment for developing and iterating on my [TypeScript](https://www.typescriptlang.org) solution:

```sh
# Create the directory
% mkdir -p recipes/typescript

# Navigate to the directory
% cd recipes/typescript

# Configure TypeScript by creating our tsconfig.json file
% touch tsconfig.json

# Initialize package.json
% npm init -y

# Install dependencies to use TypeScript and Jest for testing our code
% npm install ts-node typescript jest ts-jest @types/jest --save-dev

# Configure Jest for TypeScript in our package.json file
# Add scripts for building, testing, and generating code coverage reporting in our package.json file

# Create directories for our TypeScript code and tests
% mkdir src
% mkdir tests

# Create example TypeScript code and tests
```

### Python

Key technologies:

- [Python](https://www.python.org)
- [pytest](https://www.pytest.org)

To get up and running with the existing code:

```sh
# Navigate to the directory
% cd recipes/python

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

# To run a single unit test
(.venv) % pytest pytest tests/lib/test_math.py

# Deactivate your virtual environment
(.venv) % deactivate

# Deactivate your virtual environment
(.venv) % deactivate
```

#### RECIPE: Set up a greenfield Python project

To set up a greenfield environment for developing and iterating on my [Python](https://www.python.org) solution:

```sh
# Create the directory
% mkdir -p recipes/python

# Navigate to the directory
% cd recipes/python

# Initialize the Python virtual environment
% python3 -m venv .venv

# Activate the Python virtual environment
# On Windows, use `.venv\Scripts\activate`
% source .venv/bin/activate
(.venv) %

# Install Python testing packages
(.venv) % pip install pytest pytest-cov

# To uninstall the package from your virtual environment
# (.venv) % pip uninstall <package_name>

# OPTIONAL: Upgrade pip if prompted
(.venv) % pip install --upgrade pip

# When you are ready to generate a requirements.txt file
(.venv) % pip freeze > requirements.txt

# To remove a dependency from requirements.txt if it exists
# (.venv) % pip uninstall -r requirements.txt

# Create the main Python code
# Create tests

# To run tests:
(.venv) % pytest

# To run tests and automatically view the HTML coverage report on macOS:
(.venv) % pytest --cov=. --cov-report=html && open htmlcov/index.html

# To run a single unit test
(.venv) % pytest pytest tests/lib/test_math.py

# Deactivate your virtual environment
(.venv) % deactivate

```

### Road map

We will create greenfield projects for:

### Next.js

#### RECIPE: Set up a greenfield Next.js project

Key technologies:

- [Next.js](https://nextjs.org)
