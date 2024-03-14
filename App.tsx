import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StatusBar, View } from "react-native";
import { TodoContextProvider } from "./src/contexts/TodoContext";
import Home from "./src/screens/Home";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={handleOnLayout}>
      <TodoContextProvider>
        <Home />
      </TodoContextProvider>

      <StatusBar barStyle="light-content" />
    </View>
  );
}
