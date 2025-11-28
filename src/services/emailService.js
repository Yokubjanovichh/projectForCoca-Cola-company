import { compressImage, imageToBase64 } from "../utils/imageCompression";

/**
 * Send issue report via Resend API
 * @param {Object} formData - Form data containing image, location, and description
 * @returns {Promise} - Promise resolving to email send result
 */
export async function sendIssueReport(formData) {
  try {
    // Compress all images
    const compressedImages = await Promise.all(
      formData.image.map(img => compressImage(img))
    );

    // Convert to base64
    const imagesBase64 = await Promise.all(
      compressedImages.map(img => imageToBase64(img))
    );

    // Prepare data for API
    const emailData = {
      location: formData.location,
      description: formData.description,
      images: imagesBase64,
      timestamp: Date.now(),
    };

    // Send to our serverless function
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return {
        success: true,
        message: result.message || "Xabar muvaffaqiyatli yuborildi!",
      };
    } else {
      throw new Error(result.error || "Failed to send email");
    }
  } catch (error) {
    console.error("Email send error:", error);

    // Handle different error types
    if (
      error.message.includes("configuration") ||
      error.message.includes("sozlamalari")
    ) {
      return {
        success: false,
        error:
          "Email xizmati sozlanmagan. Iltimos administratorga murojaat qiling.",
      };
    }

    if (error.message.includes("compress")) {
      return {
        success: false,
        error: "Rasmni qayta ishlashda xatolik. Iltimos boshqa rasm tanlang.",
      };
    }

    if (!navigator.onLine) {
      return {
        success: false,
        error:
          "Internet aloqasi yo'q. Iltimos tarmoqni tekshirib qayta urinib ko'ring.",
      };
    }

    return {
      success: false,
      error: "Xabar yuborishda xatolik. Iltimos keyinroq qayta urinib ko'ring.",
    };
  }
}
