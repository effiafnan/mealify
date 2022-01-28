import React, { useCallback, useEffect, useState } from 'react';
import {View,Text,StyleSheet, Switch} from "react-native";
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import HeaderButton from "../components/headerButton";
import { filteredMeals } from '../store/activator/meal';

const FiltersScreen = (props) => {

    const {navigation} = props;
    const [isGlutenFree,setIsGlutenFree]=useState(false);
    const [isVegan,setIsVegan]=useState(false);
    const [isVegetarian,setIsVegetarian]=useState(false);
    const [isLactoseFree,setIsLactoseFree]=useState(false);

    const appliedFilters = useSelector(state => state.meal.filteredMeals);

    const SwithchDisplay = (props) => {
        return (
            <View style={styles.switch}>
                <Text >{props.title}</Text>
                <Switch 
                     trackColor={{  true: "#81b0ff" }}
                     thumbColor={ props.value?"#11468F":'' }
                    value={props.value}
                    onValueChange={props.onToggle}
                />
            </View>
        )
    }

    const dispatch = useDispatch();

    const saveFilters = useCallback( () =>{
        const appliedFilters ={
            GlutenFree:isGlutenFree,
            Vegan:isVegan,
            Vegetarian:isVegetarian,
            LactoseFree:isLactoseFree
        }

        dispatch(filteredMeals(appliedFilters));
    },[isGlutenFree,isVegan,isVegetarian,isLactoseFree,dispatch]);

    useEffect(()=>{
        navigation.setParams({save:saveFilters})
    },[saveFilters])

    return ( 
        <View style={styles.screen}>
            <Text style={styles.title}>FILTERS / RESTRICTIONS</Text>
            <SwithchDisplay title ="Gluten Free" value={isGlutenFree} onToggle={(newValue)=>setIsGlutenFree(newValue)} />
            <SwithchDisplay title ="Vegan" value={isVegan} onToggle={(newValue)=>setIsVegan(newValue)} />
            <SwithchDisplay title ="Vegetarian" value={isVegetarian} onToggle={(newValue)=>setIsVegetarian(newValue)} />
            <SwithchDisplay title ="Lactose Free" value={isLactoseFree} onToggle={(newValue)=>setIsLactoseFree(newValue)} />
            </View>
     );

    
}

FiltersScreen.navigationOptions = (navData) => {
    return {
    headerTitle : 'Filters',
    headerLeft: ()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
       <Item title='Menu' iconName='ios-menu' onPress={()=>{navData.navigation.toggleDrawer()}}/>
       </HeaderButtons>
    ),
    headerRight: ()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
       <Item title='save' iconName='ios-save' onPress={navData.navigation.getParam('save')}/>
       </HeaderButtons>
    )
       
}
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
    },title:{
        fontFamily:'open-sans-bold',
        marginVertical:15,
        fontSize:20
    },
    switch:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between',
        width:'80%'
    }
})
 
export default FiltersScreen;