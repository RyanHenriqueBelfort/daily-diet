import { Alert, Text, TouchableOpacity, View } from "react-native";
import {
  ButtonModal,
  Container,
  Content,
  ContentButtons,
  ContentViewModal,
  Date,
  Header,
  Main,
  Name,
  Status,
  Subscription,
  Tag,
  TextCenter,
  TextCenterButton,
  TextModal,
  ViewButtonsModal,
} from "./style";

import Modal from "react-native-modal";

import Icon from "react-native-vector-icons/Feather";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { PropsRouter } from "../../routes/app.routes";

import theme from "../../theme";
import { Button } from "../../components/Button";
import { useCallback, useEffect, useState } from "react";
import { mealsGetAll } from "../../Storage/Meal/mealsGetAll";
import { MealsStorageDTO } from "../../Storage/Meal/mealsStorageDTO";
import { formatDate } from "../../util/FormatDate";
import { mealDelete } from "../../Storage/Meal/mealDelete";

type RouteParams = {
  name: string;
  description: string;
  date: string;
  hour: string;
  status: boolean;
  id: number;
};

export function ViewMeal() {
  const [meals, setMeals] = useState<MealsStorageDTO[]>([]);
  const [modal, setModal] = useState(false);
  // const [idMeal, setIdMeal] = useState<any>()
  const navigation = useNavigation<PropsRouter>();

  const route = useRoute();
  const { date, description, hour, name, status, id } =
    route.params as RouteParams;

  function handleBack() {
    navigation.navigate("Main");
  }

  const toggleModal = async () => {
    setModal(!modal);
  };

 async function handleDelete() {
    await mealDelete(id);
    setModal(!modal);
    navigation.navigate("Main");
  }

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
              Deseja realmente excluir o registro da refeição?
            </TextModal>
            <ViewButtonsModal>
              <ButtonModal color="TRUE" onPress={toggleModal}>
                <TextCenterButton color="TRUE">Cancelar</TextCenterButton>
              </ButtonModal>
              <ButtonModal color="FALSE" onPress={handleDelete}>
                <TextCenterButton color="FALSE">Sim, excluir</TextCenterButton>
              </ButtonModal>
            </ViewButtonsModal>
          </ContentViewModal>
        </Modal>
      )}
      <Container color={status === true ? "PRIMARY" : "SECONDARY"}>
        <Header>
          <TouchableOpacity onPress={handleBack} style={{ width: 30 }}>
            <Icon
              name="arrow-left"
              style={{ fontSize: 28 }}
              color={theme.COLORS.GRAY_600}
            />
          </TouchableOpacity>
          <TextCenter>Refeição</TextCenter>
        </Header>
        <Main>
          <Content>
            <View>
              <Name>{name}</Name>
              <Subscription>{description}</Subscription>
            </View>
            <View>
              <Date>Data e hora</Date>
              <Text style={{ fontSize: 16 }}>
                {formatDate(date, true)} às {hour}
              </Text>
            </View>
            <Tag>
              {status === true ? (
                <>
                  <Status color="PRIMARY" />
                  <Text>dentro da dieta</Text>
                </>
              ) : (
                <>
                  <Status color="SECONDARY" />
                  <Text>fora da dieta</Text>
                </>
              )}
            </Tag>
          </Content>
          <ContentButtons>
            <Button
              name="Editar refeição"
              navigate="Edit"
              buttonWhiteMode="FALSE"
              icon="edit"
            />
            <Button
              name="Excluir refeição"
              buttonWhiteMode="TRUE"
              icon="trash"
              onPress={setModal}
            />
          </ContentButtons>
        </Main>
      </Container>
    </>
  );
}
