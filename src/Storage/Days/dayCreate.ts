import AsyncStorage from "@react-native-async-storage/async-storage";
import { DAY_COLLECTION } from '../storageConfig'
import { dayGetAll } from './dayGetAll'

export async function dayCreate(day: number) {
    try {

        const storedDays = await dayGetAll()

        const storage = JSON.stringify([...storedDays, day])

        await AsyncStorage.setItem(DAY_COLLECTION, storage)
    } catch (error) {
        throw error;
    }
}