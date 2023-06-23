import { useState, useRef } from "react";
import { Text, TouchableOpacity, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Feather";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";

import {
  Header,
  Container,
  TextCenter,
  Main,
  Form,
  TextLabel,
  DateTime,
  InsideTheDiet,
} from "./style";
import theme from "../../theme";
import { Percent } from "../../components/Percent";
import { Input } from "../../components/Input";
import { Option } from "../../components/Option";

export function NewMeal() {
  const dateRef = useRef<TextInputMaskProps>();
  const [date, setDate] = useState("");

  const navigation = useNavigation();

  function handleBack() {
    navigation.navigate("Main");
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleBack} style={{ width: 30 }}>
          <Icon
            name="arrow-left"
            style={{ fontSize: 28 }}
            color={theme.COLORS.GRAY_600}
          />
        </TouchableOpacity>
        <TextCenter>Nova refeição</TextCenter>
      </Header>
      <Main>
        <Form>
          <TextLabel>Nome</TextLabel>
          <Input />
          <TextLabel>Descrição</TextLabel>
          <TextInput
            editable
            multiline={true}
            numberOfLines={4}
            scrollEnabled={true}
            style={{
              borderWidth: 1,
              borderColor: theme.COLORS.GRAY_600,
              borderRadius: 6,
              padding: 10,
              height: 120,
              textAlignVertical: "top", // Alinha o texto no começo
            }}
          />
          <DateTime>
            <View style={{ width: 160 }}>
              <TextLabel>Data</TextLabel>
              <TextInputMask
                placeholder="dd/mm/yyyy"
                type="datetime"
                value={date}
                options={{ format: "DD/MM/YYYY" }}
                onChangeText={(text) => setDate(text)}
                style={{
                  borderWidth: 1,
                  borderColor: theme.COLORS.GRAY_600,
                  borderRadius: 6,
                  padding: 10,
                }}
              />
            </View>
            <View style={{ width: 160 }}>
              <TextLabel>Hora</TextLabel>
              <TextInputMask
                type="datetime"
                placeholder="hh:mm"
                value={date}
                options={{ format: "DD/MM/YYYY" }}
                onChangeText={(text) => setDate(text)}
                style={{
                  borderWidth: 1,
                  borderColor: theme.COLORS.GRAY_600,
                  borderRadius: 6,
                  padding: 10,
                }}
              />
            </View>
          </DateTime>
          <InsideTheDiet>
            <Option status="PRIMARY" text="Sim" colorBackGroud="DEFAULT"/>
            <Option status="SECONDARY" text="Não" colorBackGroud="SECONDARY"/>
          </InsideTheDiet>
        </Form>
      </Main>
    </Container>
  );
}
