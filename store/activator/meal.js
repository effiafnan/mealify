export const TOGGLE_FAVOIRITE = 'TOGGLE_FAVOURITE';
export const FILTERED_MEALS = 'FILTERED MEALS';

export const toggleFavourite = (id) => {
    return {type:TOGGLE_FAVOIRITE,mealId:id}
}

export const filteredMeals = (filterSettings) => {
    return {type : FILTERED_MEALS,filters:filterSettings}
}