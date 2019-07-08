
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
  
 
   
    //set a trigger to recipes to do pagination
    DomStrings.pagination.addEventListener('click', e =>{
       const page =parseInt(e.target.closest(".pagination__btn").dataset.goto, 10)
        SearchView.clearPagination();
        SearchView.clearRsult();
        SearchView.rendeResults(state.search.recipes,page);
      
    });
}
DomStrings["search-form__btn"].addEventListener('click',e=>{
    e.preventDefault();
    SearchControll ();
} );


//RECIPE CONTROLLER
// event when Search for recipes is invloked
const SearchCOntroller = (id)=>{
    // fetch the recipe by id 
    state.recipe = new Recipe(id);
    state.recipe.getRecipe();
    //display the recipe in the description panel
    RecipeView.clearRecipe();
    RecipeView.DisplayRecipe(state.recipe);
}
// event when a recipes from the left panel is clicked

//window.addEventListener('hashChange',,true);
window.addEventListener("hashchange",()=>{
    //window.location.hash
    //console.log(window.location.hash);
    SearchCOntroller(window.location.hash);
}
, true);


/*

0: "1 medium head cauliflower, cut into florets"
1: "1 egg"
2: "1/2 cup mozzarella, shredded"
3: "1 teaspoon oregano or Italian seasoning blend"
4: "salt and pepper to taste"
5: "1 cup chicken, cooked and shredded"
6: "1/2 cup barbecue sauce"
7: "3/4 cup mozzarella, shredded"
8: "red onion to taste, thinly sliced"
9: "fresh cilantro to taste↵"*/


