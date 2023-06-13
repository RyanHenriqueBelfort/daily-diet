import  styled  from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type IconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    color: IconTypeStyleProps
}


export const PercentView = styled.View <Props>`
    flex-direction: column;
    margin-top: 32px;
    align-items: center;
    border-radius: 8px;
    padding: 10px 8px 20px 8px;
    background-color: ${({theme, color}) =>  color === 'PRIMARY'? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const IconView = styled.View`
    align-self: flex-end;
`

export const TextPercent = styled.Text`
    font-weight: 700;
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const SubTextPercent = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

// export const Icon = styled(MaterialIcons).attrs<Props>(({theme, color}) => ({
//     size: 24,
// }))``;