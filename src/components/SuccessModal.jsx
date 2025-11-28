import { Modal, Text, Stack, Button, ThemeIcon } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

export function SuccessModal({ opened, onClose, onSendAnother }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="sm"
      withCloseButton={false}
      radius="md"
    >
      <Stack align="center" gap="lg" py="xl">
        <ThemeIcon color="green" size={80} radius="xl" variant="light">
          <IconCircleCheck size={50} stroke={2} />
        </ThemeIcon>

        <Stack align="center" gap="xs">
          <Text size="xl" fw={600} ta="center">
            Xabar muvaffaqiyatli yuborildi!
          </Text>
          <Text size="sm" c="dimmed" ta="center">
            Sizning xabaringiz texnik xizmat guruhiga yuborildi.
          </Text>
        </Stack>

        <Stack gap="xs" style={{ width: "100%" }}>
          <Button size="md" fullWidth onClick={onSendAnother}>
            Yana xabar yuborish
          </Button>
          <Button size="md" variant="subtle" fullWidth onClick={onClose}>
            Yopish
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
