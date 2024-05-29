import { useState, useCallback } from "react";
import { Text, TouchableOpacity, TextInput, View, Alert } from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";

import Icon from "react-native-vector-icons/Feather";
import { mealsGetAll } from "../../Storage/Meal/mealsGetAll";
import { TextInputMask } from "react-native-masked-text"; 
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
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { PropsRouter } from "../../routes/app.routes";
import { Loading } from "../../components/Loading";
import { mealEdit } from "../../Storage/Meal/mealEdit";
import Modal from "react-native-modal";
import { ButtonModal, ContentViewModal, TextCenterButton, TextModal, ViewButtonsModal } from "../ViewMeal/style";

type RouteParams = {
  name: string;
  description: string;
  date: string;
  hour: string;
  status: boolean;
  id: number;
};

export function Edit() {
  const [meal, setMeal] = useState<RouteParams>();
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(true);
  const [modal, setModal] = useState(false);

  const navigation = useNavigation<PropsRouter>();

  const route = useRoute();
  const { id } = route.params as RouteParams;

  function handleBack() {
    navigation.navigate('Main');
  }

  function transformarData(data: string) {
    let [ano, mes, dia] = data.split('-');
    let novaData = `${dia}/${mes}/${ano}`;
    return novaData;
}

  const fetchAndSetMeals = async () => {
    try {
      const data = await mealsGetAll();
      const result = data.find((data) => data.id === id);
      setMeal(result);
      setName(result.name);
      setDescription(result.description);
      setDate(transformarData(result.date));
      setHour(result.hour);
      setSelect(result.status);
    } catch (error) {
      handleFetchError();
    }
  };

  const toggleModal = async () => {
    setModal(!modal);
  };

  const handleFetchError = () => {
    Alert.alert(
      "Pessoas",
      "Não foi possível carregar as pessoas do timer selecionado"
    );
  };

  function transformDate(dateString: string) {
    const parts = dateString.split("/");
    if (parts.length === 3) {
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];

      const formattedDay = day.padStart(2, "0");
      const formattedMonth = month.padStart(2, "0");

      const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

      return formattedDate;
    } else {
      return "Data inválida";
    }
  }

  async function handleEditar() {
    await handleSave();
    setModal(!modal);
  }


  function handleSave() {
    const dateTransformed = transformDate(date);
    mealEdit(id, {
      name: name,
      description: description,
      date: dateTransformed,
      hour: hour,
      status: select,
    });
  }

  useFocusEffect(
    useCallback(() => {
      fetchAndSetMeals();
    }, [])
  );

  return (
    <>
    {modal && (
        <Modal
          isVisible={modal}
          backdropOpacity={0.5}
          onBackdropPress={() => setModal(false)}
        >
          <ContentViewModal>
            <TextModal>
              Deseja salvar a edição do registro?
            </TextModal>
            <ViewButtonsModal>
              <ButtonModal color="TRUE" onPress={toggleModal}>
                <TextCenterButton color="TRUE">Cancelar</TextCenterButton>
              </ButtonModal>
              <ButtonModal color="FALSE" onPress={handleEditar}>
                <TextCenterButton color="FALSE">Sim, Editar</TextCenterButton>
              </ButtonModal>
            </ViewButtonsModal>
          </ContentViewModal>
        </Modal>
      )}
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
          {meal ? (
            <>
              <Form>
                <TextLabel>Nome</TextLabel>
                <Input value={name} onChangeText={setName} />
                <TextLabel>Descrição</TextLabel>
                <TextInput
                  onChangeText={setDescription}
                  editable
                  value={description}
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
                    <Status
                      style={{ backgroundColor: theme.COLORS.GREEN_DARK }}
                    />
                    <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
                      Sim
                    </Text>
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
                    <Status
                      style={{ backgroundColor: theme.COLORS.RED_DARK }}
                    />
                    <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
                      Não
                    </Text>
                  </Option>
                </InsideTheDiet>
                <Button name="Salvar alterações" onPress={setModal} key={1} />
              </Form>
            </>
          ) : (
            <Loading />
          )}
        </Main>
      </Container>
    </>
  );
}
