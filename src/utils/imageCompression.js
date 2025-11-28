import imageCompression from "browser-image-compression";

/**
 * Compress image to optimize for email sending
 * Max size: 500KB, Max dimension: 1200px
 */
export async function compressImage(file) {
  const options = {
    maxSizeMB: 0.15,
    maxWidthOrHeight: 800,
    useWebWorker: true,
    fileType: "image/jpeg",
    initialQuality: 0.6,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error("Image compression failed:", error);
    throw new Error("Rasmni siqishda xatolik. Iltimos kichikroq fayl tanlang.");
  }
}

/**
 * Convert image file to base64 string for email embedding
 */
export async function imageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

/**
 * Validate image file before upload
 */
export function validateImage(file) {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!file) {
    return { valid: false, error: "Iltimos rasm tanlang" };
  }

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: "Noto'g'ri fayl turi. Iltimos JPG, PNG yoki WebP rasm yuklang",
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: "Fayl hajmi juda katta. Maksimal hajm 5MB",
    };
  }

  return { valid: true };
}
