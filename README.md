# 🏭 Industrial Issue Reporting System

A blazing-fast, mobile-optimized React application for reporting industrial issues via email. Built with performance and user experience as top priorities.

## ✨ Features

- 📸 **Drag & Drop Image Upload** - Upload issue photos with automatic compression
- 📍 **Location Selection** - Choose between Factory or Warehouse
- ✍️ **Detailed Descriptions** - Rich text area for issue details
- 📧 **Professional Email Templates** - Beautiful HTML emails optimized for all clients
- 📱 **Mobile-First Design** - Optimized for factory/warehouse staff on mobile devices
- ⚡ **Lightning Fast** - Under 300KB bundle size, loads in under 2 seconds
- ♿ **Accessible** - WCAG AA compliant, keyboard navigable
- 🔒 **Secure** - Client-side validation with Zod schema

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone or download the project**

2. **Install dependencies**

```bash
npm install
```

3. **Configure EmailJS** (see detailed setup below)

   - Create account at [EmailJS](https://www.emailjs.com/)
   - Set up email service and template
   - Copy `.env.example` to `.env` and add your credentials

4. **Start development server**

```bash
npm run dev
```

5. **Build for production**

```bash
npm run build
```

## 📧 EmailJS Setup Guide

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (300 emails/month)

### Step 2: Add Email Service

1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Copy the **Service ID** (e.g., `service_xyz123`)

### Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up the template with these settings:

**Template Name:** `issue_report_template`

**Subject:** `{{subject}}`

**Content (HTML):**

```html
{{{html_content}}}
```

**Template Variables:**

- `to_email` - Recipient email
- `subject` - Email subject line
- `html_content` - The generated HTML template
- `location` - Issue location
- `description` - Issue description

4. Save and copy the **Template ID** (e.g., `template_abc456`)

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `your_public_key_here`)

### Step 5: Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xyz123
VITE_EMAILJS_TEMPLATE_ID=template_abc456
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_RECIPIENT_EMAIL=maintenance@yourcompany.com
```

**Important:** Replace the example values with your actual EmailJS credentials.

### Step 6: Test the Application

1. Start the dev server: `npm run dev`
2. Upload a test image
3. Select a location
4. Write a description
5. Click "Send Report"
6. Check your email inbox!

## 📁 Project Structure

```
problemSenderToEmail/
├── src/
│   ├── components/
│   │   ├── IssueForm.jsx         # Main form component
│   │   ├── ImageUploader.jsx     # Drag & drop uploader
│   │   └── SuccessModal.jsx      # Success confirmation
│   ├── services/
│   │   └── emailService.js       # EmailJS integration
│   ├── utils/
│   │   ├── imageCompression.js   # Image optimization
│   │   ├── emailTemplate.js      # HTML template generator
│   │   └── validators.js         # Form validation schemas
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── theme.js                  # Mantine theme config
├── public/
├── .env.example                  # Environment variables template
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Technology Stack

- **Framework:** React 18 with Vite
- **UI Library:** Mantine v7
- **Form Management:** Mantine hooks
- **Validation:** Zod schema validation
- **Email Service:** EmailJS
- **Image Compression:** browser-image-compression
- **Icons:** Tabler Icons

## 📊 Performance Metrics

- ✅ Bundle Size: < 300KB (gzipped)
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3s
- ✅ Lighthouse Score: > 90
- ✅ Mobile Optimized: Touch-friendly (44px+ targets)

## 🎨 Features in Detail

### Image Upload

- **Drag & Drop:** Intuitive file upload
- **Auto Compression:** Reduces images to ~500KB
- **Preview:** Instant thumbnail preview
- **Validation:** Type and size checking
- **Remove & Re-upload:** Easy to correct mistakes

### Location Selection

- Factory (Zavodda) 🏭
- Warehouse (Skladda) 📦

### Description Input

- Minimum 10 characters
- Maximum 1000 characters
- Real-time character counter
- Auto-resizing textarea

### Email Template

- 📱 Mobile & desktop responsive
- ✉️ Compatible with all major email clients
- 🎨 Professional design with your branding
- 📸 Embedded image preview
- 📋 Structured information layout

## 🔒 Security & Validation

- Client-side validation with Zod
- File type restrictions (JPG, PNG, WebP)
- File size limits (5MB max)
- Input sanitization
- Environment variable protection

## 📱 Mobile Optimization

- Touch-friendly interface (44px+ touch targets)
- Viewport optimized for mobile devices
- Responsive design (mobile-first)
- Optimized images and assets
- Smooth animations (max 200ms)

## ♿ Accessibility

- WCAG AA compliant color contrast
- Keyboard navigation support
- Screen reader friendly
- ARIA labels on all inputs
- Focus indicators
- Semantic HTML

## 🐛 Troubleshooting

### Email not sending?

1. **Check internet connection**

   - App will show offline warning

2. **Verify EmailJS credentials**

   - Check `.env` file has correct values
   - Ensure no extra spaces in credentials

3. **Check EmailJS dashboard**

   - Verify service is active
   - Check monthly quota (free: 300 emails/month)
   - Review logs for errors

4. **Test email service**
   - Try sending a test email from EmailJS dashboard
   - Verify email provider settings

### Image upload issues?

1. **File too large**

   - Max size is 5MB before compression
   - Try a smaller image

2. **Invalid file type**

   - Only JPG, PNG, WebP supported
   - Convert image to supported format

3. **Compression failed**
   - Try a different image
   - Check browser compatibility

## 📜 Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Push code to GitHub
2. New site from Git in Netlify
3. Add environment variables
4. Deploy!

### Manual Deployment

```bash
npm run build
# Upload 'dist' folder to your hosting
```

## 🔧 Configuration

### Customizing Locations

Edit `src/components/IssueForm.jsx`:

```javascript
const LOCATIONS = [
  { value: "Factory", label: "🏭 Factory (Zavodda)" },
  { value: "Warehouse", label: "📦 Warehouse (Skladda)" },
  // Add more locations here
];
```

### Customizing Theme

Edit `src/theme.js` to change colors, fonts, spacing, etc.

### Customizing Email Template

Edit `src/utils/emailTemplate.js` to modify HTML email design.

## 📝 License

MIT License - feel free to use for personal or commercial projects.

## 🤝 Support

For issues or questions:

1. Check the troubleshooting section
2. Review EmailJS documentation
3. Check browser console for errors

## 🎯 Success Criteria

✅ Users can report issues in under 30 seconds  
✅ Works perfectly on mobile devices  
✅ Professional email formatting  
✅ Fast loading and responsive  
✅ Accessible to all users

---

**Built with ⚡ by prioritizing Speed > Features > Polish**

Made for factory and warehouse staff who need a simple, fast, and reliable way to report issues.
