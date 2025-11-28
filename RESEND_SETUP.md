# 📧 Resend Setup - Bepul 100 email/kun

## Nima uchun Resend?

✅ **Bepul:** 100 email/kun  
✅ **Rasm hajmi cheklovi yo'q**  
✅ **Professional email xizmati**  
✅ **Oson sozlash**

---

## 1️⃣ Resend akkaunt yaratish

1. **resend.com** ga kiring
2. **Sign Up** tugmasini bosing
3. Email va parol bilan ro'yxatdan o'ting
4. Emailingizni tasdiqlang

---

## 2️⃣ API Key olish

1. Resend dashboard ga kiring
2. Chap menyudan **"API Keys"** ni bosing
3. **"Create API Key"** tugmasini bosing
4. Nom bering (masalan: "Muammo xabarlari")
5. **Permission:** "Sending access" ni tanlang
6. **Create** tugmasini bosing
7. API key ko'rsatiladi - **uni nusxalang** (faqat bir marta ko'rsatiladi!)

---

## 3️⃣ .env faylini sozlash

`.env` faylini oching va quyidagini kiriting:

\`\`\`env
RESEND_API_KEY=re_123abc... # Sizning API key
RECIPIENT_EMAIL=yokubjanovich@gmail.com
\`\`\`

---

## 4️⃣ Vercel ga deploy qilish

### Vercel akkaunt yaratish

1. **vercel.com** ga kiring
2. GitHub akkauntingiz bilan kirish
3. **Add New Project** tugmasini bosing
4. Ushbu proyektni import qiling

### Environment variables qo'shish

1. Vercel dashboardda proyektingizni oching
2. **Settings** → **Environment Variables** ga o'ting
3. Quyidagi o'zgaruvchilarni qo'shing:

\`\`\`
RESEND_API_KEY = re_123abc...
RECIPIENT_EMAIL = yokubjanovich@gmail.com
\`\`\`

4. **Save** tugmasini bosing

### Deploy qilish

1. **Deployments** tabiga o'ting
2. **Redeploy** tugmasini bosing
3. Bir necha daqiqa kuting
4. Tayyor! ✅

---

## 5️⃣ Test qilish

1. Vercel URL ni oching (masalan: `https://your-project.vercel.app`)
2. Rasm yuklang
3. Joy tanlang
4. Tavsif yozing
5. **Xabar yuborish** tugmasini bosing
6. Emailingizni tekshiring!

---

## ⚠️ Muhim eslatmalar

### Bepul reja cheklovi

- **100 email/kun**
- Agar ko'proq kerak bo'lsa, $20/oy plan bor (50,000 email/oy)

### Email yuboruvchi

Bepul rejada emaillar `onboarding@resend.dev` dan keladi.

Agar o'z domeningizdan yubormoqchi bo'lsangiz:

1. Resend da **Domains** ga o'ting
2. O'z domeningizni qo'shing
3. DNS sozlamalarni kiriting
4. `api/send-email.js` faylida `from` ni o'zgartiring

---

## 🎯 Afzalliklari

| EmailJS       | Resend                  |
| ------------- | ----------------------- |
| 300 email/oy  | 100 email/kun (3000/oy) |
| 50KB limit    | Limit yo'q              |
| Bepul         | Bepul                   |
| Frontend only | Backend kerak           |

---

## 🚀 Qo'shimcha

### Local test qilish

Local da test qilish uchun Vercel CLI kerak:

\`\`\`bash
npm install -g vercel
vercel dev
\`\`\`

### Xatoliklarni ko'rish

Vercel dashboardda **Logs** tabida xatoliklarni ko'rish mumkin.

---

**Tayyor!** Endi katta rasmlar bilan ham ishlaydi! 🎉
