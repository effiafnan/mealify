import React from 'react';
import {StyleSheet} from "react-native";
import { useSelector } from 'react-redux';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';

import HeaderButton from "../components/headerButton";
import MealList from '../components/mealList';

const FavouritesScreen = (props) => {

    const favMeals = useSelector(state => state.meal.favMeals);
    

    return ( 
        <MealList data={favMeals} navigation={props.navigation} />
     );

    
}

 
FavouritesScreen.navigationOptions = (navData) => {
    return {
    headerTitle : 'Favourites',
    headerLeft: ()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
       <Item title='Menu' iconName='ios-menu' onPress={()=>{navData.navigation.toggleDrawer()}}/>
       </HeaderButtons>
    )
       
}
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})



 
export default FavouritesScreen;