import { View, SafeAreaView, Platform, StatusBar } from "react-native";
import TodoScreen from "./screen/todoscreen";

export default function App() {
  return (
    <SafeAreaView style={{
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }}>
      <View>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}
