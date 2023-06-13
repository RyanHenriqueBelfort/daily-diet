import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Main } from './src/screens/Main';
import {useFonts, Nunito_400Regular, Nunito_700Bold} from '@expo-google-fonts/nunito'

import theme from './src/theme';
import { Loading } from './src/components/Loading';

export default function App() {
  const [ fontsLoaded] = useFonts({Nunito_400Regular, Nunito_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark' translucent/>
      {fontsLoaded ? <Main /> : <Loading />}
    </ThemeProvider>
  );
}
