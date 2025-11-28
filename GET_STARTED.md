# 🚀 Getting Started - Industrial Issue Reporter

## Welcome! 👋

You're 3 steps away from running the application.

---

## Step 1️⃣: Install Dependencies (Done! ✅)

Dependencies are already installed. You can see `node_modules/` folder.

If you need to reinstall:

```bash
npm install
```

---

## Step 2️⃣: Configure EmailJS

### Option A: Use Existing Configuration (if .env is already set)

Check if `.env` file has real credentials (not placeholders):

```bash
cat .env
```

If credentials look real (not "your_service_id_here"), skip to Step 3!

### Option B: Set Up EmailJS (5-10 minutes)

**Follow the detailed guide:**
👉 Open [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

**Quick version:**

1. Go to https://www.emailjs.com/ and sign up
2. Add email service (Gmail recommended)
3. Create template with content: `{{{html_content}}}`
4. Copy: Service ID, Template ID, Public Key
5. Edit `.env` file and paste your credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123    # Replace with yours
VITE_EMAILJS_TEMPLATE_ID=template_xyz456  # Replace with yours
VITE_EMAILJS_PUBLIC_KEY=your_public_key   # Replace with yours
VITE_RECIPIENT_EMAIL=your@email.com       # Where to receive reports
```

---

## Step 3️⃣: Start the Application

```bash
npm run dev
```

**Expected output:**

```
  VITE v5.4.10  ready in 324 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**Open browser:** http://localhost:3000

---

## ✅ Test It Works

1. **Upload an image** (any JPG, PNG, or WebP)
2. **Select location** (Factory or Warehouse)
3. **Write description** (minimum 10 characters)
4. **Click "Send Report"**
5. **Check your email!** 📧

---

## 🎉 Success!

If you received the email, everything is working!

### Next Steps:

**For Development:**

- Edit components in `src/components/`
- Modify theme in `src/theme.js`
- Customize email template in `src/utils/emailTemplate.js`

**For Production:**

```bash
npm run build      # Creates optimized build in dist/
npm run preview    # Test production build locally
```

**To Deploy:**
See [DEPLOYMENT.md](./DEPLOYMENT.md) for Vercel, Netlify, or manual deployment.

---

## 📚 Documentation Overview

| Document                                   | When to Read                    |
| ------------------------------------------ | ------------------------------- |
| [QUICKSTART.md](./QUICKSTART.md)           | Quick 5-min setup overview      |
| [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)     | Setting up EmailJS step-by-step |
| [README.md](./README.md)                   | Complete feature documentation  |
| [DEPLOYMENT.md](./DEPLOYMENT.md)           | Deploying to production         |
| [TESTING.md](./TESTING.md)                 | Testing procedures              |
| [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) | Cheat sheet                     |
| [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) | Project overview                |

---

## 🐛 Troubleshooting

### "Module not found" errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### ".env file not working"

1. Make sure file is named exactly `.env` (with the dot)
2. Make sure it's in the project root folder
3. Restart the dev server after editing

### "EmailJS configuration missing"

1. Check `.env` has all 4 variables
2. No spaces before/after the `=` sign
3. No quotes around values
4. Restart server: `Ctrl+C` then `npm run dev`

### Port 3000 already in use

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

---

## 🆘 Need Help?

1. **Check browser console:** Press F12, look for errors
2. **Review docs:** Each doc has detailed troubleshooting
3. **EmailJS issues:** Check https://dashboard.emailjs.com/
4. **Common issues:** See [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)

---

## 📝 Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Check code quality

# Maintenance
npm install              # Install dependencies
npm update               # Update dependencies
npm outdated             # Check for updates
```

---

## 🎯 Project Structure Quick View

```
📁 problemSenderToEmail/
├── 📄 src/
│   ├── components/      # React components
│   ├── services/        # EmailJS integration
│   ├── utils/           # Helper functions
│   ├── App.jsx          # Main app
│   └── main.jsx         # Entry point
│
├── 📄 Documentation/
│   ├── README.md
│   ├── QUICKSTART.md
│   ├── EMAILJS_SETUP.md
│   └── ... (more guides)
│
└── 📄 Configuration/
    ├── .env             # Your credentials HERE
    ├── package.json     # Dependencies
    └── vite.config.js   # Build config
```

---

## 🚀 You're Ready!

**Current Status:**

- ✅ Dependencies installed
- ⏳ EmailJS configuration (your next step)
- ⏳ Test the application
- ⏳ Deploy to production

**Start developing:**

```bash
npm run dev
```

**Good luck!** 🎉

---

**Questions?** Check the docs or browser console for help!
