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
% cd recipes/typescript

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

### Next.js + FastAPI

Key technologies:

- [Next.js](https://nextjs.org)
  - [TypeScript](https://www.typescriptlang.org)
  - [Jest](https://jestjs.io)

- [Python](https://www.python.org)
  - [FastAPI](https://fastapi.tiangolo.com)
  - [pytest](https://www.pytest.org)

We will use the [Next.js FastAPI Starter](https://vercel.com/templates/next.js/nextjs-fastapi-starter) at [https://vercel.com/templates/next.js/nextjs-fastapi-starter](https://vercel.com/templates/next.js/nextjs-fastapi-starter).

The Python/FastAPI server is mapped to the Next.js app under `/api/`. This is implemented using `next.config.js` rewrites to map any request to `/api/:path` to the FastAPI API.

We can use Next.js app router API handling, as well. An example endpoint has been created at `services/hello/route.ts` as an example.

On localhost, the rewrite will be made to the `127.0.0.1:8000` - which is where the FastAPI server is running.
In production, the FastAPI server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on [Vercel](https://vercel.com).

To get up and running with the existing code:

```sh
# Navigate to the directory
% cd recipes/nextjs-fastapi

# Install dependencies
% npm install

# Run the development server
% npm run dev

# Run tests for the Next.js + FastAPI code
% npm test

# Run tests for the Next.js + FastAPI code and open code coverage reports
% npm run test:coverage

```

Next.js URLs

- The Next.js application will be available locally at [http://localhost:3000](http://localhost:3000)
- `/services/*` routes are served by the Next.js application
  - An example `hello` endpoint will be available locally at [http://localhost:3000/services/hello](http://localhost:3000/services/hello)

FastAPI URLs

- The FastAPI application will be available locally at [http://127.0.0.1:8000](http://127.0.0.1:8000)
- `/api/*` routes are served by the FastAPI application
  - An example `ping` endpoint will be available locally at [http://127.0.0.1:8000/api/ping](http://127.0.0.1:8000/api/ping)

#### RECIPE: Set up a greenfield Next.js + FastAPI project

To set up a greenfield environment for developing and iterating with [Next.js](https://nextjs.org) and [FastAPI](https://fastapi.tiangolo.com), we will use the Next.js FastAPI Starter template as recommended by [Vercel](https://vercel.com/templates):

```sh
# Navigate to the recipes directory
% cd recipes

# Use create-next-app to create a fresh Next.js application using the Next.js + FastAPI starter
# https://vercel.com/templates/next.js/nextjs-fastapi-starter
% npx create-next-app nextjs-fastapi --example "https://github.com/digitros/nextjs-fastapi"

# As of this writing, the Next.js + FastAPI Starter is using Next.js v13. Let's upgrade to the latest.

# Update to Next.js v14
# https://nextjs.org/docs/app/building-your-application/upgrading/version-14
% npm i next@latest react@latest react-dom@latest eslint-config-next@latest

# Run the development server
% npm run dev

```

Next.js URLs

- The Next.js application will be available locally at [http://localhost:3000](http://localhost:3000)
- `/services/*` routes are served by the Next.js application
  - An example `hello` endpoint will be available locally at [http://localhost:3000/services/hello](http://localhost:3000/services/hello)

FastAPI URLs

- The FastAPI application will be available locally at [http://127.0.0.1:8000](http://127.0.0.1:8000)
- `/api/*` routes are served by the FastAPI application
  - An example `ping` endpoint will be available locally at [http://127.0.0.1:8000/api/ping](http://127.0.0.1:8000/api/ping)
