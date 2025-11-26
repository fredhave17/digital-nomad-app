import { Redirect, Stack } from "expo-router";

const isSignedIn = false;

export default function ProtectedLayout() {
  if (isSignedIn) {
    return <Redirect href="/(protected)/sign-in" />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tab)" />
    </Stack>
  );
}
