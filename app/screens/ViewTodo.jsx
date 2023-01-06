import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteTodo, getTodoById, updateTodo } from "../api/api";
import CustomActivityIndication from "../components/CustomActivityIndication";

const ViewTodo = ({ route, navigation }) => {
  // const { todos } = useStateContext();
  const [currentTodo, setCurrentTodo] = useState({
    title: "",
    content: "",
  });
  const [editing, setEditing] = useState(false);
  const [newTodoData, setNewTodoData] = useState({});
  const queryClient = useQueryClient();

  const {
    data: todo,
    isLoading,
    isError,
    error,
  } = useQuery("todo", () => getTodoById(route.params.id));

  const {
    mutate,
    isLoading: isLoadingUpdate,
    isError: isErrorUpdate,
    error: errorUpdate,
  } = useMutation({
    mutationFn: (data) => updateTodo(data, currentTodo._id),
  });

  const {
    mutate: deleteMutate,
    isLoading: isLoadingDelete,
    isError: isErrorDelete,
    error: errorDelete,
  } = useMutation({
    mutationFn: deleteTodo,
  });

  useEffect(() => {
    return () => queryClient.removeQueries({ queryKey: "todo", exact: true });
  }, []);

  useEffect(() => {
    setCurrentTodo(todo?.data);
  }, [todo]);

  useEffect(() => {
    return () => setCurrentTodo(null);
  }, []);

  if (isLoading)
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size={50} />
      </View>
    );

  return (
    <>
      <View className="justify-between flex-row items-center">
        <Logo />
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Confirm Deletion",
              "Are you sure you want to delete?",
              [
                {
                  text: "No",
                  style: "cancel",
                },
                {
                  text: "Yes",
                  style: "default",
                  onPress: () => {
                    // deletion
                    deleteMutate(currentTodo?._id, {
                      onSuccess: () => {
                        queryClient.invalidateQueries("todos");
                        navigation.goBack();
                      },
                    });
                  },
                },
              ],
            )
          }
          className="-mt-5"
        >
          <MaterialIcons name="delete-sweep" size={34} color="#d93853" />
        </TouchableOpacity>
      </View>
      {isLoadingUpdate && <CustomActivityIndication />}
      {isLoadingDelete && <CustomActivityIndication />}

      <View className="gap-5">
        <View>
          <Text className="text-lg font-extrabold text-rose-400">Title</Text>
          {editing ? (
            <TextInput
              onChangeText={(text) =>
                setNewTodoData((prev) => ({
                  ...currentTodo,
                  ...prev,
                  title: text,
                }))
              }
              className="text-slate-300 bg-gray-800 p-2 rounded-lg text-xl font-bold"
              defaultValue={todo?.data?.title}
            />
          ) : (
            <Text
              selectable
              className="text-slate-300 bg-gray-700 p-2 rounded-lg text-xl font-bold"
            >
              {todo?.data?.title}
            </Text>
          )}
        </View>
        <View>
          <Text className="text-lg font-extrabold text-rose-400">Content</Text>
          <ScrollView
            showsVerticalScrollIndicator={true}
            style={{
              marginBottom: 350,
            }}
          >
            {editing ? (
              <TextInput
                multiline
                onChangeText={(text) =>
                  setNewTodoData((prev) => ({
                    ...currentTodo,
                    ...prev,
                    content: text,
                  }))
                }
                textAlignVertical="top"
                numberOfLines={1000}
                className="text-slate-300 max-h-52 bg-gray-800 p-2 rounded-lg text-xl font-bold"
                defaultValue={todo?.data?.content}
              />
            ) : (
              <Text
                selectable
                className="text-slate-300 max-h-52 bg-gray-700 p-2 rounded-lg text-xl font-bold"
              >
                {todo?.data?.content}
              </Text>
            )}
          </ScrollView>
        </View>
      </View>
      <View className="absolute bottom-14 right-6  shadow-lg">
        {editing ? (
          <View className="gap-5 -mt-50">
            <TouchableOpacity
              onPress={() => {
                // update data
                mutate(newTodoData, {
                  onSuccess: () => {
                    setEditing(false);
                    queryClient.invalidateQueries("todo");
                    queryClient.invalidateQueries("todos");
                  },
                });
              }}
              className="bg-green-700 rounded-full p-4"
            >
              <Feather name="save" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEditing(false)}
              className="bg-red-700 rounded-full p-4"
            >
              <Entypo name="cross" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setEditing(true)}
            className="bg-indigo-700 rounded-full p-4"
          >
            <MaterialIcons name="edit" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default ViewTodo;
