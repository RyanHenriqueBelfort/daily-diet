import { createContext, useCallback, useEffect, useState } from "react";
import { mealsGetAll } from "../Storage/Meal/mealsGetAll";
import { useFocusEffect } from "@react-navigation/native";

interface StaticsInterface {
    statics: string
}

export const StaticsContext = createContext<StaticsInterface>({} as StaticsInterface);

export const StaticsProvider = ({ children }: any) => {
  const [allMeals, setAllMeals] = useState("");
  const [mealsInDietStatic, setMealsInDietStatic] = useState("");
  const [allMealsWithininTheDiet, setAllMealsWithininTheDiet] = useState("");
  const [meals, setMeals] = useState<any[]>([]);

  const fetchAndSetMeals = async () => {
    try {
      const data = await mealsGetAll();
      setMeals(data);
    } catch (error) {
      // Tratar erro, se necessário
    }
  };

  
  // useEffect(() => {
  //   getAllMeals();
  //   getMealsWithinTheDiet(true);
  //   getMealsStatics(parseInt(allMeals), parseInt(allMealsWithininTheDiet));
  // });
  
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
    
    
    useEffect(() => {
      getAllMeals();
      getMealsWithinTheDiet(true);
      getMealsStatics(parseInt(allMeals), parseInt(allMealsWithininTheDiet));
    }, [allMeals, allMealsWithininTheDiet, meals]);
    
    useFocusEffect(
      useCallback(() =>{ fetchAndSetMeals()}, []));
    
    return <StaticsContext.Provider value={{ statics: mealsInDietStatic }}>
    {children}
  </StaticsContext.Provider>;
};
