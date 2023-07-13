import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Main } from "../screens/Main";
import { Statistics } from "../screens/Statistics";
import { NewMeal } from "../screens/NewMeal";
import { Feedback } from "../screens/Feedback";

const { Navigator, Screen } = createNativeStackNavigator();

type Routes = {
  Main: undefined;
  Statistics: undefined;
  NewMeal: undefined;
  Feedback: undefined;
};

export type PropsRouter = NativeStackNavigationProp<Routes>;

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={Main} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="NewMeal" component={NewMeal} />
      <Screen name="Feedback" component={Feedback} />
    </Navigator>
  );
}
