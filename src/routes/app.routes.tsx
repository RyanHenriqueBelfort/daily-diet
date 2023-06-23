import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Main } from '../screens/Main'
import { Statistics } from '../screens/Statistics'
import { NewMeal } from '../screens/NewMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Main' component={Main}/>
            <Screen name='Statistics' component={Statistics}/>
            <Screen name='NewMeal' component={NewMeal}/>
        </Navigator>
    )
}