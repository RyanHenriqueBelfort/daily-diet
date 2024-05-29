import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealEdit(mealId: number, updatedMeal: object) {
  try {
    const storedMeals = await mealsGetAll();
    const mealIndex = storedMeals.findIndex((meal) => meal.id === mealId);
    if (mealIndex === -1) {
      throw new Error("Meal not found"); // Handle non-existent meal
    }
    storedMeals[mealIndex] = { ...storedMeals[mealIndex], ...updatedMeal };
    const storage = JSON.stringify(storedMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error; 
  }
}