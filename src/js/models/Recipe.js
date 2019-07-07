import axios  from 'axios';

export default class Recipe{
      constructor(id){
          this.id = id;

      }

      async getRecipe(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key= "58f0328efe8303612273eaab5908741e";
      
        try {
            const res  = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.img= res.data.recipe.image_url;
            this.source= res.data.recipe.source_url;
            this.publisher = res.data.recipe.publisher;
            this.ingredients = res.data.recipe.ingredients;
            console.log( res);
        }
        catch (error) {
            alert(error);
        }
      }
}