import * as ingredientsView from '../views/ingredientsView';
import { state } from '../state';

// Render ingredients list
ingredientsView.renderIngredients(state.ingredients.items);

export const handleSearch = (str) => {
  // Remove all ingredients
  ingredientsView.removeIngredients();
  // Get only ingredients that contain input value
  const filteredIngredients = state.ingredients.items.filter(ingredient => (
    ingredient.name.toLowerCase().includes(str.toLowerCase())
  ));
  // Render filtered ingredients
  ingredientsView.renderIngredients(filteredIngredients);
};
