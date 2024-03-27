import styled from 'styled-components/native'
import { SafeAreaView } from "react-native-safe-area-context";

export const Main = styled(SafeAreaView)`
    padding: 32px;
    justify-content: center;
    align-items: center;
    flex: 1;
`

export const Text = styled.Text`
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.GREEN_DARK};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-bottom: 8px;
`
export const Ilustration = styled.View`
    margin-top: 40px;
`

export const Image = styled.Image`
    margin-bottom: 32px;
`