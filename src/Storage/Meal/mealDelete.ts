import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealDelete(mealDeleted: number) {
    try{
        const storedAll = await mealsGetAll()
        
        for (let i = 0; i < storedAll.length; i++) {
            if (storedAll[i].id === mealDeleted) {
                await AsyncStorage.removeItem(`${MEAL_COLLECTION}_${mealDeleted}`);
                storedAll.splice(i, 1); // Remove o objeto do array local
                break;
            }
        }
        return await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedAll));
    
    } catch(erro) {

    }
}