import  styled  from "styled-components/native";

export type IconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    color: IconTypeStyleProps
}


export const PercentView = styled.View <Props>`
    flex-direction: column;
    margin-top: 32px;
    align-items: center;
    border-radius: 8px;
    padding: 5px 5px 20px 5px;
    background-color: ${({theme, color}) =>  color === 'PRIMARY'? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

// export const Icon = styled(MaterialIcons).attrs<Props>(({theme, color}) => ({
//     size: 24,
// }))``;
