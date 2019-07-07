import axios  from 'axios';

export default class Recipe{
      constructor(id){
          this.id = id;

      }

      async getRecipe(){

        const key= "58f0328efe8303612273eaab5908741e";
      
        try {
            const res  = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            console.log( res);
        }
        catch (error) {
            alert(error);
        }
      }
}