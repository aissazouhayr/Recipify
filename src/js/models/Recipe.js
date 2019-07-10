import axios  from 'axios';

export default class Recipe{
      constructor(id){
          this.id = id;

      }

      async getRecipe(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key= "58f0328efe8303612273eaab5908741e";
        const key2="cad80224f88430e589b85c0f5b324f6d";
        const  ID= "cb4f235f";
        try {
           const res  = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);

           
            this.title = res.data.recipe.title;
            this.img= res.data.recipe.image_url;
            this.source= res.data.recipe.source_url;
            this.publisher = res.data.recipe.publisher;
            this.ingredients = res.data.recipe.ingredients;
            console.log(res);
            console.log("this.title "+this.title );
            console.log("this.img"+ this.img);
            console.log("this.source"+this.source);
            console.log("this.publisher"+this.publisher);
            console.log(" this.ingredients"+ this.ingredients);

           /* const res  = await axios(`${proxy}https://api.edamam.com/search?q=pizza&app_id=${ID}&app_key=${key2}`);
            this.recipes = res.data.hits[0];

            this.title = this.recipes.recipe.label;
            this.img= this.recipes.recipe.image;
            this.source= this.recipes.recipe.shareAs;
            this.publisher = this.recipes.recipe.source;
            this.ingredients = this.recipes.recipe.ingredientLines;
           
            //console.log(res );*/
          
        }
        catch (error) {
            alert(error);
        }
      }
}

