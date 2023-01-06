import React from "react";
import { ActivityIndicator, View } from "react-native";

const CustomActivityIndication = () => {
  return (
    <View className="absolute inset-0 z-20 justify-center items-center">
      <ActivityIndicator size={50} />
    </View>
  );
};

export default CustomActivityIndication;
