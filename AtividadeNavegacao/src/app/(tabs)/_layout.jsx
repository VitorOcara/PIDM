import { Stack } from "expo-router";

export default function StackRouteLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Stack.Screen
        name="Cadastro"
        options={{
          title: "Cadastro",
        }}
      />
    </Stack>
  );
}
