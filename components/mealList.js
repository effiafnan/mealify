import React from 'react';
import { FlatList,StyleSheet,View } from "react-native"
import { useSelector } from 'react-redux';

import MealItem from '../components/mealItem';

const MealList = (props) =>{

    const favouriteMeals = useSelector(state => state.meal.favMeals)

    const renderMealItem = (itemData)=>{

        const isCurrentMealFav = favouriteMeals.some(meal => meal.id === itemData.item.id)

        return (
            <MealItem
             title ={itemData.item.title}
             duration={itemData.item.duration}
             complexity={itemData.item.complexity}
             image={itemData.item.imageUrl} 
             afford={itemData.item.affordability} 
             onPress = {()=>{props.navigation.navigate(
                 {
             routeName:'MealDetails',
             params:{
                itemId:itemData.item.id,
                title:itemData.item.title,
                isFav:isCurrentMealFav
             }}
             )}} 

             />
        );
    }

    return <View style={styles.screen}>
                <FlatList data={props.data} renderItem={renderMealItem} style={{width:'100%'}}/>
            </View>;

}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default MealList;