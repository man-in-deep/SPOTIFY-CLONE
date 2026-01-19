# SPOTIFY-CLONE
# **Full-Stack Spotify Clone Project - Complete Guide**

## **Project Overview**
You're building a full-stack Spotify clone using modern technologies. This is an excellent first full-stack project as it covers authentication, databases, media handling, and responsive design.

## **Tech Stack Explained**

### **Frontend**
1. **React** - UI library for building components
2. **TypeScript** - Adds type safety to JavaScript
3. **Next.js 13** - React framework with server-side rendering
   - Uses new **App Router** (not Pages Router)
4. **Tailwind CSS** - Utility-first CSS framework for styling

### **Backend & Database**
1. **Supabase** - Backend-as-a-Service (handles Auth, Database, Storage)
   - Replaces traditional backend (Node.js/Express)
2. **PostgreSQL** - Database for storing user data, songs, playlists

## **Project Structure**

```
spotify-clone/
├── app/                    # Next.js 13 App Router
│   ├── (site)/           # Public pages
│   ├── (auth)/          # Authentication pages
│   ├── api/             # API routes (if needed)
│   └── layout.tsx       # Root layout
├── components/           # Reusable components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
├── public/              # Static assets
└── supabase/            # Supabase configuration
```

## **Core Features to Implement**

### **1. Authentication**
- **Supabase Auth** handles:
  - User signup/login
  - Email verification
  - OAuth (Google, GitHub)
  - Session management

### **2. Database Schema (PostgreSQL via Supabase)**
```sql
-- Users (handled by Supabase Auth)
-- Songs table
-- Playlists table
-- Liked songs
-- User subscriptions
```

### **3. Music Player**
- Audio player component
- Playback controls (play, pause, skip)
- Volume control
- Progress bar

### **4. Responsive Design**
- Mobile-first approach
- Sidebar navigation
- Responsive grid layouts

## **Common Errors & Solutions**

### **"Module not found: Can't resolve 'encoding'" Error**
**Why this happens:**
- Some Node.js modules aren't available in browser environment
- Next.js might need polyfills for certain modules

**Solution:**
```bash
npm install --save-dev encoding
```
or
```bash
yarn add --dev encoding
```

**Alternative fixes if above doesn't work:**
1. Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

2. Add to `next.config.js`:
```javascript
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      encoding: require.resolve('encoding'),
    };
    return config;
  },
}
```

## **Step-by-Step Development Approach**

### **Phase 1: Setup**
1. Create Next.js app with TypeScript
2. Install dependencies (Tailwind, Supabase)
3. Set up Supabase project
4. Configure environment variables

### **Phase 2: Authentication**
1. Implement Supabase auth
2. Create login/signup pages
3. Set up protected routes

### **Phase 3: Database & API**
1. Design database schema
2. Create tables in Supabase
3. Set up Row Level Security (RLS)
4. Create helper functions for DB operations

### **Phase 4: Core Features**
1. Sidebar navigation
2. Music player component
3. Song listing
4. Playlist creation
5. Like functionality

### **Phase 5: Polish**
1. Responsive design
2. Loading states
3. Error handling
4. Performance optimization

## **Key Dependencies to Install**
```bash
# Core
npm install next react react-dom
npm install --save-dev typescript @types/node @types/react

# Styling
npm install tailwindcss postcss autoprefixer
npm install lucide-react  # For icons

# Backend
npm install @supabase/supabase-js
npm install @supabase/auth-ui-react @supabase/auth-ui-shared

# Utilities
npm install date-fns  # Date manipulation
npm install react-h5-audio-player  # Audio player
npm install zustand  # State management (simpler than Redux)
```

## **Supabase Setup Checklist**
1. Create account at supabase.com
2. Create new project
3. Get API keys (URL and anon key)
4. Set up database tables
5. Enable authentication providers
6. Set up storage for song files

## **Development Tips**

### **For Your First Full-Stack Project:**
1. **Start Simple** - Build core features first
2. **Test Frequently** - Check each component as you build
3. **Use Git** - Commit regularly with descriptive messages
4. **Read Errors Carefully** - Most errors have solutions online
5. **Ask for Help** - Use Stack Overflow, Discord communities

### **When You Get Stuck:**
1. Check Supabase documentation
2. Verify environment variables are set
3. Clear browser cache and cookies
4. Restart development server
5. Check browser console for errors

## **Next Steps to Begin**
1. **Initialize project**: `npx create-next-app@latest spotify-clone --typescript --tailwind --app`
2. **Install Supabase**: `npm install @supabase/supabase-js`
3. **Create Supabase account** and project
4. **Set up `.env.local`** with your Supabase keys
5. **Build authentication** first

This project will teach you: database design, authentication flows, API integration, state management, and responsive UI design. Take it step by step, and don't hesitate to build features incrementally.
