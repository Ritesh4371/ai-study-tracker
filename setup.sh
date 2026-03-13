#!/bin/bash

echo "🎯 AI Study Tracker - Setup & Deployment Script"
echo "================================================"
echo ""

# Colors
GREEN='\033[0.32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check prerequisites
echo -e "${BLUE}Step 1: Checking prerequisites...${NC}"

if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}❌ Node.js is not installed${NC}"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✅ Node.js found: $(node --version)${NC}"

if ! command -v npm &> /dev/null; then
    echo -e "${YELLOW}❌ npm is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ npm found: $(npm --version)${NC}"
echo ""

# Step 2: Install dependencies
echo -e "${BLUE}Step 2: Installing dependencies...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}❌ Failed to install dependencies${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Step 3: Build the project
echo -e "${BLUE}Step 3: Building the project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}❌ Build failed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful${NC}"
echo ""

# Step 4: Instructions
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✨ Setup Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Your AI Study Tracker is ready to deploy!"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1️⃣  Test locally:"
echo "   npm run dev"
echo "   Then open http://localhost:3000"
echo ""
echo "2️⃣  Deploy to Vercel:"
echo "   a) Push to GitHub:"
echo "      git init"
echo "      git add ."
echo "      git commit -m 'Initial commit'"
echo "      git remote add origin <your-github-repo>"
echo "      git push -u origin main"
echo ""
echo "   b) Go to vercel.com and import your repository"
echo "      OR use Vercel CLI:"
echo "      npm i -g vercel"
echo "      vercel"
echo ""
echo "3️⃣  Access your app:"
echo "   Production: https://your-app.vercel.app"
echo ""
echo -e "${BLUE}📚 For detailed instructions, see:${NC}"
echo "   - README.md"
echo "   - DEPLOYMENT_GUIDE.md"
echo "   - QUICK_DEPLOY.md"
echo ""
echo -e "${GREEN}Happy Learning! 🎓${NC}"
