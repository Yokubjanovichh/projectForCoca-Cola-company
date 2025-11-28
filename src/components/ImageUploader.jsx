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
  SimpleGrid,
  Box,
  FileButton,
} from "@mantine/core";
import { IconUpload, IconPhoto, IconX, IconCamera } from "@tabler/icons-react";

export function ImageUploader({ value, onChange, error }) {
  const [previews, setPreviews] = useState([]);
  const openRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleDrop = (files) => {
    const currentFiles = Array.isArray(value) ? value : [];
    const remainingSlots = 5 - currentFiles.length;
    const filesToAdd = files.slice(0, remainingSlots);
    const newFiles = [...currentFiles, ...filesToAdd];
    onChange(newFiles);

    // Create previews for all files
    const allPreviews = [];
    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        allPreviews.push({ file, preview: e.target.result });
        if (allPreviews.length === newFiles.length) {
          setPreviews(allPreviews);
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
        <SimpleGrid cols={2} spacing="xs">
          {previews.map((item, index) => (
            <Box key={index} style={{ position: "relative" }}>
              <ActionIcon
                color="red"
                size="sm"
                radius="xl"
                variant="filled"
                onClick={() => handleRemove(index)}
                style={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                  zIndex: 1,
                }}
                aria-label="Rasmni o'chirish"
              >
                <IconX size={14} />
              </ActionIcon>

              <Image
                src={item.preview}
                alt={`Rasm ${index + 1}`}
                radius="sm"
                fit="cover"
                h={120}
                w="100%"
                style={{ border: "1px solid #dee2e6" }}
              />

              <Text size="xs" c="dimmed" mt={4} ta="center" lineClamp={1}>
                {value[index]?.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {previews.length < 5 && (
          <FileButton
            ref={fileInputRef}
            onChange={handleDrop}
            accept="image/*"
            multiple
          >
            {(props) => (
              <Button
                {...props}
                variant="light"
                leftSection={<IconCamera size={16} />}
                fullWidth
              >
                Yana rasm qo'shish ({previews.length}/5)
              </Button>
            )}
          </FileButton>
        )}
      </Stack>
    );
  }

  return (
    <>
      <FileButton
        ref={openRef}
        onChange={handleDrop}
        accept="image/*"
        multiple
      >
        {(props) => (
          <Paper
            {...props}
            p="lg"
            radius="md"
            withBorder
            style={{
              cursor: "pointer",
              borderColor: error ? "var(--mantine-color-red-6)" : undefined,
              borderStyle: "dashed",
              borderWidth: 2,
              minHeight: rem(220),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack align="center" justify="center" gap="md">
              <IconCamera
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />

              <div>
                <Text size="xl" inline ta="center" fw={500}>
                  Rasmlarni tanlash uchun bosing
                </Text>
                <Text size="sm" c="dimmed" inline mt={7} ta="center">
                  Muammo rasmlarini yuklang (maksimal 5 ta, har biri 5MB)
                </Text>
                <Text size="xs" c="dimmed" inline mt={4} ta="center">
                  📸 Kamera yoki 🖼️ Galeriyadan
                </Text>
              </div>
            </Stack>
          </Paper>
        )}
      </FileButton>
    </>
  );
}
