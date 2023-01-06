import React from "react";
import { SafeAreaView } from "react-native";
import AddNewTodoButton from "../components/AddNewTodoButton";
import Categories from "../components/Categories";
import Logo from "../components/Logo";
import Search from "../components/Search";

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
