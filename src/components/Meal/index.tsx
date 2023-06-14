import {Text,View} from 'react-native'

import { Content, HourText, Divider, Status, colorStyleStatus } from "./style";
import theme from '../../theme';

interface MealProps {
    hour: string;
    name: string;
    stutus: colorStyleStatus
}
 
export function Meal({hour, name, stutus ='PRIMARY'}: MealProps) {
    return(
        <Content>
            <HourText>{hour}</HourText>
            <Divider style={{borderLeftWidth: 1, borderColor: theme.COLORS.GRAY_400}}>
                <Text style={{fontSize: theme.FONT_SIZE.MD}}>{name}</Text>
                <Status color={stutus}/>
            </Divider>
        </Content>
    )
}