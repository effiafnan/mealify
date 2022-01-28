import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES} from '../data/dummy-data';
import MealList from '../components/mealList';

const CategoriesMealsScreen = (props) => {

    const availableMeals = useSelector(state => state.meal.filteredMeals);
    const selectedCategoryId = props.navigation.getParam('categoryId');

    const selectedCategoryItems = availableMeals.filter(
        item => item.categoryIds.indexOf(selectedCategoryId)>=0);

    return ( 
        <MealList data={selectedCategoryItems} navigation={props.navigation}/>
     );
     
}
 
CategoriesMealsScreen.navigationOptions = (navigationData) => {
    const passedCatergoryId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id===passedCatergoryId);

    return {
        headerTitle : selectedCategory.title
    }
}


export default CategoriesMealsScreen;