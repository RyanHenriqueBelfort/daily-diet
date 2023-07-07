import styled from 'styled-components/native'
import theme from '../../theme'

export type colorStyleStatus = 'PRIMARY' | 'SECONDARY';
export type colorBackgroundColor = 'PRIMARY' | 'SECONDARY' | 'DEFAULT' ;
export type Pressed = 'TRUE' | 'FALSE'; 


type Props = {
    color?: colorStyleStatus
    colorBackgroundColor?: colorBackgroundColor
    pressed?: Pressed
}

export const Main = styled.TouchableOpacity <Props>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: ${({theme, colorBackgroundColor}) => colorBackgroundColor === 'PRIMARY' && theme.COLORS.GREEN_LIGHT || colorBackgroundColor === 'SECONDARY' && theme.COLORS.RED_LIGHT || colorBackgroundColor === 'DEFAULT' && theme.COLORS.GRAY_200};
    border-radius: 8px;
    border:  ${({colorBackgroundColor}) => colorBackgroundColor === 'DEFAULT' ? '0px' : '1px' }  solid ${({theme, colorBackgroundColor}) =>  colorBackgroundColor === 'PRIMARY' && theme.COLORS.GREEN_DARK || colorBackgroundColor === 'SECONDARY' && theme.COLORS.RED_DARK};
    width: 160px;
    /* border: 1px solid; */
`

export const Status = styled.View <Props>`
    margin-right: 8px;
    width: 8px;
    height: 8px;
    border-radius: 100px;
    background-color: ${({theme, color}) => color === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`