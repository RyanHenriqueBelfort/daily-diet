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
    console.log(colorBackGroud)
    const [backgroundColor, setBackgroundColor] = useState<colorBackgroundColor>()  


    // function handlePress() {
    //     console.log('teste')
    //     pressed === 'TRUE' ? setBackgroundColor(backgroundColor) : setBackgroundColor('DEFAULT')
    // }

    return (
        <Main colorBackgroundColor={colorBackGroud} {...rest}>
            <Status color={status}/>
            <Text>{text}</Text>
        </Main>
    )
}