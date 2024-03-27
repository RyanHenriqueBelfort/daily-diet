import { Dispatch } from 'react'
import {  useNavigation  } from "@react-navigation/native";

import { Button as ButtonStyled, TextCenter } from './styte'
import { PropsRouter } from '../../routes/app.routes';

import Icon from "react-native-vector-icons/Feather";

import { buttonWhite } from './styte'
import { Text} from "react-native";

interface ButtonProps {
    onPress?: Dispatch<React.SetStateAction<boolean>>
    fc?: () => void
    name: string
    navigate?: 'Fedback'| 'Main' | 'Edit'
    buttonWhiteMode?: buttonWhite
    icon?: string
}

export function Button({name, navigate, buttonWhiteMode = 'FALSE', icon = '', onPress, fc}: ButtonProps) {
    const navigation = useNavigation<PropsRouter>()

    function handleNavigate() {
        if (navigate === 'Main') {
            navigation.navigate('Main')
        }
        if (navigate === 'Fedback') {
            navigation.navigate('Feedback')
        }
        if (navigate === 'Edit') {
            navigation.navigate('Edit')
        }
    }
    function teste() {
        onPress(true)
    }

    return(
        <ButtonStyled onPress={navigate ? handleNavigate : teste} color={buttonWhiteMode}>
            <TextCenter color={buttonWhiteMode}>
            <Icon 
                name={icon}
            />
              {''} {name}
            </TextCenter>
        </ButtonStyled>
    )
}