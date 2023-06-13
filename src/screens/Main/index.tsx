import { View, Image } from "react-native";
import { Container, Photo, Header, TextPercent, Text } from "./style";

import logo from '../../assets/Logo.png'
import photo from '../../assets/ami.jpg'
import { Percent } from "../../components/Percent";


export function Main() {
    return (
        <Container>
            <Header>
                <Image source={logo}/>
                <Photo source={photo}/>
            </Header>
            <Percent />
        </Container>
    )
}

