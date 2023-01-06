import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import ContextProvider from "./app/context/ContextProvider";
import Home from "./app/screens/Home";
import { colors } from "./app/assets/colors";
import CreateTodo from "./app/screens/CreateTodo";
import ViewTodo from "./app/screens/ViewTodo";
import { QueryClient, QueryClientProvider } from "react-query";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <TailwindProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                animation: "fade_from_bottom",
                statusBarColor: colors.darkBg,
                contentStyle: {
                  paddingHorizontal: 16,
                  backgroundColor: colors.darkBg,
                  // paddingTop:
                  //   Platform.OS === "android" ? StatusBar.currentHeight : 0,
                },
              }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="CreateTodo" component={CreateTodo} />
              <Stack.Screen name="ViewTodo" component={ViewTodo} />
            </Stack.Navigator>
          </NavigationContainer>
        </TailwindProvider>
      </ContextProvider>
    </QueryClientProvider>
  );
}
