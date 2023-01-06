import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";
import { colors } from "../assets/colors";
import useStateContext from "../hooks/useStateContext";

const Search = () => {
  const { todos, setTodoWithSearch } = useStateContext();
  const handleSearch = (text) => {
    const searchRegex = new RegExp(text, "gi");
    const newTodo = todos.filter(
      (todo) =>
        todo.title.match(searchRegex) || todo.content.match(searchRegex),
    );
    setTodoWithSearch(newTodo);
  };

  return (
    <View
      style={{ backgroundColor: colors.lightGray }}
      className="flex-row  gap-2 px-2 rounded-xl  text-white w-full items-center"
    >
      <Ionicons
        style={{
          position: "absolute",
        }}
        name="search-circle-sharp"
        size={40}
        color="#999"
      />
      <TextInput
        className="flex-1 text-lg text-white px-3 pl-10 py-1 placeholder:text-white"
        placeholder="Search"
        placeholderTextColor={"#999"}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default Search;
