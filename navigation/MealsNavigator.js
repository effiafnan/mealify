import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/SelectedCategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from "../screens/FiltersScreen";
import { Platform } from 'react-native';
import FavouritesScreen from '../screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Color from '../assets/color';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const defaultNavOptions= {
    defaultNavigationOptions : {
        headerTitle: 'Mealify',    //least priority
        headerStyle  : {
            backgroundColor : Platform.OS === 'android' ? Color.activeColor : ''
        },
        headerTintColor : Platform.OS === 'android' ? 'white' : '' ,
        headerTitleAlign: 'center'
    }
};

const MealsNavigator = createStackNavigator({

    Category : {
        screen : CategoriesScreen,
        navigationOptions : {   //it has highest priority
            //headerTitle: 'category!!!!'   
        }
    } ,
    CategoryMeals:{
        screen:CategoriesMealsScreen,
        navigationOptions : {   //it has highest priority
         //   headerTitle: 'hhh'   
        }
        
        
    },
    MealDetails:{
        screen:MealDetailScreen,
        navigationOptions : {   //it has highest priority
         //   headerTitle: 'hhh' 
         
        }  
    }

    
},defaultNavOptions
);


const favStack = createStackNavigator({
    Fav:{
        screen:FavouritesScreen
    },
    MealDetails:{
        screen:MealDetailScreen
    }
},
defaultNavOptions
)

const tabScreenConfig = {
    Meals : {
        screen:MealsNavigator,
        navigationOptions:{
            tabBarLabel: 'Meals',
            tabBarIcon : (tab)=>{
                return <Ionicons name='ios-restaurant' size={24} color={tab.tintColor} />
            }
        }
    },
    Fav: {
        screen:favStack,
        navigationOptions:{
            tabBarLabel: 'Favourites!',
            tabBarIcon : (tab)=>{
                return <Ionicons name='ios-star' size={24} color={tab.tintColor} />
            }
            
        }
    }
}




const bottomNavigator = Platform.OS ==='android' 
? createMaterialBottomTabNavigator(tabScreenConfig,{
    // activeTintColor:'#F90716',
    shifting:true,
    barStyle: { backgroundColor: Color.activeColor }

}) 
:  createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions:{
        activeTintColor:'#F90716'
    }
}
);

const FilterNavigator = createStackNavigator({
    Filters :{
        screen:FiltersScreen
    } 
},defaultNavOptions)

const MainNavigator = createDrawerNavigator({
    MealFavs:{
        screen:bottomNavigator,
        navigationOptions:{
            drawerLabel:'MEALS'
        }
    },
    Filters:{
        screen:FilterNavigator,
        navigationOptions:{
            drawerLabel:'FILTERS',
        }
    }
},{
    contentOptions:{
        backgroundColor:Color.activeColor,
        itemsContainerStyle: {
            paddingVertical: 30,
          }
    }
})

export default createAppContainer(MainNavigator);
