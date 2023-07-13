import {  useNavigation,  } from "@react-navigation/native";

import { Button as ButtonStyled, TextCenter } from './styte'
import { PropsRouter } from '../../routes/app.routes';

interface ButtonProps {
    name: string
    navigate: 'Fedback'| 'Main'
}

export function Button({name, navigate}: ButtonProps) {
    const navigation = useNavigation<PropsRouter>()


    function handleNavigate() {
        if (navigate === 'Main') {
            navigation.navigate('Main')
            return
        }
        navigation.navigate("Feedback")
    }

    return(
        <ButtonStyled onPress={handleNavigate}>
            <TextCenter>{name}</TextCenter>
        </ButtonStyled>
    )
}