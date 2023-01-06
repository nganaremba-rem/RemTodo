import React, { useState } from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";
import { useMutation, useQueryClient } from "react-query";
import { createTodo } from "../api/api";
import { colors } from "../assets/colors";
import Logo from "../components/Logo";

const CreateTodo = ({ navigation }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: createTodo,
  });

  const [myTodo, setMytodo] = useState({
    title: "",
    content: "",
  });

  const handleCreateTodo = () => {
    if (myTodo.title.trim() === "" || myTodo.content.trim() === "") return;
    mutate(myTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
        navigation.goBack();
      },
    });
  };

  if (isLoading)
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size={45} />
      </View>
    );

  if (isError)
    return (
      <View>
        <Text>{JSON.stringify(error)}</Text>
      </View>
    );

  return (
    <View>
      <Logo />
      <View className="rounded-lg p-2 gap-2">
        <Text className="pl-2 text-white text-xl font-bold">Title</Text>
        <TextInput
          onChangeText={(text) =>
            setMytodo((prev) => ({ ...prev, title: text.trim() }))
          }
          className="px-4 py-2 rounded-lg text-white text-lg"
          style={{ backgroundColor: colors.lightGray }}
        />
      </View>
      <View className="rounded-lg p-2 gap-2">
        <Text className="pl-2 text-white text-xl font-bold">Content</Text>
        <TextInput
          multiline
          numberOfLines={1000}
          textAlignVertical={"top"}
          allowFontScaling={true}
          onChangeText={(text) =>
            setMytodo((prev) => ({ ...prev, content: text.trim() }))
          }
          className="px-4 max-h-40 py-2 rounded-lg text-white text-lg"
          style={{ backgroundColor: colors.lightGray }}
        />
      </View>
      <View className="mt-7 px-3">
        <Button
          onPress={handleCreateTodo}
          title="Create New Todo"
          color={colors.orange}
        />
      </View>
    </View>
  );
};

export default CreateTodo;
