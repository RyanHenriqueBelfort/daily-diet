import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`



export const PercentText = styled.Text`
  align-self: center;
`