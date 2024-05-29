import Icon from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/native'
import { PercentView, TextPercent, SubTextPercent, IconTypeStyleProps, IconTouchableOpacity, widthStyle} from './style'

import theme from '../../theme'

interface PercentProps {
    color: IconTypeStyleProps
    button: 'show' | 'hide'
    text: string
    description: string
    width: widthStyle
}

export function Percent({ color='PRIMARY', button='show', text, description, width='DEFAULT' }: PercentProps) {
    const navigation = useNavigation()

    function handleNavigate() {
        navigation.navigate('Statistics')
    }


    return (
        <PercentView color={color} width={width}>
            {button === 'show' ?
                <IconTouchableOpacity onPress={handleNavigate}>
                    <Icon name='arrow-up-right' style={{fontSize: 28}} color={color === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK }/>          
                </IconTouchableOpacity>
                :
                ''
            }
            <TextPercent>{text}</TextPercent>
            <SubTextPercent>{description}</SubTextPercent>
        </PercentView>
    )
}