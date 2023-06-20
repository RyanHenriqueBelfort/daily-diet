import { View, Image, Text } from "react-native";
import { Container, Photo, Header, Meals, ButtonNewMeal, DayList } from "./style";
import Icon from 'react-native-vector-icons/Feather' 


import theme from "../../theme";
import logo from '../../assets/Logo.png'
import photo from '../../assets/ami.jpg'
import { Percent } from "../../components/Percent";
import { formatDate } from "../../util/FormatDate";
import { Meal } from "../../components/Meal";


export function Main() {

    console.log(formatDate())
    return (
        <Container>
            <Header>
                <Image source={logo}/>
                <Photo source={photo}/>
            </Header>
            <Percent color="PRIMARY" button="show" text="80.69%" description="das refeições dentro da dieta" width="DEFAULT"/>
            <Meals>
                <Text style={{fontFamily: theme.FONT_FAMILY.REGULAR, fontSize: theme.FONT_SIZE.MD }}>Refeições</Text>
                <ButtonNewMeal>
                    <Icon name="plus" color={theme.COLORS.WHITE} size={theme.FONT_SIZE.XL} style={{paddingRight: 12}}/>
                    <Text style={{fontFamily: theme.FONT_FAMILY.BOLD, fontSize: theme.FONT_SIZE.MD, color: theme.COLORS.WHITE}}>Nova Refeição</Text>
                </ButtonNewMeal>
                <DayList>
                    <Text style={{fontFamily: theme.FONT_FAMILY.BOLD, fontSize: theme.FONT_SIZE.LG}}>{formatDate()}</Text>
                    <Meal hour="20:00" name="X-tudo" stutus="SECONDARY"/>
                    <Meal  hour="22:00" name="Maçã" stutus="PRIMARY"/>
                </DayList>
                <DayList>
                    <Text style={{fontFamily: theme.FONT_FAMILY.BOLD, fontSize: theme.FONT_SIZE.LG}}>{formatDate()}</Text>
                    <Meal hour="20:00" name="X-tudo" stutus="SECONDARY"/>
                    <Meal  hour="22:00" name="Maçã" stutus="PRIMARY"/>
                </DayList>

            </Meals>
        </Container>
    )
}

