import  styled  from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 0 24px 0 24px;

`
export const Header = styled.View`
   flex-direction: row;
   justify-content: space-between;
   margin-top: 30px;
   margin-bottom: 32px;
`

export const Photo = styled.Image`
    border-radius: 100px;
    width: 40px;
    height: 40px;
`
export const Meals = styled.View`
    margin-top: 40px;
`
export const ButtonNewMeal = styled.TouchableOpacity`
    flex-direction: row;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    margin-top: 8px; 
    padding: 16px 24px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const DayList = styled.View`
    padding-top: 12px;
    height: 400px;
`
