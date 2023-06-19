import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../styles/colors";

interface HeaderProps {
  reloadGame: () => void;
  pauseGame: () => void;
  isPaused: boolean;
  score: number;
}

const Header = ({
  reloadGame,
  pauseGame,
  isPaused,
  score,
}: HeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={reloadGame}>
        <Ionicons name="reload-circle" size={35} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={pauseGame}>
        <FontAwesome
          name={isPaused ? "play-circle" : "pause-circle"}
          size={35}
          color={Colors.primary}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 22, fontWeight: "bold", color: Colors.primary }}>
      🍎{score}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: Colors.primary,
    borderWidth: 12,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomWidth: 0,
    padding: 15,
    backgroundColor: Colors.background,
  },
});
