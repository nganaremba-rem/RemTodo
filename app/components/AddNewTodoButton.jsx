import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../assets/colors";

const AddNewTodoButton = ({ navigation }) => {
  const [showOption, setShowOption] = useState(false);
  return (
    <>
      <View className="rounded-full absolute bottom-10 right-0">
        {/* <Modal
          transparent={true}
          visible={showOption}
          animationType="fade"
          onRequestClose={() => setShowOption(false)}
        >
          <TouchableOpacity
            className="flex-1"
            activeOpacity={1}
            onPressOut={() => setShowOption(false)}
          >
            <TouchableOpacity
              style={{ backgroundColor: "#bbb" }}
              className="p-2 absolute shadow-sm bottom-32 right-7 w-56 rounded-lg gap-2"
            >
              <View>
                <Button
                  title="Add New Todo"
                  onPress={() => {
                    navigation.navigate("CreateTodo");
                    setShowOption(false);
                  }}
                />
              </View>
              <View>
                <Button
                  title="Create New Category"
                  color={"rgba(205,27,123,1)"}
                />
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal> */}

        <TouchableOpacity onPress={() => navigation.navigate("CreateTodo")}>
          <Ionicons name="add-circle" size={70} color={`${colors.orange}`} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddNewTodoButton;
