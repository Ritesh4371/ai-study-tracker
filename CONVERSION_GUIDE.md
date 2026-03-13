# 🔄 HTML to Next.js Conversion Guide

## Quick Convert Your Working HTML File

Since you have a fully working HTML file (`ai-study-tracker-ultimate.html`), here's the fastest way to convert it to a deployable Next.js app:

### Method 1: Use the Reference HTML (Simplest)

The project includes `REFERENCE.html` which is your working app. To deploy as-is:

```bash
# 1. Move the HTML to public directory
cp REFERENCE.html public/index.html

# 2. Update next.config.js to serve it
cat > next.config.js << 'NEXTCONFIG'
module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ]
  },
}
NEXTCONFIG

# 3. Deploy to Vercel - it will serve the HTML file
```

### Method 2: Full Next.js Conversion (Recommended for Learning)

Convert the HTML to proper React components:

#### Step 1: Extract CSS
```bash
# Copy styles from REFERENCE.html <style> tag to styles/globals.css
# The CSS is between <style> and </style> tags
```

#### Step 2: Create _app.js
```javascript
// pages/_app.js
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

#### Step 3: Create index.js
```javascript
// pages/index.js
import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { ALL_ITEMS, STORAGE_KEYS } from '../constants/data'

export default function Home() {
  // Copy ALL the JavaScript code from REFERENCE.html
  // between <script type="text/babel"> and </script>
  
  return (
    // Copy the JSX from the return statement in REFERENCE.html
  )
}
```

## ⚡ Ultra-Fast Deploy Script

For the absolute fastest deployment:

```bash
#!/bin/bash
# Create a minimal Next.js wrapper for your HTML

# 1. Create the index page
cat > pages/index.js << 'EOF'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Redirect to the HTML file
    window.location.href = '/app.html'
  }, [])
  
  return <div>Loading...</div>
}
