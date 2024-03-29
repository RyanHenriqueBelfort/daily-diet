import  styled  from "styled-components/native";

export type IconTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'DEFAULT';
export type widthStyle = 'FULL' | 'DEFAULT';

type Props = {
    color: IconTypeStyleProps
    width: widthStyle
}

export const PercentView = styled.View <Props>`
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 5px 8px 20px 8px;
    background-color: ${({theme, color}) =>  color === 'PRIMARY' && theme.COLORS.GREEN_LIGHT || color === 'SECONDARY' && theme.COLORS.RED_LIGHT || color === 'DEFAULT' && theme.COLORS.GRAY_200};
    width: ${({width}) => width === 'FULL' ? '100%' : 'auto'};
`

export const IconTouchableOpacity = styled.TouchableOpacity`
    align-self: flex-end;
`

export const TextPercent = styled.Text`
    font-weight: 700;
    font-size: 32px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const SubTextPercent = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`