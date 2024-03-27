import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAY_COLLECTION } from "../storageConfig";

export async function dayGetAll(){
    try {
        const storage = await AsyncStorage.getItem(DAY_COLLECTION);

        const days = storage ? JSON.parse(storage) : []; 

        return days
    } catch (error) {
        throw error;
    }
}
