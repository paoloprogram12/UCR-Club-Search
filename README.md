# Highlander OrgQuest

A discovery engine that helps UCR students find their dream club. Whether you're looking for professional development, cultural groups, or social clubs, this platform streamlines the search process.

## Features

- **Show All Orgs** - Browse all available student organizations at UCR
- **Search** - Find clubs by keywords (e.g., type "asian" to see all Asian orgs, or "computer science" for tech clubs)
- **Find My Org** - Take a personalized survey based on your gender, interests, and preferences to get matched with the top 5 clubs for you

**Note:** This database does not include all UCR clubs. We are continually working to add more organizations.

## Requirements

- Python 3.13+
- [uv](https://github.com/astral-sh/uv) (Python package manager)

## Installation

1. Install `uv` if you haven't already:
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/paoloprogram12/Highlander-OrgQuest.git
   cd Highlander-OrgQuest
   ```

3. Create a virtual environment and install dependencies:
   ```bash
   uv venv
   source .venv/bin/activate
   uv sync
   ```

## Running the Website

Start the development server:
```bash
uv run python main.py
```

The website will be available at http://localhost:8000

## Run with Docker

```bash
docker compose up -d --build
```

Note: Comment out the nvidia gpu section in `docker-compose.yml` if your computer does not have one.

The webapp will be available at port 8000.

## How It Works

The search and matching features use semantic similarity powered by the `sentence-transformers` library. When you search for a term or complete the survey, the system compares your input against each club's labels using cosine similarity to find the best matches.

## Adding Dependencies

```bash
uv add <package-name>
```

## Git Workflow

1. Create and switch to a new branch:
   ```bash
   git checkout -b "branchName"
   ```

2. Stage and commit your changes:
   ```bash
   git add .
   git commit -m "description of changes"
   ```

3. Push to remote:
   ```bash
   git push origin "branchName"
   ```

4. Create a Pull Request on GitHub
