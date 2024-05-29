import { useState, useEffect, useCallback, useContext } from "react";
import { View, Image, Text, SectionList, FlatList, Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import {
  Container,
  Photo,
  Header,
  Meals,
  ButtonNewMeal,
  DayList,
} from "./style";
import Icon from "react-native-vector-icons/Feather";

import theme from "../../theme";
import logo from "../../assets/Logo.png";
import photo from "../../assets/ami.jpg";
import { Percent } from "../../components/Percent";
import { formatDate } from "../../util/FormatDate";
import  Meal  from "../../components/Meal";
import { mealsGetAll } from "../../Storage/Meal/mealsGetAll";
import { MealsStorageDTO } from "../../Storage/Meal/mealsStorageDTO";
import { mealDelete } from "../../Storage/Meal/mealDelete";
import { StaticsContext } from "../../context/stacticsContex";
import { PropsRouter } from "../../routes/app.routes";


type ViewMealParametro = {
  name: string;
  description: string;
  hour: string;
  date: string;
  status: boolean;
  id: string;
}

export function Main() {
  const [meals, setMeals] = useState<MealsStorageDTO[]>([]);
  const [allMeals, setAllMeals] = useState("");
  const [mealsInDietStatic, setMealsInDietStatic] = useState("");
  const [allMealsWithininTheDiet, setAllMealsWithininTheDiet] = useState("");
  // const { statics } = useContext(StaticsContext)

  function getMealsWithinTheDiet(params: boolean) {
    const meal = meals
    .filter((item) => item.status === params)
    .length.toString(); // Pega todas as refeições com status TRUE
    if (params) return setAllMealsWithininTheDiet(meal);
  }
  
  function getAllMeals() {
    const meal = meals.length.toString()
    setAllMeals(meal);
  }
  
  function getMealsStatics(padrao: number, numberOfMealsInADiet: number) {
    const mealsInDietStatic = (numberOfMealsInADiet / padrao) * 100;
    setMealsInDietStatic(
      mealsInDietStatic.toFixed(2).replace(".", ",").toString()
      );
    }


  const fetchAndSetMeals = async () => {
    try {
      const data = await mealsGetAll();
      setMeals(data);
    } catch (error) {
      handleFetchError();
    }
  };

  const handleFetchError = () => {
    Alert.alert(
      "Pessoas",
      "Não foi possível carregar as pessoas do timer selecionado"
    );
  };

  useFocusEffect(
    useCallback(() => {
      fetchAndSetMeals();
    }, [])
  );


  useEffect(() => {
    getAllMeals();
    getMealsWithinTheDiet(true);
    getMealsStatics(parseInt(allMeals), parseInt(allMealsWithininTheDiet));
  }, [allMeals, allMealsWithininTheDiet, meals]);

  const navigation = useNavigation<PropsRouter>();


  const handleNewMeal =  async () => {
    await fetchAndSetMeals();navigation.navigate("NewMeal");
  };
  const handleViewMeal = (meal: ViewMealParametro) => {
    const name = meal.name
    const date = meal.date
    const description = meal.description
    const hour = meal.hour
    const status = meal.status
    const id = meal.id
    navigation.navigate("ViewMeal", {name, date, description, hour, status, id});
  };


  return (
    <Container>
      <Header>
        <Image source={logo} />
        <Photo source={photo} />
      </Header>
      <Percent
        color={parseInt(mealsInDietStatic) >= 50 ? "PRIMARY" : "SECONDARY"}
        button="show"
        text={mealsInDietStatic  + '%'}
        description="das refeições dentro da dieta"
        width="DEFAULT"
      />
      <Meals>
        <Text
          style={{
            fontFamily: theme.FONT_FAMILY.REGULAR,
            fontSize: theme.FONT_SIZE.MD,
          }}
        >
          Refeições
        </Text>
        <ButtonNewMeal onPress={handleNewMeal}>
          <Icon
            name="plus"
            color={theme.COLORS.WHITE}
            size={theme.FONT_SIZE.XL}
            style={{ paddingRight: 12 }}
          />
          <Text
            style={{
              fontFamily: theme.FONT_FAMILY.BOLD,
              fontSize: theme.FONT_SIZE.MD,
              color: theme.COLORS.WHITE,
            }}
          >
            Nova Refeição
          </Text>
        </ButtonNewMeal>
        <DayList>
          <Text></Text>
          <FlatList
            data={meals.reverse()}
            keyExtractor={(item) => item.id} 
            renderItem={({ item }) => (
              <>
                <Meal
                  date={item.date}
                  hour={item.hour}
                  name={item.name} 
                  status={item.status ? "PRIMARY" : "SECONDARY"}
                  press={() => handleViewMeal(item)}
                  teste={item.id}
                />
              </>
            )}
          />
        </DayList>
      </Meals>
    </Container>
  );
}