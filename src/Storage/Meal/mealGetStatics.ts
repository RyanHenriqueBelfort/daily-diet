import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";

export async function mealGetStatics() {
    const storage: any = await AsyncStorage.getItem(MEAL_COLLECTION);
    
    function getAllMeals() {
        const meal = storage.length.toString();
    }


}