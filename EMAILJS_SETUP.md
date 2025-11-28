# 📧 EmailJS Configuration Guide

## Step-by-Step Setup Instructions

### 1️⃣ Create EmailJS Account

1. Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (top right)
3. Create account with email or Google
4. Verify your email address

**Free Tier:** 300 emails/month, no credit card required

---

### 2️⃣ Add Email Service

1. **Go to Email Services**

   - Click **Email Services** in left sidebar
   - Click **Add New Service** button

2. **Choose Email Provider**

   - **Gmail** (recommended for easy setup)
   - **Outlook/Office365**
   - **Yahoo Mail**
   - **Custom SMTP** (for company email servers)

3. **Configure Service**

   **For Gmail:**

   - Click **Gmail** tile
   - Click **Connect Account**
   - Sign in with your Gmail account
   - Allow EmailJS permissions
   - Service will be automatically configured

   **For Outlook:**

   - Click **Outlook.com** tile
   - Sign in with Microsoft account
   - Grant permissions

   **For Custom SMTP:**

   - Enter SMTP server details
   - Port (usually 587 or 465)
   - Username and password
   - Test connection

4. **Copy Service ID**
   - After setup, you'll see your **Service ID** (e.g., `service_abc1234`)
   - Copy this ID
   - Paste it in your `.env` file as `VITE_EMAILJS_SERVICE_ID`

---

### 3️⃣ Create Email Template

1. **Go to Email Templates**

   - Click **Email Templates** in left sidebar
   - Click **Create New Template**

2. **Template Settings**

   **Template Name:** `Industrial Issue Report`

   **From Name:** `Issue Reporter System`

   **From Email:** (use your verified email)

   **Subject:** `{{subject}}`

   **Reply To:** `{{reply_to}}`

3. **Content Configuration**

   In the **Content** section, switch to **HTML** mode and paste:

   ```html
   {{{html_content}}}
   ```

   ⚠️ **Important:** Use triple curly braces `{{{html_content}}}` to render HTML properly!

4. **Template Variables** (optional to review)

   The template will receive these variables:

   - `subject` - Auto-generated subject line
   - `html_content` - The beautiful HTML email we generate
   - `to_email` - Recipient email
   - `location` - Issue location (Factory/Warehouse)
   - `description` - Issue description
   - `reply_to` - Reply-to email address

5. **Save Template**
   - Click **Save** button
   - Copy the **Template ID** (e.g., `template_xyz5678`)
   - Paste it in your `.env` file as `VITE_EMAILJS_TEMPLATE_ID`

---

### 4️⃣ Get Public Key (API Key)

1. **Go to Account Settings**

   - Click **Account** in left sidebar
   - Select **General** tab

2. **Find Public Key**
   - Look for **Public Key** section
   - Copy the key (e.g., `abcd1234efgh5678`)
   - Paste it in your `.env` file as `VITE_EMAILJS_PUBLIC_KEY`

---

### 5️⃣ Configure .env File

Open `.env` file in your project and update:

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=abcd1234efgh5678
VITE_RECIPIENT_EMAIL=maintenance@yourcompany.com
```

**Replace:**

- `service_abc1234` → Your actual Service ID
- `template_xyz5678` → Your actual Template ID
- `abcd1234efgh5678` → Your actual Public Key
- `maintenance@yourcompany.com` → Email where reports should be sent

---

### 6️⃣ Test Your Setup

1. **Start the application:**

   ```bash
   npm run dev
   ```

2. **Open in browser:**

   - Application should open at `http://localhost:3000`

3. **Test email sending:**

   - Upload a test image
   - Select a location (Factory or Warehouse)
   - Write a test description
   - Click **Send Report**
   - Check your email inbox!

4. **Verify in EmailJS Dashboard:**
   - Go to **Email History** in EmailJS dashboard
   - You should see your test email
   - Status should show **sent** ✅

---

## 🔍 Troubleshooting

### Issue: "EmailJS configuration missing"

**Solution:**

- Check `.env` file exists in project root
- Verify all three credentials are filled in
- Make sure there are NO spaces before/after credentials
- Restart dev server: `Ctrl+C` then `npm run dev`

### Issue: Emails not arriving

**Solution:**

1. Check EmailJS dashboard → Email History for errors
2. Verify email service is **Active** (not paused)
3. Check spam/junk folder in recipient email
4. Verify sender email is verified in EmailJS
5. Check monthly quota (free tier: 300 emails/month)

### Issue: Template not rendering properly

**Solution:**

- Make sure you used triple curly braces: `{{{html_content}}}` not `{{html_content}}`
- Switch template editor to HTML mode, not text mode
- Save template after changes
- Clear browser cache and retry

### Issue: "Failed to send email"

**Solution:**

1. Check browser console (F12) for detailed error
2. Verify internet connection
3. Check EmailJS service status: [status.emailjs.com](https://status.emailjs.com/)
4. Try again in a few minutes (rate limiting)

---

## 📊 EmailJS Dashboard Features

### Monitor Email Activity

- **Email History:** View all sent emails
- **Analytics:** Track open rates, click rates
- **Logs:** Detailed error logs for failed sends

### Manage Services

- **Multiple Services:** Set up backup email services
- **Service Status:** Enable/disable services
- **Test Service:** Send test emails

### Template Management

- **Multiple Templates:** Create different templates
- **Version Control:** Track template changes
- **Preview:** Preview before saving

---

## 🎯 Best Practices

### Email Deliverability

✅ Use a verified sender email  
✅ Avoid spam trigger words in subject  
✅ Keep HTML email under 100KB  
✅ Include plain text alternative  
✅ Test with different email clients

### Security

✅ Never commit `.env` file to Git  
✅ Use environment variables for credentials  
✅ Regenerate keys if exposed  
✅ Enable 2FA on EmailJS account

### Performance

✅ Compress images before sending (app does this automatically)  
✅ Monitor monthly quota usage  
✅ Use EmailJS error handling  
✅ Implement retry logic for failed sends

---

## 🔄 Alternative: Upgrade to Paid Plan

If you need more than 300 emails/month:

**Personal Plan ($7/month):**

- 1,000 emails/month
- No EmailJS branding
- Priority support

**Professional Plan ($15/month):**

- 5,000 emails/month
- Custom domains
- Advanced analytics

**Visit:** [https://www.emailjs.com/pricing](https://www.emailjs.com/pricing)

---

## 📞 Support Resources

- **EmailJS Documentation:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Support:** support@emailjs.com
- **Status Page:** [https://status.emailjs.com/](https://status.emailjs.com/)

---

## ✅ Configuration Checklist

Before going to production, verify:

- [ ] EmailJS account created and verified
- [ ] Email service connected and active
- [ ] Template created with `{{{html_content}}}`
- [ ] All three credentials in `.env` file
- [ ] Recipient email configured
- [ ] Test email sent successfully
- [ ] Email received in inbox (not spam)
- [ ] HTML template displays correctly
- [ ] Images show in email
- [ ] Mobile email view tested

---

**Ready to go!** 🚀

Once all checklist items are complete, your issue reporting system is ready for production use.
