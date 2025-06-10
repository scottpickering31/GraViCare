import { Stack } from "expo-router";
import React from "react";

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="epilepsydata" options={{ headerShown: false }} />
      <Stack.Screen name="recorddata" options={{ headerShown: false }} />
    </Stack>
  );
}
