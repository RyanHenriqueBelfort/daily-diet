import { View, Text } from "react-native";
import { Main, colorStyleStatus, Status, colorBackgroundColor } from "./style";

interface MealProps {
    text: string;
    status: colorStyleStatus
    colorBackGroud: colorBackgroundColor
}

export function Option({text ,status ='PRIMARY', colorBackGroud = 'DEFAULT'}: MealProps) {
    return (
        <Main colorBackgroundColor={colorBackGroud}>
            <Status color={status}/>
            <Text>{text}</Text>
        </Main>
    )
}