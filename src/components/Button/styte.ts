import styled from 'styled-components/native'

export type buttonWhite = "TRUE" | "FALSE";

type Props = {
  color: buttonWhite;
};

export const Button = styled.TouchableOpacity<Props>`
    padding: 16px 24px; 
    border-radius: 6px;
    background-color: ${({theme, color}) => color === 'FALSE' ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
    border-width: ${({color}) => color === 'TRUE'? 1 : 0}px;
`

export const TextCenter = styled.Text<Props>`
    font-size: 14px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    text-align: center;
    color: ${({theme, color}) => color === 'FALSE' ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_600};
`
