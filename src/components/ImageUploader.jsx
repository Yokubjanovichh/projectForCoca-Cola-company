import { useRef, useState } from "react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import {
  Group,
  Text,
  rem,
  Image,
  Stack,
  ActionIcon,
  Paper,
} from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";

export function ImageUploader({ value, onChange, error }) {
  const [preview, setPreview] = useState(null);
  const openRef = useRef(null);

  const handleDrop = (files) => {
    const file = files[0];
    if (file) {
      onChange(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    onChange(null);
    setPreview(null);
  };

  if (preview) {
    return (
      <Paper p="md" radius="md" withBorder style={{ position: "relative" }}>
        <ActionIcon
          color="red"
          size="lg"
          radius="xl"
          variant="filled"
          onClick={handleRemove}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
          }}
          aria-label="Remove image"
        >
          <IconX size={18} />
        </ActionIcon>

        <Image
          src={preview}
          alt="Issue preview"
          radius="sm"
          fit="contain"
          mah={300}
        />

        <Text size="xs" c="dimmed" mt="xs" ta="center">
          {value?.name} ({(value?.size / 1024).toFixed(0)} KB)
        </Text>
      </Paper>
    );
  }

  return (
    <Dropzone
      openRef={openRef}
      onDrop={handleDrop}
      radius="md"
      accept={IMAGE_MIME_TYPE}
      maxSize={5 * 1024 * 1024}
      maxFiles={1}
      style={{
        minHeight: rem(220),
        cursor: "pointer",
        borderColor: error ? "var(--mantine-color-red-6)" : undefined,
      }}
    >
      <Stack
        align="center"
        justify="center"
        gap="md"
        style={{ minHeight: rem(200), pointerEvents: "none" }}
      >
        <Dropzone.Accept>
          <IconUpload
            style={{
              width: rem(52),
              height: rem(52),
              color: "var(--mantine-color-blue-6)",
            }}
            stroke={1.5}
          />
        </Dropzone.Accept>

        <Dropzone.Reject>
          <IconX
            style={{
              width: rem(52),
              height: rem(52),
              color: "var(--mantine-color-red-6)",
            }}
            stroke={1.5}
          />
        </Dropzone.Reject>

        <Dropzone.Idle>
          <IconPhoto
            style={{
              width: rem(52),
              height: rem(52),
              color: "var(--mantine-color-dimmed)",
            }}
            stroke={1.5}
          />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline ta="center" fw={500}>
            Rasmni bu yerga torting yoki tanlash uchun bosing
          </Text>
          <Text size="sm" c="dimmed" inline mt={7} ta="center">
            Muammo rasmini yuklang (maksimal 5MB)
          </Text>
          <Text size="xs" c="dimmed" inline mt={4} ta="center">
            Qo'llab-quvvatlanadi: JPG, PNG, WebP
          </Text>
        </div>
      </Stack>
    </Dropzone>
  );
}
