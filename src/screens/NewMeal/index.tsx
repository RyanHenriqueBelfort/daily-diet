import { useState, useRef, useCallback } from "react";
import { Text, TouchableOpacity, TextInput, View, Alert } from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Feather";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";

import Toast, { BaseToast } from "react-native-toast-message";

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
  Button,
  TextCenterButton,
} from "./style";
import theme from "../../theme";
import { Input } from "../../components/Input";
import { PropsRouter } from "../../routes/app.routes";
import { mealCreate } from "../../Storage/Meal/mealCreate";
import { mealsGetAll } from "../../Storage/Meal/mealsGetAll";

export function NewMeal() {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [meals, setMeals] = useState<any[]>();
  const [select, setSelect] = useState(true);

  const navigation = useNavigation<PropsRouter>();

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();
      setMeals(data);
    } catch (error) {
      Alert.alert(
        "Pessoas",
        "Não foi possível carregar as pessoas do time selecionado"
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: theme.COLORS.GREEN_DARK,
          backgroundColor: theme.COLORS.GREEN_LIGHT,
          marginTop: 35,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: "600",
        }}
        text2Style={{
          fontSize: 12,
          fontWeight: "400",
          color: "#000",
        }}
      />
    ),
  };

  function handleBack() {
    navigation.navigate("Main");
  }

  function transformDate(dateString: string) {
    const parts = dateString.split("/");
    if (parts.length === 3) {
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];

      // Certifique-se de que os valores de dia e mês tenham dois dígitos
      const formattedDay = day.padStart(2, "0");
      const formattedMonth = month.padStart(2, "0");

      const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

      return formattedDate;
    } else {
      return "Data inválida";
    }
  }

  function handleSave() {
    const dateTransformed = transformDate(date);
    let lastId = meals?.pop()?.id;
    if (lastId) {
      lastId += 1;
    } else {
      lastId = 1;
    }

    mealCreate({
      id: lastId,
      name: name,
      description: description,
      date: dateTransformed,
      hour: hour,
      status: select,
    });
    setDate("");
    setHour("");
    setName("");
    setDescription("");
    
    navigation.navigate("Feedback", {onDiet: select});
  }

  return (
    <>
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
            <Input
              onChangeText={setName}
              placeholder="Ex.: Torta de morango"
              value={name}
            />
            <TextLabel>Descrição</TextLabel>
            <TextInput
              value={description}
              onChangeText={setDescription}
              placeholder="Ex.: 3 fatias..."
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
                  placeholder="01/11/2023"
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
                  placeholder="12:30"
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
            <View></View>
            <Button key={1} onPress={handleSave}>
              <TextCenterButton>Cadastrar refeição</TextCenterButton>
            </Button>
          </Form>
        </Main>
      </Container>
      <Toast config={toastConfig} />
    </>
  );
}
