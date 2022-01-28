import React, { useCallback, useEffect } from 'react';
import {View,Text,StyleSheet} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton';
import { useSelector,useDispatch } from 'react-redux';
import { Image } from 'react-native';

import { toggleFavourite } from '../store/activator/meal';


const MealDetailScreen = (props) => {
    const id = props.navigation.getParam('itemId');
    const availableMeals = useSelector(state => state.meal.meals);
    const selectedMeal = availableMeals.find(meal => meal.id===id);

    const isCurrentMealFav = useSelector(state => state.meal.favMeals.some(meal => meal.id === id))
   

    const dispatch = useDispatch();

    const toggleFavouriteHandler = useCallback( ()=> {
        dispatch(toggleFavourite(id));
    },[dispatch,id]);


    useEffect(()=>{
        props.navigation.setParams({markFav:toggleFavouriteHandler})
    },[toggleFavouriteHandler])

    useEffect(()=>{
        props.navigation.setParams({isFav:isCurrentMealFav})
    },[isCurrentMealFav])

    const ListItem = (props) => {
        return (<View>
            <Text style={styles.listItem}>{props.children}</Text>
                </View>)
        
    }
    
    return ( 
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
                    <View style={styles.details}>
                        <Text> {selectedMeal.duration}</Text>
                        <Text>{selectedMeal.complexity}</Text>
                        <Text>{selectedMeal.affordability}</Text>
                    </View>

            <View>
                <Text style = {styles.title}>INGREDIENTS</Text>
                {selectedMeal.ingredients.map(item=><ListItem key={item}>{item}</ListItem>)}
                <Text style = {styles.title}>STEPS</Text>
                {selectedMeal.steps.map(item=><ListItem key={item}>{item}</ListItem>)}
            </View>
            
        </ScrollView>
     );
    
}

MealDetailScreen.navigationOptions = (navigationData) => {
    
    const meal = navigationData.navigation.getParam('title');
    const favHandler = navigationData.navigation.getParam('markFav');
    const isFav = navigationData.navigation.getParam('isFav');
    return {
        headerTitle: meal,
        headerRight: ()=>(
           <HeaderButtons HeaderButtonComponent={HeaderButton}>
           <Item title='Fav' iconName={isFav ? 'ios-star':'ios-star-outline'} onPress={favHandler}/>                               
           </HeaderButtons>
           )  
    };
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:200
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-between',
        
    },
    title:{
        textAlign:'center',
        fontSize:15,
        fontWeight:'200',
        fontFamily:'open-sans-bold'
    },
    listItem:{
        padding:5,
        marginVertical:5,
        borderWidth:1,
        marginHorizontal:8,
        fontFamily:'open-sans',
        borderRadius:2
    }
})
 
export default MealDetailScreen;