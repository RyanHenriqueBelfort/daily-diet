import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { StaticsProvider } from '../context/stacticsContex';

export function Routes(){
    return(
        <NavigationContainer>
            <StaticsProvider>
                <AppRoutes />
            </StaticsProvider>
        </NavigationContainer>
    )
}