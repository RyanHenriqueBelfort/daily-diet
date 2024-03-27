import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAY_COLLECTION } from "../storageConfig";
import { dayGetAll } from "./dayGetAll";

export async function dayDelete(dayDeleted: number) {
    try{
        const storedAll = await dayGetAll()
        
        for (let i = 0; i < storedAll.length; i++) {
            if (storedAll[i].id === dayDeleted) {
                await AsyncStorage.removeItem(`${DAY_COLLECTION}_${dayDeleted}`);
                storedAll.splice(i, 1); // Remove o objeto do array local
                break;
            }
        }
        
        await AsyncStorage.setItem(DAY_COLLECTION, JSON.stringify(storedAll));
       
    } catch(erro) {

    }
}