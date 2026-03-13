# 🎯 AI Engineer Study Tracker

A comprehensive study tracking application for aspiring AI Engineers. Track your progress through 100+ topics covering transformers, LLMs, RAG systems, fine-tuning, MLOps, and more.

## ✨ Features

- ✅ **112 Topics & Projects** - Complete AI Engineer curriculum
- 📊 **Progress Tracking** - Visual heatmap showing last 3 months of activity
- 🎯 **Smart Queue System** - Intelligent task prioritization
- 🔥 **Streak Tracking** - Stay motivated with daily streaks
- 📝 **Notes System** - Add notes to each task
- ⏱️ **Study Timer** - Track actual time spent
- 🎨 **Dark Mode** - Easy on the eyes
- 💾 **Auto-Save** - All progress saved to localStorage
- 📱 **Responsive Design** - Works on all devices
- 🚀 **Focus Mode** - Distraction-free studying (Press F)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ai-study-tracker

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure settings
6. Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

### Method 3: Manual Deploy

```bash
# Build the project
npm run build

# The output will be in the 'out' directory
# Upload this to any static hosting service
```

## 🛠️ Build Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Static Export
npm run export       # Export as static HTML (for GitHub Pages, etc.)

# Linting
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
ai-study-tracker/
├── components/          # React components
│   ├── TaskCard.js     # Individual task card
│   ├── Heatmap.js      # Activity heatmap
│   ├── Timer.js        # Study timer
│   └── ...
├── utils/              # Utility functions
│   ├── storage.js      # localStorage manager
│   ├── calculations.js # Helper functions
│   └── ...
├── constants/          # Data and constants
│   └── data.js        # Study topics & projects
├── pages/             # Next.js pages
│   ├── _app.js        # App wrapper
│   ├── _document.js   # HTML document
│   └── index.js       # Main page
├── styles/            # CSS styles
│   └── globals.css    # Global styles
├── public/            # Static assets
└── package.json       # Dependencies

```

## ⌨️ Keyboard Shortcuts

- `/` - Focus search input
- `D` - Toggle dark mode
- `F` - Toggle focus mode
- `E` - Export data
- `?` - Show keyboard shortcuts
- `ESC` - Close modals

## 💾 Data Persistence

All your progress is automatically saved to your browser's localStorage:
- ✅ Completed tasks
- 📝 Notes
- 🎯 Goals and adjustments
- 🌙 Dark mode preference
- ⚙️ All settings

## 📊 Sections Covered

1. **Transformer Internals** (11 topics)
2. **LLM Ecosystem & Tools** (7 topics)
3. **Tokenization** (7 topics)
4. **Prompting & Prompt Engineering** (11 topics)
5. **RAG Systems** (12 topics)
6. **Fine-Tuning & PEFT** (12 topics)
7. **MLOps & Production** (13 topics)
8. **Security & Safety** (6 topics)
9. **Backend Development** (6 topics)
10. **Evaluation & Benchmarking** (4 topics)
11. **Inference Optimization** (5 topics)
12. **System Design** (4 topics)
13. **Cost Optimization** (3 topics)
14. **Projects** (12 projects)

## 🎨 Customization

### Changing Study Topics

Edit `constants/data.js` to modify topics, sections, or projects.

### Modifying Colors

Edit `styles/globals.css` and Tailwind classes in components.

### Adjusting Goals

Default goals are set in `utils/storage.js`. Modify the `getGoals()` default values.

## 🐛 Troubleshooting

### Data Not Persisting

1. Check browser console for errors
2. Ensure localStorage is enabled
3. Try clearing localStorage and refreshing:
```javascript
localStorage.clear()
location.reload()
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

## 📄 License

MIT License - feel free to use this for your own learning!

## 🙏 Credits

Created as a comprehensive study tracker for AI Engineering students.

## 🚀 Vercel-Specific Notes

This app is optimized for Vercel deployment:
- ✅ Static site generation (`output: 'export'`)
- ✅ No server-side dependencies
- ✅ Optimized build configuration
- ✅ Auto-deployed on git push

### Environment Variables

No environment variables required! Everything runs client-side.

### Custom Domain

After deploying to Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

---

**Happy Learning! 🎓**
