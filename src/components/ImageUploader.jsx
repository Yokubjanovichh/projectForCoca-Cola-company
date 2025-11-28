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
  Button,
} from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";

export function ImageUploader({ value, onChange, error }) {
  const [previews, setPreviews] = useState([]);
  const openRef = useRef(null);

  const handleDrop = (files) => {
    const currentFiles = Array.isArray(value) ? value : [];
    const newFiles = [...currentFiles, ...files].slice(0, 5); // Max 5 rasmlar
    onChange(newFiles);

    // Create previews
    const newPreviews = [];
    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        newPreviews.push({ file, preview: e.target.result });
        if (newPreviews.length === newFiles.length) {
          setPreviews(newPreviews);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemove = (index) => {
    const newFiles = [...value];
    newFiles.splice(index, 1);
    onChange(newFiles);

    const newPreviews = [...previews];
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);
  };

  if (previews.length > 0) {
    return (
      <Stack gap="md">
        {previews.map((item, index) => (
          <Paper
            key={index}
            p="md"
            radius="md"
            withBorder
            style={{ position: "relative" }}
          >
            <ActionIcon
              color="red"
              size="lg"
              radius="xl"
              variant="filled"
              onClick={() => handleRemove(index)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 1,
              }}
              aria-label="Rasmni o'chirish"
            >
              <IconX size={18} />
            </ActionIcon>

            <Image
              src={item.preview}
              alt={`Rasm ${index + 1}`}
              radius="sm"
              fit="contain"
              mah={300}
            />

            <Text size="xs" c="dimmed" mt="xs" ta="center">
              {value[index]?.name} ({(value[index]?.size / 1024).toFixed(0)} KB)
            </Text>
          </Paper>
        ))}

        {previews.length < 5 && (
          <Button
            variant="light"
            leftSection={<IconPhoto size={16} />}
            onClick={() => openRef.current?.()}
          >
            Yana rasm qo'shish ({previews.length}/5)
          </Button>
        )}
      </Stack>
    );
  }

  return (
    <Dropzone
      openRef={openRef}
      onDrop={handleDrop}
      radius="md"
      accept={IMAGE_MIME_TYPE}
      maxSize={5 * 1024 * 1024}
      maxFiles={5}
      multiple
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
            Rasmlarni bu yerga torting yoki tanlash uchun bosing
          </Text>
          <Text size="sm" c="dimmed" inline mt={7} ta="center">
            Muammo rasmlarini yuklang (maksimal 5 ta, har biri 5MB)
          </Text>
          <Text size="xs" c="dimmed" inline mt={4} ta="center">
            Qo'llab-quvvatlanadi: JPG, PNG, WebP
          </Text>
        </div>
      </Stack>
    </Dropzone>
  );
}
