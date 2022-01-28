
import React,{useState} from 'react';
import { StyleSheet} from 'react-native';
import  AppLoading  from 'expo-app-loading';
import * as Fonts from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';
import { combineReducers,createStore } from 'redux';
import { Provider } from 'react-redux';

import mealReducer from "./store/reducer/mealReducer"

const fetchFonts = ()=>{
  return Fonts.loadAsync({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf')
  });

  };

  const rootReducer = combineReducers({
    meal:mealReducer
  })

  const store = createStore(rootReducer);


export default function App() {

  const [fontLoaded,setFontLoaded] = useState(false);

  if(!fontLoaded){
   return <AppLoading 
     startAsync = {fetchFonts}
     onFinish = {()=>setFontLoaded(true)}
     onError={(err)=>console.log(err)}
   />
  }


  return  <Provider store={store}>
              <MealsNavigator />
          </Provider>

    

  
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
