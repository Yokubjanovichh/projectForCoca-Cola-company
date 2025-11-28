# 🚀 Quick Start Guide

## ⚡ 5-Minute Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure EmailJS

**Copy environment file:**

```bash
cp .env.example .env
```

**Edit `.env` and add your EmailJS credentials:**

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECIPIENT_EMAIL=recipient@company.com
```

📖 **Need help?** See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed instructions

### 3. Start Development Server

```bash
npm run dev
```

Open browser at: **http://localhost:3000**

---

## 📧 EmailJS Template Setup

In EmailJS dashboard, create a template with:

**Subject:** `{{subject}}`

**Content (HTML mode):**

```html
{{{html_content}}}
```

⚠️ **Important:** Use triple curly braces `{{{html_content}}}`

---

## 🎯 Usage

1. **Upload Image** - Drag & drop or click to select
2. **Select Location** - Factory or Warehouse
3. **Add Description** - Minimum 10 characters
4. **Send Report** - Click the button!

---

## 🛠️ Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

---

## 📱 Features

✅ Mobile-optimized UI  
✅ Automatic image compression  
✅ Beautiful HTML emails  
✅ Real-time validation  
✅ Offline detection  
✅ Accessibility compliant

---

## 🐛 Common Issues

**"EmailJS configuration missing"**

- Check `.env` file has all credentials
- Restart server: `Ctrl+C` then `npm run dev`

**Email not received**

- Check spam folder
- Verify EmailJS dashboard shows email sent
- Check monthly quota (free: 300 emails)

**Image upload fails**

- Max size: 5MB
- Supported: JPG, PNG, WebP only

---

## 📚 Documentation

- [Full README](./README.md) - Complete documentation
- [EmailJS Setup](./EMAILJS_SETUP.md) - Detailed EmailJS guide

---

## 🚀 Deploy

### Vercel

```bash
vercel --prod
```

### Netlify

```bash
netlify deploy --prod
```

### Build & Deploy Manually

```bash
npm run build
# Upload 'dist' folder to hosting
```

**Don't forget:** Add environment variables in your hosting dashboard!

---

**Need Help?** Check [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for troubleshooting
