import {AsyncStorage} from 'react-native';

export default {
  setItem: async (key, value) => {
    try {
      value = JSON.stringify(value);
      if (value) {
        await AsyncStorage.setItem(key, value);
      } else {
        console.log('not set, stringify failed:', key, value);
      }
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  },
  getItem: async key => {
    try {
      const item = await AsyncStorage.getItem(key);

      return JSON.parse(item);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  },
  removeItem: async key => {
    try {
      await AsyncStorage.removeItem(key);
      // console.log("ketyty", key)
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  },

  clear: async () => {
    try {
      await AsyncStorage.clear();
      console.log('storage cleared');
    } catch (e) {
      console.error('AsyncStorage error: ' + e.message);
    }
  },
};
