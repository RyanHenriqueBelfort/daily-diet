import { useState,   } from 'react'
import { View, Text } from "react-native";
import { Main, colorStyleStatus, Status, colorBackgroundColor, Pressed } from "./style";

type MealProps = {
    text: string;
    status: colorStyleStatus;
    colorBackGroud: colorBackgroundColor;
    pressed?: Pressed
}

export function Option({text ,status ='PRIMARY', colorBackGroud = 'DEFAULT', pressed, ...rest}: MealProps) {
    const [backgroundColor, setBackgroundColor] = useState<colorBackgroundColor>()  

    return (
        <Main colorBackgroundColor={colorBackGroud} {...rest}>
            <Status color={status}/>
            <Text>{text}</Text>
        </Main>
    )
}