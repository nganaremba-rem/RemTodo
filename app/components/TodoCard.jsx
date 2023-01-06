import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../assets/colors";

const TodoCard = ({ id, title, content, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ViewTodo", { id })}
      className="rounded-lg p-3 w-44 h-32 m-2"
      style={{ backgroundColor: colors.lightGray }}
    >
      <Text numberOfLines={1} className="text-rose-400 text-lg font-bold">
        {title}
      </Text>
      <Text numberOfLines={4} className="text-white">
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoCard;
