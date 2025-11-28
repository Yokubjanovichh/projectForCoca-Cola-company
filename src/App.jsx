import { MantineProvider, Container, Stack, Text, Anchor } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { IssueForm } from "./components/IssueForm";
import { theme } from "./theme";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dropzone/styles.css";

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications position="top-right" zIndex={2000} />

      <Container
        size="100%"
        p={0}
        m={0}
        style={{
          minHeight: "100dvh",
          maxHeight: "100dvh",
          height: "100dvh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <Stack gap={0} style={{ height: "100%", flex: 1, overflow: "hidden" }}>
          <IssueForm />
        </Stack>
      </Container>
    </MantineProvider>
  );
}

export default App;
