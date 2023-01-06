import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../assets/colors";

const Logo = () => {
  return (
    <View className="py-4 text-white flex-row items-center gap-2 mb-2">
      <AntDesign name="appstore1" size={24} color={`${colors.orange}`} />
      <Text className="text-2xl font-extrabold text-white">RemTodo</Text>
    </View>
  );
};

export default Logo;
