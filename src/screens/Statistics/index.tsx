import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'

import theme from '../../theme'

import { Container, StatisticsGeneral, Header, Teste } from './style'
import { Percent } from '../../components/Percent'

export function Statistics(){
    const navigate = useNavigation()

    function handleBack() {
        navigate.navigate('Main');
    }

    return(
        <Container>
            <Header>
                <TouchableOpacity onPress={handleBack}>
                    <Icon name='arrow-left' style={{fontSize: 28}} color={theme.COLORS.GREEN_DARK} />
                </TouchableOpacity>
                <Percent color='PRIMARY' button='hide' text='80.69%' description='das refeições dentro da dieta' width='DEFAULT'/>
            </Header>
            <StatisticsGeneral>
                <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD, fontSize: theme.FONT_SIZE.MD, paddingBottom: 23 }} >Estatíscas Gerais</Text>
                <Percent color='DEFAULT' button='hide' text='22' description='das refeições dentro da dieta' width='FULL'/>
                <Percent color='DEFAULT' button='hide' text='109' description='das refeições dentro da dieta' width='FULL'/>
                <Teste>
                    <Percent color='PRIMARY' button='hide' text='99' description='refeições dentro da dieta' width='DEFAULT'/>
                    <Percent color='SECONDARY' button='hide' text='10' description='refeições dentro da dieta' width='DEFAULT'/>
                </Teste>
            </StatisticsGeneral>
        </Container>
    )
}