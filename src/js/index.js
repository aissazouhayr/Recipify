
import Search from './models/Search';

import * as SearchView from './views/searchView'
import {DomStrings} from './base';
//mport { basename } from 'path';

// the state of the app that keeps track of the recipes, like and activities at  a moment
const state = {};


// SEARCH CONTROLLER
// Search controller to fetch the recipes and renderd them on the left panel
const SearchControll = async()=>{
   // fetch the data
   state.search = new Search('pizza');
   await state.search.getResults();
  // console.log("dsds"+state.search.recipes);
   SearchView.rendeResults(state.search.recipes);
   try{

   }catch(error){
       alert("error fetching data");
        console.log(error);
   }
  
    //render the recipes on the right panel
   
    //set a trigger to recipes to do pagination
    DomStrings.pagination.addEventListener('click', e =>{
       const page =parseInt(e.target.closest(".pagination__btn").dataset.goto, 10)
        SearchView.clearPagination();
        SearchView.clearRsult();
        SearchView.rendeResults(state.search.recipes,page);
      
    });
}
SearchControll ();


