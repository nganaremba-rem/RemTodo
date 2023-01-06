import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { colors } from "../assets/colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Search from "../components/Search";
import Logo from "../components/Logo";
import AddNewTodoButton from "../components/AddNewTodoButton";
import Categories from "../components/Categories";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className={`flex-1 relative`}>
      <Logo navigation={navigation} />
      <Search navigation={navigation} />
      <Categories navigation={navigation} />

      <AddNewTodoButton navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
