import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Main } from '../screens/Main'
import { Statistics } from '../screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Main' component={Main}/>
            <Screen name='Statistics' component={Statistics}/>
        </Navigator>
    )
}