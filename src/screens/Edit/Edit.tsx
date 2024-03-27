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
  Option,
  Status,
} from "./style";
import theme from "../../theme";
import { Percent } from "../../components/Percent";
import { Input } from "../../components/Input";
// import { Option } from "../../components/Option";
import { colorBackgroundColor } from "../../components/Option/style";
import { Button } from "../../components/Button";
import { PropsRouter } from "../../routes/app.routes";

export function Edit() {
  const [background, setBackground] = useState<colorBackgroundColor>();
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [select, setSelect] = useState(true);

  const dateRef = useRef<TextInputMaskProps>();

  const navigation = useNavigation<PropsRouter>();

  function handleBack() {
    navigation.goBack();
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
        <TextCenter>Editar refeição</TextCenter>
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
              textAlignVertical: "top", 
            }}
          />
          <DateTime>
            <View style={{ width: 160 }}>
              <TextLabel>Data</TextLabel>
              <TextInputMask
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
                value={hour}
                options={{ format: "HH:MM" }}
                onChangeText={(text) => setHour(text)}
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
            <Option
              onPress={() => setSelect(true)}
              style={{
                backgroundColor: select
                  ? theme.COLORS.GREEN_LIGHT
                  : theme.COLORS.GRAY_200,
                borderWidth: select ? 1 : 0,
                borderColor: select
                  ? theme.COLORS.GREEN_DARK
                  : theme.COLORS.GRAY_300,
              }}
            >
              <Status style={{ backgroundColor: theme.COLORS.GREEN_DARK }} />
              <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>Sim</Text>
            </Option>
            <Option
              onPress={() => setSelect(false)}
              style={{
                backgroundColor: select
                  ? theme.COLORS.GRAY_200
                  : theme.COLORS.RED_LIGHT,
                borderWidth: select ? 0 : 1,
                borderColor: select
                  ? theme.COLORS.GRAY_300
                  : theme.COLORS.RED_DARK,
              }}
            >
              <Status style={{ backgroundColor: theme.COLORS.RED_DARK }} />
              <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>Não</Text>
            </Option>
          </InsideTheDiet>
          <Button name="Salvar alterações" navigate="Fedback" key={1}/>
        </Form>
      </Main>
    </Container>
  );
}
