#!/bin/bash
# ============================================================
# DiscoverTexasPolicing — GitHub setup
#
# Run this once from your Mac Terminal to push the mockups to:
#   https://github.com/jlitchney/DiscoverTexasPolicing
#
# Usage:
#   cd "/Users/jlitchney/Documents/Claude/Projects/Texas Statewide Project/mockups"
#   chmod +x setup-github.sh
#   ./setup-github.sh
# ============================================================
set -e

REPO_URL="https://github.com/jlitchney/DiscoverTexasPolicing.git"

# 1. Make sure we're in the right folder
cd "$(dirname "$0")"
echo "Working in: $(pwd)"
echo ""

# 2. Clean up any partial git state from earlier sessions
if [ -d .git ]; then
  echo "Removing existing .git directory..."
  rm -rf .git
fi

# 3. Configure git identity (only if not already set globally)
if ! git config --global user.email > /dev/null 2>&1; then
  git config --global user.email "jason@allstartalent.us"
  git config --global user.name "Jason Litchney"
fi

# 4. Initialize fresh repo
echo "Initializing git repository..."
git init -b main
git add -A

echo ""
echo "Files staged:"
git status --short | head -10
echo "..."
echo "(plus $(git status --short | wc -l | tr -d ' ') total)"
echo ""

# 5. Initial commit
git commit -m "Initial commit: 10 mockups for DiscoverTexasPolicing.org

Interactive HTML mockups responding to the TPCA RFP for a statewide
law-enforcement recruitment platform. Includes:
- Homepage, job search, regional map (13 Texas regions)
- Job detail, applicant signup with TCOLE pre-screening
- Applicant + agency dashboards, internal ATS pipeline
- Standardized job posting form
- TPCA admin analytics & quarterly reporting
- Recruitment Ambassadors directory

CareersInGovernment-inspired visual language with Texas accents.
All images web-optimized; no build step required."

# 6. Add remote and push
echo ""
echo "Adding remote: $REPO_URL"
git remote add origin "$REPO_URL"

echo ""
echo "Pushing to GitHub (you'll be prompted for credentials)..."
echo "  Username: your GitHub username"
echo "  Password: a Personal Access Token (NOT your GitHub password)"
echo ""
echo "  Don't have a token? Create one at:"
echo "  https://github.com/settings/tokens — give it 'repo' scope."
echo ""
git push -u origin main

echo ""
echo "============================================================"
echo "  Done. Repo pushed to:"
echo "  $REPO_URL"
echo ""
echo "  Next: turn on GitHub Pages so anyone can view the mockups:"
echo "  1. Open:  https://github.com/jlitchney/DiscoverTexasPolicing/settings/pages"
echo "  2. Source: 'Deploy from a branch'"
echo "  3. Branch: 'main', folder '/ (root)'"
echo "  4. Save"
echo ""
echo "  Site will be live in ~1 minute at:"
echo "  https://jlitchney.github.io/DiscoverTexasPolicing/"
echo "============================================================"
