import { View } from "react-native";
import Calculator from "./src/components/screens/Calculator";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Calculator />
    </View>
  );
}
