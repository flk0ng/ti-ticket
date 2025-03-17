import { Loader, Center,Stack,Text } from "@mantine/core";

export const FullScreenLoader = () => (
    <Center style={{ height: '100vh' }}>
      <Stack justify={'center'} align={'center'}>
        <Loader size="lg" variant="dots" />
        <Text align="center" mt="md">
          Cargando...
        </Text>
      </Stack>
    </Center>
  );