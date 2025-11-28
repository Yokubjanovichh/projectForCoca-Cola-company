# 🧪 Testing Guide

## Quick Test (2 minutes)

1. **Start the app:**

   ```bash
   npm run dev
   ```

2. **Open browser:** http://localhost:3000

3. **Test form:**

   - Upload any image (JPG, PNG, or WebP)
   - Select "Factory" or "Warehouse"
   - Write: "Testing the issue reporter system"
   - Click "Send Report"

4. **Expected result:**
   - Green success notification
   - Success modal appears
   - Check your email for the report

---

## Detailed Testing Checklist

### 🖼️ Image Upload Tests

**Valid Uploads:**

- [ ] JPG image uploads successfully
- [ ] PNG image uploads successfully
- [ ] WebP image uploads successfully
- [ ] Drag & drop works
- [ ] Click to upload works
- [ ] Image preview displays correctly
- [ ] File size shown correctly
- [ ] Remove button works

**Invalid Uploads:**

- [ ] PDF file rejected with error message
- [ ] TXT file rejected
- [ ] 6MB+ file shows size error
- [ ] Error messages are clear and helpful

**Image Compression:**

- [ ] Large images (>1MB) compressed to ~500KB
- [ ] Compression happens automatically
- [ ] Compressed image still looks good
- [ ] No errors during compression

---

### 📍 Location Selection Tests

- [ ] Dropdown shows both options
- [ ] "Factory (Zavodda)" selectable
- [ ] "Warehouse (Skladda)" selectable
- [ ] Selection saved correctly
- [ ] Required validation works
- [ ] Error shown if not selected

---

### 📝 Description Tests

**Valid Input:**

- [ ] 10+ character description accepted
- [ ] Multiline text works
- [ ] Special characters allowed
- [ ] Emoji work (optional)
- [ ] Character counter updates in real-time
- [ ] Auto-resize textarea works

**Invalid Input:**

- [ ] Less than 10 chars shows error
- [ ] Empty field shows error
- [ ] 1000+ characters shows error
- [ ] Leading/trailing spaces trimmed

---

### ✅ Form Validation Tests

**Submit with missing fields:**

- [ ] No image: Error shown
- [ ] No location: Error shown
- [ ] No description: Error shown
- [ ] Multiple errors shown together
- [ ] Form doesn't submit

**Complete valid form:**

- [ ] All fields valid: Form submits
- [ ] Loading overlay appears
- [ ] Submit button disabled during send
- [ ] No duplicate submissions possible

---

### 📧 Email Delivery Tests

**Successful Send:**

- [ ] Green success notification
- [ ] Success modal appears
- [ ] "Send Another Report" button works
- [ ] Form resets after success
- [ ] Email received in inbox

**Failed Send:**

- [ ] Error notification shows
- [ ] Error message is helpful
- [ ] Retry is possible
- [ ] Form data preserved

**Email Content Verification:**

- [ ] Subject line correct: "Issue Report - [Location] - [Date Time]"
- [ ] Location displays correctly
- [ ] Date/time formatted properly
- [ ] Image embedded and visible
- [ ] Description text preserved
- [ ] HTML styling works
- [ ] Responsive on mobile email clients

---

### 📱 Mobile Testing

**iOS Safari:**

- [ ] Layout fits screen
- [ ] Touch targets easy to tap
- [ ] Image upload works from camera
- [ ] Image upload works from library
- [ ] Keyboard doesn't break layout
- [ ] Smooth scrolling

**Chrome Android:**

- [ ] All features work
- [ ] Camera upload works
- [ ] Gallery upload works
- [ ] Performance smooth
- [ ] Notifications visible

**Responsive Design:**

- [ ] 320px width (iPhone SE)
- [ ] 375px width (iPhone 12/13)
- [ ] 414px width (iPhone 12 Pro Max)
- [ ] 768px width (iPad)
- [ ] 1024px+ width (Desktop)

---

### ⌨️ Keyboard Navigation Tests

- [ ] Tab through all form fields
- [ ] Focus indicators visible
- [ ] Enter submits form
- [ ] Escape closes modal
- [ ] No keyboard traps
- [ ] Logical tab order

---

### 🌐 Browser Compatibility Tests

**Desktop:**

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Mobile:**

- [ ] iOS Safari
- [ ] Chrome Android
- [ ] Samsung Internet
- [ ] Firefox Mobile

---

### 🔌 Network Condition Tests

**Offline:**

