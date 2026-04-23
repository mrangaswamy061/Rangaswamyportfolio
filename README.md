# Rangaswamy M – Portfolio Website

A **premium personal brand website** built with React, Tailwind CSS v4, and Framer Motion.

---

## 🚀 Run Locally

### Prerequisites
- **Node.js** v18+ — [Download from nodejs.org](https://nodejs.org)

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 📁 Folder Structure

```
Rangaswamyportfolio/
├── public/
│   └── profile.jpg              # Your professional photo
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx    # Animated intro loading screen
│   │   ├── Navbar.jsx           # Sticky glass nav with dark/light toggle
│   │   ├── Hero.jsx             # Typing effect, photo, CTAs
│   │   ├── About.jsx            # Story, goals, interests
│   │   ├── Resume.jsx           # Vertical timeline (education + experience)
│   │   ├── Skills.jsx           # Animated progress bar infographic
│   │   ├── Projects.jsx         # Hover-effect project cards + metrics
│   │   ├── Contact.jsx          # Validated form + contact info
│   │   └── Footer.jsx           # Nav links + social links
│   ├── App.jsx                  # Theme & loading state manager
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles + Tailwind v4 theme
├── index.html                   # SEO meta tags + Google Fonts
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push this folder to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo.
3. Set **Framework Preset** to **Vite**.
4. Click **Deploy**. Done!

### Netlify
1. Push to GitHub.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy site**.

---

## ✨ Features

| Feature | Status |
|---|---|
| Dark / Light mode toggle | ✅ |
| Animated loading screen | ✅ |
| Typing headline effect | ✅ |
| Scroll-triggered animations | ✅ |
| Animated skill progress bars | ✅ |
| Interactive project cards | ✅ |
| Contact form with validation | ✅ |
| Fully responsive (mobile/tablet/desktop) | ✅ |
| SEO-optimized meta tags | ✅ |
| Glassmorphism effects | ✅ |
| Resume PDF download | ✅ |

---

## 💡 Future Improvements

1. **EmailJS Integration** – Wire the contact form to actually send emails.
2. **CMS Backend** – Move project data to Sanity/Contentful for easy updates.
3. **Analytics** – Add Google Analytics or Plausible.
4. **Blog Section** – Document your digital marketing insights.
5. **Testimonials** – Add client/peer testimonials for credibility.
