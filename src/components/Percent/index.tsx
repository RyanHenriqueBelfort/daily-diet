import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/native'
import { PercentView, TextPercent, SubTextPercent, IconTypeStyleProps, IconTouchableOpacity} from './style'

import theme from '../../theme'

interface PercentProps {
    color: IconTypeStyleProps
}

export function Percent({ color='PRIMARY' }: PercentProps) {
    const navigation = useNavigation()

    function handleNavigate() {
        navigation.navigate('Statistics')
    }


    return (
        <PercentView color={color}>
            <IconTouchableOpacity onPress={handleNavigate}>
                <Icon name='arrow-up-right' style={{fontSize: 28}} color={color === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK }/>          
            </IconTouchableOpacity>
            <TextPercent>80.69%</TextPercent>
            <SubTextPercent>das refeições dentro da dieta</SubTextPercent>
        </PercentView>
    )
}