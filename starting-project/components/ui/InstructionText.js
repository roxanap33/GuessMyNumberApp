import { Text, StyleSheet } from "react-native";
import { Colors } from "../../util/colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
