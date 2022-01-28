import React from 'react';
import {View,Text,StyleSheet,Button,FlatList,TouchableOpacity,Platform} from "react-native";
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from "../components/headerButton";
import GridTile from '../components/gridListView';
import {CATEGORIES} from "../data/dummy-data"





const CategoriesScreen = (props) => {

    const renderGridItem = (itemData)=>{
        return (
           
             <GridTile
              title = {itemData.item.title} color= {itemData.item.color} onSelect = {()=>{
                  props.navigation.navigate({
                      routeName:'CategoryMeals',
                      params:{
                         categoryId : itemData.item.id
                          }
                    });
                    }
                } />
       
            
        )
     }

    return ( 
        <FlatList 
           data = {CATEGORIES}
           renderItem = {renderGridItem} 
           numColumns={2}

       />
    );

     
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
    headerTitle : 'Meal Categories',
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
 
export default CategoriesScreen;