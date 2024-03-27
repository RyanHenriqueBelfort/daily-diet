import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealCreate(meal: object) {
    try {

        const storedMeals = await mealsGetAll()
        const storage = JSON.stringify([...storedMeals, meal])

        await AsyncStorage.setItem(MEAL_COLLECTION, storage)
    } catch (error) {
        throw error;
    }
}