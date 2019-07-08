import { DomStrings } from '../base';

//------------------------------------------- RECIPEVIEW-------------------------------------------------
//function to cleat the decription panel
export const clearRecipe = ()=>{
   

    DomStrings["description-figure"].innerHTML='';
    DomStrings["description-details__header"].innerHTML='';
    DomStrings["description-details__ingredients"].innerHTML='';
}
//function to display ingredients
const DisplayIngredients = (ingredients)=>{
    
    ingredients.array.forEach(element => {
        const paragraph= ` <p class="description-details__paragraph"> ${element}</p>`;
        DomStrings["description-details__ingredients"].insertAdjacentHTML("beforeend",paragraph);
    });
}
// display the recipes results in the description area
export const DisplayRecipe = (recipe) => {
    const figcaption = `
     <img src="${recipe.img}" alt="recipe image"
    class="description-figure__img">
     <figcaption class="description-figure__caption">
        ${recipe.title}
      </figcaption>`;

    const link = `
      Publisher: 
      <a href="${recipe.source}" class="description-details__publisher">
      ${recipe.publisher}
      </a>
      <div class="description-stars">
      <svg class="description-stars__icon">
              <use xlink:href="img/sprite.svg#icon-star-outlined">
              </use>
      </svg>
      <svg class="description-stars__icon">
              <use xlink:href="img/sprite.svg#icon-star-outlined">
              </use>
      </svg>
      <svg class="description-stars__icon">
              <use xlink:href="img/sprite.svg#icon-star-outlined">
              </use>
      </svg>
      <svg class="description-stars__icon">
              <use xlink:href="img/sprite.svg#icon-star-outlined">
              </use>
      </svg>
      <svg class="description-stars__icon">
              <use xlink:href="img/sprite.svg#icon-star-outlined">
              </use>
      </svg>

</div>
      
      `;
      
      
      DomStrings["description-figure"].insertAdjacentHTML("beforeend",figcaption);
      DomStrings["description-details__header"].insertAdjacentHTML("afterbegin",link);
      
      // display ingredients
      DisplayIngredients(recipe.ingredients)
}