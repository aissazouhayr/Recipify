
import Search from './models/Search';

import * as SearchView from './views/searchView'
import {DomStrings} from './base';
import Recipe  from './models/Recipe.js';
import * as RecipeView  from './views/recipeView'
//mport { basename } from 'path';

// the state of the app that keeps track of the recipes, like and activities at  a moment
const state = {};


// SEARCH CONTROLLER
// Search controller to fetch the recipes and renderd them on the left panel
const SearchControll = async()=>{
   // fetch the data
   try{
       // state.search = new Search('pizza');
  state.search = new Search(SearchView.getSearchInput());
  await state.search.getResults();
 
  SearchView.rendeResults(state.search.recipes);

   }catch(error){
       alert("error fetching data");
        console.log(error);
   }
  
 
   
  
}



//RECIPE CONTROLLER
 const recipeController = async (e)=>{
    // fetch the recipe by id 
    e.preventDefault();
    const hash =  parseInt(window.location.hash.slice(1),10);
    if(hash){
        console.log("hash"+hash);
        state.recipe = new Recipe(hash);
        try{
            await state.recipe.getRecipe();
        
            //display the recipe in the description panel
            RecipeView.clearRecipe();
            RecipeView.DisplayRecipe(state.recipe);
        }catch(error){
            alert(error);
        }
    
    }
  
  
}

//LIKE CONTRLLOER

const likesController= ()=>{
     




}











const init = ()=>{
   
   // event when Search for recipes is invloked
DomStrings["search-form__btn"].addEventListener('click',e=>{
    e.preventDefault();
    SearchControll();
} );

  //set a trigger to recipes to do pagination
  DomStrings.pagination.addEventListener('click', e =>{
    const page =parseInt(e.target.closest(".pagination__btn").dataset.goto, 10)
     SearchView.clearPagination();
     SearchView.clearRsult();
     SearchView.rendeResults(state.search.recipes,page);
   
 });
   
    // event when a recipes from the left panel is clicked
//window.addEventListener('hashChange',,true);

['hashchange'].forEach(event => {
    window.addEventListener(event,recipeController);

});
// clear the recipe from description area when trash icon clicked
DomStrings["description-icons__icon--trash"].addEventListener('click',RecipeView.clearRecipe);

}

// intialse the app
init();