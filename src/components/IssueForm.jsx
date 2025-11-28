import { useState, useEffect } from "react";
import {
  Paper,
  Title,
  Stack,
  Select,
  Textarea,
  Button,
  Text,
  Group,
  LoadingOverlay,
  Alert,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconSend, IconMapPin, IconFileDescription, IconExternalLink, IconAlertCircle } from "@tabler/icons-react";
import { ImageUploader } from "./ImageUploader";
import { SuccessModal } from "./SuccessModal";
import { sendIssueReport } from "../services/emailService";
import { validateFormData } from "../utils/validators";

const LOCATIONS = [
  { value: "Zavod", label: "🏭 Zavod" },
  { value: "Sklad", label: "📦 Sklad" },
];

export function IssueForm() {
  const [loading, setLoading] = useState(false);
  const [successModalOpened, setSuccessModalOpened] = useState(false);
  const [isTelegramBrowser, setIsTelegramBrowser] = useState(false);

  useEffect(() => {
    // Detect Telegram in-app browser
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isTelegram = userAgent.includes('Telegram');
    setIsTelegramBrowser(isTelegram);
  }, []);

  const form = useForm({
    initialValues: {
      image: [],
      location: "",
      description: "",
    },
    validate: {
      image: (value) => {
        if (!value || value.length === 0)
          return "Iltimos kamida 1 ta rasm yuklang";
        return null;
      },
      location: (value) => (!value ? "Iltimos joyni tanlang" : null),
      description: (value) => {
        if (!value || value.trim().length < 10) {
          return "Tavsif kamida 10 ta belgidan iborat bo'lishi kerak";
        }
        if (value.length > 1000) {
          return "Tavsif 1000 ta belgidan oshmasligi kerak";
        }
        return null;
      },
    },
  });

  const handleSubmit = async (values) => {
    // Validate form data with Zod
    const validation = validateFormData(values);

    if (!validation.success) {
      Object.entries(validation.errors).forEach(([field, message]) => {
        form.setFieldError(field, message);
      });
      notifications.show({
        title: "Xatolik",
        message: "Iltimos formani tekshirib qayta urinib ko'ring",
        color: "red",
        position: "top-right",
      });
      return;
    }

    // Check internet connection
    if (!navigator.onLine) {
      notifications.show({
        title: "Internet aloqasi yo'q",
        message: "Iltimos internetni tekshirib qayta urinib ko'ring",
        color: "orange",
        position: "top-right",
      });
      return;
    }

    setLoading(true);

    try {
      const result = await sendIssueReport(validation.data);

      if (result.success) {
        setSuccessModalOpened(true);
        form.reset();
        notifications.show({
          title: "Muvaffaqiyatli",
          message: result.message,
          color: "green",
          position: "top-right",
        });
      } else {
        notifications.show({
          title: "Xatolik",
          message: result.error,
          color: "red",
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      notifications.show({
        title: "Xatolik",
        message: "Kutilmagan xatolik yuz berdi. Iltimos qayta urinib ko'ring.",
        color: "red",
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSendAnother = () => {
    setSuccessModalOpened(false);
    form.reset();
  };

  const characterCount = form.values.description.length;
  const characterLimit = 1000;

  const openInBrowser = () => {
    const url = window.location.href;
    window.open(url, '_blank');
  };

  return (
    <>
      <Paper
        shadow="none"
        radius={0}
        p={{ base: "md", sm: "xl" }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "450px",
          height: "100%",
          backgroundColor: "white",
          overflow: "auto",
          margin: "0 auto",
        }}
      >
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: "lg", blur: 2 }}
          loaderProps={{ type: "bars" }}
        />

        <Stack gap="lg">
          <div>
            <Title order={1} size="h2" mb="xs">
              🏭 Muammo haqida xabar berish
            </Title>
          </div>

          {isTelegramBrowser && (
            <Alert 
              icon={<IconAlertCircle size={16} />} 
              title="Telegram brauzerida ochilgan" 
              color="blue"
              variant="light"
            >
              <Stack gap="xs">
                <Text size="sm">
                  Rasm yuklash uchun saytni tashqi brauzarda oching (Chrome, Safari, Yandex).
                </Text>
                <Button
                  size="xs"
                  variant="light"
                  leftSection={<IconExternalLink size={14} />}
                  onClick={openInBrowser}
                >
                  Brauzarda ochish
                </Button>
              </Stack>
            </Alert>
          )}

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
              {/* Image Upload */}
              <div>
                <ImageUploader
                  value={form.values.image}
                  onChange={(file) => form.setFieldValue("image", file)}
                  error={form.errors.image}
                />
                {form.errors.image && (
                  <Text size="xs" c="red" mt={5}>
                    {form.errors.image}
                  </Text>
                )}
              </div>

              {/* Location Select */}
              <Select
                placeholder="Muammo qayerda yuz berganini tanlang"
                data={LOCATIONS}
                leftSection={<IconMapPin size={16} />}
                required
                size="md"
                {...form.getInputProps("location")}
                styles={{
                  input: {
                    minHeight: 44,
                  },
                }}
              />

              {/* Description Textarea */}
              <div>
                <Textarea
                  placeholder="Muammoni batafsil tasvirlab bering..."
                  required
                  autosize
                  minRows={4}
                  maxRows={8}
                  size="md"
                  leftSection={<IconFileDescription size={16} />}
                  {...form.getInputProps("description")}
                  styles={{
                    input: {
                      fontSize: 16,
                    },
                  }}
                />
                <Group justify="space-between" mt={5}>
                  {form.errors.description && (
                    <Text size="xs" c="red">
                      {form.errors.description}
                    </Text>
                  )}
                  <Text
                    size="xs"
                    c={characterCount > characterLimit ? "red" : "dimmed"}
                    ml="auto"
                  >
                    {characterCount}/{characterLimit}
                  </Text>
                </Group>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                fullWidth
                leftSection={<IconSend size={20} />}
                loading={loading}
                disabled={loading}
                mt="md"
                styles={{
                  root: {
                    minHeight: 50,
                  },
                }}
              >
                Xabar yuborish
              </Button>
            </Stack>
          </form>
        </Stack>
      </Paper>

      <SuccessModal
        opened={successModalOpened}
        onClose={() => setSuccessModalOpened(false)}
        onSendAnother={handleSendAnother}
      />
    </>
  );
}
