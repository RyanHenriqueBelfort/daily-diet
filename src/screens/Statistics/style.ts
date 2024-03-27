import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export type IconTypeStyleProps = 'PRIMARY' | 'SECONDARY' ;

type Props = {
  color: IconTypeStyleProps
}

export const Container = styled(SafeAreaView) <Props>`
  flex: 1;
  background-color: ${({color ,theme}) => color === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`
export const Header = styled.View`
  padding: 24px;
`

export const StatisticsGeneral = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  gap: 12px;
  display: flex;
  height: 100%;
  padding-top: 33px;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 20px;
  `

export const Teste = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`