import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { PercentView, TextPercent, SubTextPercent, IconTypeStyleProps, IconView} from './style'

import theme from '../../theme'

interface PercentProps {
    color: IconTypeStyleProps
}

export function Percent({ color='PRIMARY' }: PercentProps) {
    return (
        <PercentView color={color}>
            <IconView>
                <Icon name='arrow-up-right' style={{fontSize: 28}} color={color === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK }/>
            </IconView>
            <TextPercent>80.69%</TextPercent>
            <SubTextPercent>das refeições dentro da dieta</SubTextPercent>
        </PercentView>
    )
}