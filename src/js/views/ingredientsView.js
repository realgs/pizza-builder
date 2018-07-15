import elements from '../common/elements';

// Render one ingredient
const renderIngredient = (ingredient) => {
  const markup = `
    <button
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center text-capitalize cursor-pointer"
      v-ingredient-name="${ingredient.name}"
      v-ingredient-price="${ingredient.price}"
    >
      ${ingredient.name} <span class="badge badge-secondary badge-pill">${ingredient.price}$</span>
    </button>
  `;

  elements.ingredientsList.insertAdjacentHTML('beforeend', markup);
};

// Render all ingredients
export const renderIngredients = (ingredients) => {
  ingredients.forEach(renderIngredient);
};

// Render all ingredients
export const removeIngredients = () => {
  while (elements.ingredientsList.children.length > 0) {
    elements.ingredientsList.removeChild(elements.ingredientsList.children[0]);
  }
};
