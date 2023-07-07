import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  position: relative;
`;

export const Header = styled.View`
  display: flex;
  padding: 24px;
`;

export const TextCenter = styled.Text`
  position: absolute;
  top: 24px;
  right: 40%;
  font-size: 18px;
  align-items: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Main = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  gap: 12px;
  display: flex;
  height: 100%;
  padding-top: 33px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
`;

export const Form = styled.View`
  /* border: 1px solid red; */
  height: 100%;

`

export const TextLabel = styled.Text`
  font-size: 15px;
  margin-bottom: 4px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD}
`

export const DateTime = styled.View`
  margin-top: 24px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`

export const InsideTheDiet = styled.View`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 160px;
`

export const Option = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: ${({theme}) => theme.COLORS.GRAY_200};
    border-radius: 8px;
    width: 160px;
`
export const Status = styled.View`
    margin-right: 8px;
    width: 8px;
    height: 8px;
    border-radius: 100px;
    background-color: ${({theme}) =>  theme.COLORS.GREEN_DARK};
`