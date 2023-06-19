import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Coordinate } from "../@types/type";

const Food = ({ x, y }: Coordinate): JSX.Element => {
    return <Text style={[{ top: y * 10, left: x * 10 }, styles.food]}>🍎</Text>;
  };
  
  const styles = StyleSheet.create({
    food: {
      width: 20,
      height: 20,
      borderRadius: 7,
      position: "absolute",
    },
  });
  
export default Food;
