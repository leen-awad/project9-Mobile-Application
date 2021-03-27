import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Alphabet from "./src/Screen/Alphabet";
import HomePage from "./src/Screen/HomePage";
import NumberPage from "./src/Screen/NumberPage";
import colors from "./src/Screen/colors";
import shaps from "./src/Screen/shaps";
import StoriesScreen from "./src/Screen/StoriesScreen";
import storyDetails from "./src/Screen/storyDetails";
import SignInPage from "./src/Screen/SignInPage";
import TasksScreen from "./src/Screen/TasksScreen";
console.disableYellowBox = true;
const navigator = createStackNavigator(
  {
    SignInPage: SignInPage,
    Alphabet: Alphabet,
    HomePage: HomePage,
    NumberPage: NumberPage,
    colors: colors,
    shaps: shaps,
    StoriesScreen: StoriesScreen,
    storyDetails: storyDetails,
    TasksScreen: TasksScreen,
  },
  {
    initialRouteName: "SignInPage",
    defaultNavigationOptions: {
      title: "ABC World",
    },
  }
);
export default createAppContainer(navigator);
