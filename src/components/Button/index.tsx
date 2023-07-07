import { Text } from 'react-native'
import { RouteProp, useNavigation,  } from "@react-navigation/native";

import { Button as ButtonStyled, TextCenter } from './styte'
import theme from '../../theme'
import { PropsRouter } from '../../routes/app.routes';

export function Button() {
    const navigation = useNavigation<PropsRouter>()


    function handleNavigate() {
        navigation.navigate('Feedback')
    }

    return(
        <ButtonStyled onPress={handleNavigate}>
            <TextCenter>Cadastrar refeição</TextCenter>
        </ButtonStyled>
    )
}