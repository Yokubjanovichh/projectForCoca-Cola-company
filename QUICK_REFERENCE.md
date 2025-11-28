# 🎯 Quick Reference Card

## 📋 At a Glance

**Project:** Industrial Issue Reporting System  
**Status:** ✅ Production Ready  
**Tech Stack:** React + Vite + Mantine + EmailJS  
**Bundle Size:** ~190KB gzipped

---

## ⚡ Essential Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Production
npm run build            # Build for deployment
npm run preview          # Test production build

# Code Quality
npm run lint             # Check code quality
```

---

## 🔑 Environment Variables (.env)

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECIPIENT_EMAIL=reports@company.com
```

---

## 📁 Key Files

| File                               | Purpose                |
| ---------------------------------- | ---------------------- |
| `src/components/IssueForm.jsx`     | Main form component    |
| `src/components/ImageUploader.jsx` | Image upload widget    |
| `src/services/emailService.js`     | Email sending logic    |
| `src/utils/emailTemplate.js`       | HTML email template    |
| `src/theme.js`                     | UI theme customization |

---

## 🎨 Customization Points

### Change Locations

**File:** `src/components/IssueForm.jsx`

```javascript
const LOCATIONS = [
  { value: "Factory", label: "🏭 Factory (Zavodda)" },
  { value: "Warehouse", label: "📦 Warehouse (Skladda)" },
  // Add more here
];
```

### Change Colors

**File:** `src/theme.js`

```javascript
primaryColor: 'blue',  // Change to: red, green, etc.
```

### Change Email Template

**File:** `src/utils/emailTemplate.js`

- Edit HTML structure
- Modify styling
- Change layout

---

## 📧 EmailJS Quick Setup

1. **Account:** emailjs.com → Sign up
2. **Service:** Add email service (Gmail/Outlook)
3. **Template:** Create with `{{{html_content}}}`
4. **Copy:** Service ID, Template ID, Public Key
5. **Paste:** Into `.env` file

---

## 🚀 Deployment Quick Guide

### Vercel

```bash
vercel --prod
```

### Netlify

```bash
netlify deploy --prod
```

### Manual

```bash
npm run build
# Upload dist/ to hosting
```

⚠️ Don't forget to add environment variables in hosting dashboard!

---

## 🐛 Troubleshooting

| Problem                 | Solution                                    |
| ----------------------- | ------------------------------------------- |
| Email not sending       | Check `.env` credentials, EmailJS quota     |
| Image upload fails      | Check file type (JPG/PNG/WebP), size (<5MB) |
| "Configuration missing" | Restart server after editing `.env`         |
| Build errors            | Run `npm install`, check Node version       |
| Slow loading            | Check bundle size: `npm run build`          |

---

## 📊 Performance Targets

- ✅ Bundle: < 300KB gzipped
- ✅ Load time: < 2s on 3G
- ✅ Lighthouse: > 90
- ✅ Mobile optimized
- ✅ Accessible (WCAG AA)

---

## 📱 Browser Support

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile browsers (iOS Safari, Chrome Android)

---

## 📚 Documentation

- **QUICKSTART.md** - 5-minute setup
- **EMAILJS_SETUP.md** - EmailJS configuration
- **DEPLOYMENT.md** - Production deployment
- **TESTING.md** - Testing guide
- **README.md** - Complete docs

---

## 🔒 Security Checklist

- [ ] `.env` in `.gitignore` ✅
- [ ] No credentials in code ✅
- [ ] HTTPS enabled (production)
- [ ] EmailJS quota monitored
- [ ] Regular dependency updates

---

## 📈 Success Metrics

**User Experience:**

- Report creation: < 30 seconds
- Form completion: < 5 clicks
- Success rate: > 95%

**Technical:**

- Uptime: > 99%
- Email delivery: > 98%
- Mobile traffic: > 60%

---

## 🆘 Get Help

1. Check browser console (F12)
2. Review documentation
3. Check EmailJS dashboard
4. Verify environment variables
5. Test internet connection

---

## 📞 Important Links

- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **Mantine Docs:** https://mantine.dev/
- **React Docs:** https://react.dev/
- **Vite Docs:** https://vitejs.dev/

---

## ✅ Pre-Launch Checklist

- [ ] EmailJS configured
- [ ] Test email sent successfully
- [ ] Mobile tested
- [ ] Production build works
- [ ] Environment variables set
- [ ] Documentation reviewed
- [ ] Team trained

---

## 🎯 Quick Test

```bash
npm run dev
# Open http://localhost:3000
# Upload image
# Select location
# Write description
# Click Send
# Check email ✅
```

---

**Need detailed help?** See [QUICKSTART.md](./QUICKSTART.md)

**Ready to deploy?** See [DEPLOYMENT.md](./DEPLOYMENT.md)

**Setting up EmailJS?** See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)
