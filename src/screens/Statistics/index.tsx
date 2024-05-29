import { useCallback, useState, useEffect, createContext } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Feather";

import theme from "../../theme";

import { Container, StatisticsGeneral, Header, Teste } from "./style";
import { Percent } from "../../components/Percent";
import { mealsGetAll } from "../../Storage/Meal/mealsGetAll";

export const ModeContext = createContext({});

export function Statistics() {
  const [allMeals, setAllMeals] = useState("");
  const [allMealsWithininTheDiet, setAllMealsWithininTheDiet] = useState("");
  const [allMealsOffinTheDiet, setAllMealsOffinTheDiet] = useState("");
  const [mealInARow, setMealInARow] = useState("");
  const [mealsInDietStatic, setMealsInDietStatic] = useState("");

  const [meals, setMeals] = useState<any[]>([]);
  const navigate = useNavigation();

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

  useEffect(() => {
    getAllMeals();
    getMealsWithinTheDiet(true);
    getMealsWithinTheDiet(false);
    getMealsInARow();
    getMealsStatics(parseInt(allMeals),parseInt(allMealsWithininTheDiet))
  });

  function getAllMeals() {
    const meal = meals.length.toString();
    setAllMeals(meal);
  }

  function getMealsWithinTheDiet(params: boolean) {
    const meal = meals
      .filter((item) => item.status === params)
      .length.toString();
    if (params) return setAllMealsWithininTheDiet(meal);
    setAllMealsOffinTheDiet(meal);
  }

  function getMealsInARow() {
    let x = 0;
    let a = 0;

    for (let i = 0; i < meals.length; i++) {
      if (meals[i].status === true) {
        x += 1;
      } else if (meals[i].status === false) {
        if (x > a) {
          a = x;
        }
        x = 0; // Reinicie x quando encontrar uma refeição consecutiva falsa
      }
    }

    if (x > a) {
      a = x; // Verifique novamente no final do loop
    }

    setMealInARow(a.toString());
  }

  function getMealsStatics(padrao:number, numberOfMealsInADiet: number) {
    const mealsInDietStatic = (numberOfMealsInADiet / padrao) * 100
    setMealsInDietStatic(mealsInDietStatic.toFixed(2).replace('.', ',').toString())
  }


  function handleBack() {
    navigate.navigate("Main");
  }

  return (
    <Container color={parseInt(mealsInDietStatic) >= 50 ? "PRIMARY" : "SECONDARY"}>
      <Header>
        <TouchableOpacity onPress={handleBack}>
          <Icon
            name="arrow-left"
            style={{ fontSize: 28 }}
            color={theme.COLORS.GREEN_DARK}
          />
        </TouchableOpacity>
        <Percent
          color={parseInt(mealsInDietStatic) >= 50 ? "PRIMARY" : "SECONDARY"}
          button="hide"
          text={mealsInDietStatic  + '%'}
          description="das refeições dentro da dieta"
          width="DEFAULT"
        />
      </Header>
      <StatisticsGeneral>
        <Text
          style={{
            fontFamily: theme.FONT_FAMILY.BOLD,
            fontSize: theme.FONT_SIZE.MD,
            paddingBottom: 23,
          }}
        >
          Estatíscas Gerais
        </Text>
        <Percent
          color="DEFAULT"
          button="hide"
          text={mealInARow}
          description="melhor sequência de pratos dentro da dieta"
          width="FULL"
        />
        <Percent
          color="DEFAULT"
          button="hide"
          text={allMeals}
          description="refeições registradas"
          width="FULL"
        />
        <Teste>
          <Percent
            color="PRIMARY"
            button="hide"
            text={allMealsWithininTheDiet}
            description="refeições dentro da dieta"
            width="DEFAULT"
          />
          <Percent
            color="SECONDARY"
            button="hide"
            text={allMealsOffinTheDiet}
            description="refeições fora da dieta"
            width="DEFAULT"
          />
        </Teste>
      </StatisticsGeneral>
    </Container>
  );
}
