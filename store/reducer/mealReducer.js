
import {MEALS} from "../../data/dummy-data";
import { TOGGLE_FAVOIRITE , FILTERED_MEALS} from "../activator/meal";

const initialState = {
    meals:MEALS,
    favMeals:[],
    filteredMeals:MEALS
}

const mealsReducer  = (state=initialState,action) => {
    switch(action.type){
        case TOGGLE_FAVOIRITE:
            const existingIndex = state.favMeals.findIndex(meal => meal.id===action.mealId);
            if(existingIndex>=0){
                const updatedFavMeals = [...state.favMeals]
                updatedFavMeals.splice(existingIndex,1);

                return {...state,favMeals:updatedFavMeals};
            }else{
                const meal = state.meals.find(meal => meal.id===action.mealId);
                return {...state,favMeals:state.favMeals.concat(meal)};
            }
        case FILTERED_MEALS:
            const appliedFilters = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if(appliedFilters.GlutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilters.Vegan && !meal.isVegan){
                    return false;
                }
                if(appliedFilters.Vegetarian && meal.isVegetarian){
                    return false;
                }
                if(appliedFilters.LactoseFree && meal.isLactoseFree){
                    return false;
                }
                return true;
            })
            return {...state,filteredMeals:updatedFilteredMeals}
        default:
            return  state ;    
    }
    
}

export default mealsReducer;
 
