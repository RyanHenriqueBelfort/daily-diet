import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
    padding: 16px 24px; 
    border-radius: 6px;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const TextCenter = styled.Text`
    font-size: 14px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    text-align: center;
    color: ${({theme}) => theme.COLORS.GRAY_100};
`
