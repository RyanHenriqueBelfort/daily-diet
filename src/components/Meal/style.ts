import  styled  from "styled-components/native";

export type colorStyleStatus = 'PRIMARY' | 'SECONDARY';

type Props = {
    color: colorStyleStatus
}

export const Content = styled.TouchableOpacity`
    flex-direction:  row;
    justify-content: space-between;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
    border-radius: 6px;
    margin-top: 8px;
    padding: 14px 16px 14px 12px;
`

export const HourText = styled.Text`
    font-family: ${(({theme}) => theme.FONT_FAMILY.BOLD)};
    padding-right: 12px;
    `
export const Divider = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 12px;
`

export const Status = styled.View <Props>`
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: ${({theme, color}) => color === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`