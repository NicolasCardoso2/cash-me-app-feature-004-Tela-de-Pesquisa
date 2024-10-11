import AuthLayout from './AuthLayout';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <AuthLayout>
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </AuthLayout>
  );
}
