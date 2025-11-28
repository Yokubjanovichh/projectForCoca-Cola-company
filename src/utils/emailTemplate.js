/**
 * Generate professional HTML email template
 * Optimized for all email clients (Gmail, Outlook, Apple Mail, Yahoo)
 */
export function generateEmailTemplate({
  location,
  description,
  imageBase64,
  timestamp,
}) {
  const formattedDate = new Date(timestamp).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Issue Report</title>
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
                🏭 Issue Report
              </h1>
            </td>
          </tr>

          <!-- Metadata Section -->
          <tr>
            <td style="padding: 30px 20px; background-color: #f8f9fa;">
              <table width="100%" cellpadding="8" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 8px 0;">
                    <strong style="color: #495057; font-size: 14px;">📍 Location:</strong>
                    <span style="color: #212529; font-size: 16px; margin-left: 10px; font-weight: 500;">${location}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <strong style="color: #495057; font-size: 14px;">📅 Date:</strong>
                    <span style="color: #212529; font-size: 16px; margin-left: 10px;">${formattedDate}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <strong style="color: #495057; font-size: 14px;">🔔 Status:</strong>
                    <span style="display: inline-block; background-color: #ff6b6b; color: #ffffff; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; margin-left: 10px;">NEW</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Image Section -->
          <tr>
            <td style="padding: 20px; background-color: #ffffff;">
              <h2 style="margin: 0 0 15px 0; color: #212529; font-size: 18px; font-weight: 600;">📸 Issue Photo</h2>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding: 10px; background-color: #f8f9fa; border-radius: 8px;">
                    <img src="${imageBase64}" alt="Issue Photo" style="max-width: 100%; height: auto; border-radius: 4px; display: block;" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Description Section -->
          <tr>
            <td style="padding: 20px; background-color: #ffffff;">
              <h2 style="margin: 0 0 15px 0; color: #212529; font-size: 18px; font-weight: 600;">📝 Description</h2>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #228be6;">
                <p style="margin: 0; color: #212529; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${description}</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px; background-color: #f8f9fa; text-align: center; border-top: 1px solid #dee2e6;">
              <p style="margin: 0; color: #868e96; font-size: 12px;">
                This is an automated issue report from the Industrial Issue Reporting System
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

/**
 * Generate email subject line
 */
export function generateEmailSubject(location) {
  const date = new Date().toLocaleDateString("en-GB");
  const time = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `Issue Report - ${location} - ${date} ${time}`;
}
