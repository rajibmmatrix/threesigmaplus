import AsyncStorage from '@react-native-async-storage/async-storage';

const token_key = '@token';

/**
 * get the auth token from local storage
 * @returns token | null
 */
export const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(token_key);
  } catch (e) {
    console.log(e);
    return null;
  }
};

/**
 * save the auth token in local storage
 * @returns void
 */
export const saveToken = async (value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(token_key, value);
  } catch (e) {
    console.log(e);
  }
};

/**
 * clear the auth token from local storage
 * @returns void
 */
export const removeToken = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};
