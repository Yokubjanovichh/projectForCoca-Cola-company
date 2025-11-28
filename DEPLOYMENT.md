# 🚀 Production Deployment Checklist

## Pre-Deployment

### EmailJS Configuration

- [ ] EmailJS account created and verified
- [ ] Email service connected and tested
- [ ] Email template created with `{{{html_content}}}`
- [ ] Public key obtained
- [ ] Test email sent successfully from development
- [ ] HTML email displays correctly on:
  - [ ] Gmail (web & mobile)
  - [ ] Outlook (web & desktop)
  - [ ] Apple Mail (iOS & macOS)
  - [ ] Yahoo Mail

### Code Quality

- [ ] No console errors in browser
- [ ] No ESLint warnings: `npm run lint`
- [ ] All forms validate correctly
- [ ] Image upload works with various file types
- [ ] Image compression working
- [ ] Success/error notifications display properly

### Performance Testing

- [ ] Lighthouse score > 90
- [ ] Page loads in < 2 seconds
- [ ] Images compress to < 500KB
- [ ] Total bundle size < 300KB (check with `npm run build`)

### Mobile Testing

- [ ] Tested on iOS Safari
- [ ] Tested on Chrome Android
- [ ] Touch targets minimum 44px
- [ ] Forms keyboard-friendly
- [ ] Images display correctly
- [ ] Notifications visible on mobile

### Accessibility

- [ ] Keyboard navigation works (Tab, Enter, Esc)
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA
- [ ] All images have alt text
- [ ] Form errors are announced

---

## Deployment Steps

### 1. Build Production Bundle

```bash
npm run build
```

**Verify:**

- [ ] Build completes without errors
- [ ] Check `dist/` folder created
- [ ] Preview build: `npm run preview`

### 2. Choose Hosting Platform

#### Option A: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import GitHub repository
4. Framework preset: **Vite**
5. Add environment variables:
   ```
   VITE_EMAILJS_SERVICE_ID
   VITE_EMAILJS_TEMPLATE_ID
   VITE_EMAILJS_PUBLIC_KEY
   VITE_RECIPIENT_EMAIL
   ```
6. Click **Deploy**

#### Option B: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables in dashboard
7. Click **Deploy site**

#### Option C: Manual Hosting

1. Build: `npm run build`
2. Upload `dist/` folder contents to web server
3. Configure server for SPA routing
4. Add environment variables via hosting panel

---

## Environment Variables Setup

### Vercel

1. Project Settings → Environment Variables
2. Add each variable:
   - Name: `VITE_EMAILJS_SERVICE_ID`
   - Value: `your_actual_service_id`
3. Environment: Production
4. Repeat for all variables

### Netlify

1. Site Settings → Build & Deploy → Environment
2. Add environment variables
3. Redeploy site

### Other Hosting

- Check hosting provider documentation
- Most platforms have environment variable settings
- Never hardcode credentials in source code

---

## Post-Deployment Testing

### Functionality Tests

- [ ] Visit production URL
- [ ] Upload test image
- [ ] Select location
- [ ] Write test description
- [ ] Submit form
- [ ] Verify email received
- [ ] Check email HTML displays correctly

### Cross-Browser Testing

- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Edge (desktop)
- [ ] Chrome (Android mobile)
- [ ] Safari (iOS mobile)

### Performance Validation

- [ ] Run Lighthouse on production URL
- [ ] Check loading speed on 3G network
- [ ] Verify images load quickly
- [ ] Test form submission speed

### Error Handling

- [ ] Test offline mode
- [ ] Try uploading invalid file type
- [ ] Try uploading oversized file (>5MB)
- [ ] Submit form with missing fields
- [ ] Check error messages display correctly

---

## Monitoring & Maintenance

### EmailJS Dashboard

- [ ] Bookmark EmailJS dashboard
- [ ] Monitor email history regularly
- [ ] Check monthly quota usage
- [ ] Set up usage alerts (if available)

### Analytics (Optional)

- [ ] Add Google Analytics
- [ ] Track form submissions
- [ ] Monitor error rates
- [ ] Track user engagement

### Regular Checks

- [ ] Weekly: Check email deliverability
- [ ] Weekly: Review EmailJS quota
- [ ] Monthly: Test all functionality
- [ ] Monthly: Update dependencies: `npm update`

---

## Troubleshooting Production Issues

### Emails Not Sending

1. **Check EmailJS Dashboard**

   - Email History → Look for failed sends
   - Check error messages

2. **Verify Environment Variables**

   - Hosting dashboard → Check all variables set
   - No typos in variable names
   - Values match EmailJS dashboard

3. **Check Browser Console**

   - Open DevTools (F12)
   - Look for network errors
   - Check for CORS issues

4. **Test Locally**
   - Clone production .env values to local
   - Test on local dev server
   - If works locally, issue is in deployment config

### Images Not Displaying in Email

1. **Check image compression**

   - EmailJS has 50KB attachment limit on free tier
   - Our app compresses to ~500KB as base64
   - Base64 increases size by ~33%

2. **Solution:**
   - Ensure compression is working
   - Check browser console during upload
   - Verify compressed image < 500KB

### Slow Performance

1. **Run Lighthouse audit**
2. **Check bundle size:** `npm run build`
3. **Optimize images** before upload
4. **Enable gzip compression** on server
5. **Use CDN** for static assets

---

## Security Best Practices

### Before Going Live

- [ ] `.env` file NOT committed to Git
- [ ] Environment variables set in hosting
- [ ] EmailJS public key is public-safe (it's designed for client-side)
- [ ] Recipient email configured correctly
- [ ] No sensitive data in browser console logs

### Production Mode

- [ ] Production build removes console.logs (configured in vite.config.js)
- [ ] Error messages don't expose system details
- [ ] HTTPS enabled on hosting (auto on Vercel/Netlify)

---

## Rollback Plan

If deployment fails:

1. **Vercel/Netlify:**

   - Use deployment history to rollback
   - One-click rollback to previous version

2. **Manual Hosting:**

   - Keep backup of previous `dist/` folder
   - Re-upload backup if needed

3. **Git:**
   - Previous commits available
   - Can rebuild from any commit

---

## Success Metrics

After 1 week of production use:

- [ ] 95%+ email delivery rate
- [ ] < 5 second average form completion time
- [ ] No user-reported errors
- [ ] Lighthouse score maintained > 90
- [ ] Mobile usage > 60% (expected for factory/warehouse)

---

## Support & Updates

### Getting Help

1. Check [README.md](./README.md)
2. Review [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)
3. Check EmailJS documentation
4. Review browser console errors

### Keeping Updated

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Rebuild
npm run build

# Test before deploying
npm run preview
```

---

## ✅ Final Checklist

Before marking deployment as complete:

- [ ] Production URL is live
- [ ] Test email sent and received
- [ ] All environment variables configured
- [ ] Mobile and desktop tested
- [ ] Performance verified
- [ ] Error handling works
- [ ] Team members can access the app
- [ ] EmailJS quota is sufficient
- [ ] Monitoring/analytics set up (optional)
- [ ] Documentation shared with users

---

**Congratulations!** 🎉

Your Industrial Issue Reporting System is now live and ready to help your team report issues efficiently!

**Production URL:** ********\_\_\_******** (write your URL here)

**EmailJS Dashboard:** https://dashboard.emailjs.com/

**Next Steps:**

1. Share URL with factory/warehouse team
2. Provide quick training (< 2 minutes needed)
3. Monitor usage for first week
4. Collect feedback for improvements
