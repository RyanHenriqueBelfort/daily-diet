import  styled  from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {MaterialIcons} from '@expo/vector-icons'

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;

`
export const Header = styled.View`
   flex-direction: row;
   justify-content: space-between;
   margin-top: 30px;
`

export const Photo = styled.Image`
    border-radius: 100px;
    width: 40px;
    height: 40px;
`

export const Percent = styled.View`
    flex-direction: column;
    padding: 20px 16px;
    margin-top: 32px;

    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
    `

export const TextPercent = styled.Text`
    text-align: center;
    font-weight: 700;
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`
export const Text = styled.Text`
    text-align: center;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

// export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type }) => ({
//     size: 24,
//     color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
// }))``;