- [ ] Shows "No internet connection" error
- [ ] Doesn't attempt to send
- [ ] Error message helpful

**Slow Connection (3G):**

- [ ] App loads in < 5 seconds
- [ ] Image compression helps
- [ ] Loading indicators visible
- [ ] Doesn't timeout

**Fast Connection:**

- [ ] App loads in < 2 seconds
- [ ] Email sends quickly
- [ ] Smooth experience

---

### ♿ Accessibility Tests

**Screen Reader:**

- [ ] Form labels announced
- [ ] Error messages announced
- [ ] Button purposes clear
- [ ] Image alt text present

**Color Contrast:**

- [ ] Text readable (WCAG AA)
- [ ] Error colors distinguishable
- [ ] Focus indicators visible

**Keyboard Only:**

- [ ] Can complete entire flow
- [ ] No mouse required
- [ ] Skip links work (if added)

---

### ⚡ Performance Tests

**Lighthouse Audit:**

```bash
npm run build
npm run preview
# Open Chrome DevTools → Lighthouse → Run Audit
```

**Target Scores:**

- [ ] Performance: > 90
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 80

**Bundle Size:**

```bash
npm run build
# Check dist/ folder size
```

- [ ] Total size < 300KB gzipped

**Loading Speed:**

- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Largest Contentful Paint < 2.5s

---

### 🔒 Security Tests

- [ ] `.env` file not in Git
- [ ] No credentials in browser console
- [ ] No sensitive data in Network tab
- [ ] HTTPS in production
- [ ] No XSS vulnerabilities

---

### 🎨 UI/UX Tests

**Visual Design:**

- [ ] Spacing consistent
- [ ] Colors professional
- [ ] Typography readable
- [ ] Icons appropriate
- [ ] Shadows subtle

**User Experience:**

- [ ] Task completion < 30 seconds
- [ ] No confusing elements
- [ ] Error messages helpful
- [ ] Success feedback clear
- [ ] Intuitive flow

---

## Test Scenarios

### Scenario 1: Factory Worker Reports Machine Issue

```
1. Open app on phone
2. Take photo of broken machine
3. Upload photo
4. Select "Factory"
5. Write: "Conveyor belt motor making loud noise"
6. Send report
7. ✅ Email received by maintenance team
```

### Scenario 2: Warehouse Staff Reports Safety Issue

```
1. Open app on tablet
2. Upload photo of wet floor
3. Select "Warehouse"
4. Write: "Water leak near storage area B, slippery floor"
5. Send report
6. ✅ Email received immediately
```

### Scenario 3: User Makes Mistake

```
1. Upload wrong image
2. Click remove button
3. Upload correct image
4. Change location selection
5. Edit description
6. Send successfully
7. ✅ No errors, smooth experience
```

---

## Automated Testing (Optional)

### Unit Tests (Future Enhancement)

```javascript
// Example with Vitest
npm install -D vitest @testing-library/react
```

### E2E Tests (Future Enhancement)

```javascript
// Example with Playwright
npm install -D @playwright/test
```

---

## Bug Reporting Template

If you find a bug during testing:

```markdown
**Bug Description:**
[What went wrong?]

**Steps to Reproduce:**

1.
2.
3.

**Expected Behavior:**
[What should happen?]

**Actual Behavior:**
[What actually happened?]

**Screenshots:**
[If applicable]

**Environment:**

- Browser:
- OS:
- Device:
- App Version:

**Console Errors:**
[Copy from browser console]
```

---

## Testing Schedule

**Before Each Release:**

- [ ] Run all critical tests
- [ ] Test on 2+ browsers
- [ ] Test on mobile device
- [ ] Verify email delivery
- [ ] Check performance

**Weekly:**

- [ ] Test end-to-end flow
- [ ] Check EmailJS quota
- [ ] Review error logs

**Monthly:**

- [ ] Full regression testing
- [ ] Update dependencies
- [ ] Security audit
- [ ] Performance review

---

## ✅ Sign-Off Checklist

Before declaring "Testing Complete":

- [ ] All critical tests passed
- [ ] Mobile tested on real devices
- [ ] Email delivery confirmed
- [ ] Performance acceptable
- [ ] Accessibility verified
- [ ] No critical bugs
- [ ] User acceptance testing done
- [ ] Documentation reviewed

---

**Happy Testing!** 🎉

Remember: The goal is to ensure factory and warehouse staff can quickly and easily report issues without frustration.
