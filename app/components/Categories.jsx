import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { colors } from "../assets/colors";
import useStateContext from "../hooks/useStateContext";
import TodoCard from "./TodoCard";
import { useQuery } from "react-query";
import { getTodos } from "../api/api";

const Categories = ({ navigation }) => {
  const { todoWithSearch, setTodoWithSearch, setTodos } = useStateContext();
  const flatListRef = useRef();
  const {
    data: todos,
    isError,
    isLoading,
    error,
  } = useQuery("todos", getTodos);

  useEffect(() => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
    setTodoWithSearch(todos?.data);
    setTodos(todos?.data);
  }, [todos]);

  if (isLoading)
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size={50} />
      </View>
    );
  if (isError)
    return (
      <View>
        <Text>{JSON.stringify(error)}</Text>
      </View>
    );

  return (
    <View className="mt-4">
      <Text className="text-xl p-2 py-4 font-bold text-gray-300">
        Todo list
      </Text>
      {todoWithSearch?.length === 0 && (
        <View className="p-5">
          <Text className="text-slate-400 font-bold text-lg">
            Add new todo using the + icon
          </Text>
        </View>
      )}
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={todoWithSearch}
        // keyExtractor={(item) => item.title}
        contentContainerStyle={{
          justifyContent: "center",
          // alignItems: "center",
          paddingBottom: 350,
          // backgroundColor: "red",
        }}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TodoCard
              navigation={navigation}
              id={item._id}
              title={item.title}
              content={item.content}
            />
          );
        }}
      />
    </View>
  );
};

export default Categories;
