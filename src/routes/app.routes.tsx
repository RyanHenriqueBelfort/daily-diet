import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Main } from "../screens/Main";
import { Statistics } from "../screens/Statistics";
import { NewMeal } from "../screens/NewMeal";
import { Feedback } from "../screens/Feedback";
import { ViewMeal } from "../screens/ViewMeal";
import { Edit } from "../screens/Edit/Edit";

const { Navigator, Screen } = createNativeStackNavigator();

type Routes = {
  Main: undefined;
  Statistics: undefined;
  NewMeal: undefined;
  Feedback: {
    onDiet: boolean;
  };
  ViewMeal: { name: string, date: string, description: string, hour: string, status: boolean, id: number};
  Edit: { id: number};
};

export type PropsRouter = NativeStackNavigationProp<Routes>;

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Main" component={Main} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="NewMeal" component={NewMeal} />
      <Screen name="Feedback" component={Feedback} />
      <Screen name="ViewMeal" component={ViewMeal} />
      <Screen name="Edit" component={Edit} />
    </Navigator>
  );
}
