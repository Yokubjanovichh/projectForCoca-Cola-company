import { z } from "zod";

/**
 * Form validation schema using Zod
 */
export const issueFormSchema = z.object({
  image: z
    .array(z.instanceof(File))
    .min(1, { message: "Iltimos kamida 1 ta rasm yuklang" })
    .max(5, { message: "Maksimal 5 ta rasm yuklash mumkin" })
    .refine(
      (files) => files.every((file) => file.size <= 5 * 1024 * 1024),
      {
        message: "Har bir rasm 5MB dan kam bo'lishi kerak",
      }
    )
    .refine(
      (files) =>
        files.every((file) =>
          ["image/jpeg", "image/png", "image/webp"].includes(file.type)
        ),
      {
        message: "Faqat JPG, PNG va WebP rasmlar qo'llab-quvvatlanadi",
      }
    ),

  location: z
    .string()
    .min(1, { message: "Iltimos joyni tanlang" })
    .refine((val) => ["Zavod", "Sklad", "Factory", "Warehouse"].includes(val), {
      message: "Noto'g'ri joy tanlandi",
    }),

  description: z
    .string()
    .min(10, { message: "Tavsif kamida 10 ta belgidan iborat bo'lishi kerak" })
    .max(1000, { message: "Tavsif 1000 ta belgidan oshmasligi kerak" })
    .transform((val) => val.trim()),
});

/**
 * Validate form data
 */
export function validateFormData(data) {
  try {
    const validated = issueFormSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = {};
      error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
      return { success: false, errors: formattedErrors };
    }
    return { success: false, errors: { general: "Tekshiruvdan o'tmadi" } };
  }
}
