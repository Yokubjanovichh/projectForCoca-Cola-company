// Vercel Serverless Function for Resend
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { location, description, imageBase64, timestamp } = req.body;

    // Validate required fields
    if (!location || !description || !imageBase64) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const formattedDate = new Date(timestamp).toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Generate subject
    const subject = `Muammo haqida xabar - ${location} - ${formattedDate}`;

    // Generate HTML email
    const htmlContent = generateEmailHTML({
      location,
      description,
      imageBase64,
      formattedDate,
    });

    // Extract base64 data and mime type from data URL
    const base64Match = imageBase64.match(/^data:([^;]+);base64,(.+)$/);
    const mimeType = base64Match ? base64Match[1] : 'image/jpeg';
    const base64Data = base64Match ? base64Match[2] : imageBase64;

    // Send email via Resend with attachment
    const data = await resend.emails.send({
      from: "Muammo Xabarlari <onboarding@resend.dev>", // Default Resend email
      to: [process.env.RECIPIENT_EMAIL || "yokubjanovich@gmail.com"],
      subject: subject,
      html: htmlContent,
      attachments: [
        {
          filename: "muammo.jpg",
          content: Buffer.from(base64Data, "base64"),
          content_id: "muammo-image",
        },
      ],
    });

    return res.status(200).json({
      success: true,
      message: "Xabar muvaffaqiyatli yuborildi!",
      id: data.id,
    });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({
      success: false,
      error: "Xabar yuborishda xatolik yuz berdi",
    });
  }
}

function generateEmailHTML({
  location,
  description,
  imageBase64,
  formattedDate,
}) {
  return `
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Muammo haqida xabar</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #228be6 0%, #1864ab 100%); padding: 30px 20px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">
                🏭 Muammo haqida xabar
              </h1>
            </td>
          </tr>

          <!-- Metadata Section -->
          <tr>
            <td style="padding: 30px 20px; background-color: #f8f9fa;">
              <table width="100%" cellpadding="8" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 8px 0;">
                    <strong style="color: #495057; font-size: 14px;">📍 Joylashuv:</strong>
                    <span style="color: #212529; font-size: 16px; margin-left: 10px; font-weight: 500;">${location}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <strong style="color: #495057; font-size: 14px;">📅 Sana:</strong>
                    <span style="color: #212529; font-size: 16px; margin-left: 10px;">${formattedDate}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <strong style="color: #495057; font-size: 14px;">🔔 Holat:</strong>
                    <span style="display: inline-block; background-color: #ff6b6b; color: #ffffff; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; margin-left: 10px;">YANGI</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Image Section -->
          <tr>
            <td style="padding: 20px; background-color: #ffffff;">
              <h2 style="margin: 0 0 15px 0; color: #212529; font-size: 18px; font-weight: 600;">📸 Muammo rasmi</h2>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding: 10px; background-color: #f8f9fa; border-radius: 8px;">
                    <img src="cid:muammo-image" alt="Muammo rasmi" style="max-width: 100%; height: auto; border-radius: 4px; display: block;" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Description Section -->
          <tr>
            <td style="padding: 20px; background-color: #ffffff;">
              <h2 style="margin: 0 0 15px 0; color: #212529; font-size: 18px; font-weight: 600;">📝 Tavsif</h2>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #228be6;">
                <p style="margin: 0; color: #212529; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${description}</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #dee2e6;">
              <p style="margin: 0; color: #868e96; font-size: 12px;">
                Bu avtomatik xabar - Muammo xabarlari tizimi
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
