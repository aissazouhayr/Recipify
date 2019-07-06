
import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
    }


    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';

        const key1 = 'cad80224f88430e589b85c0f5b324f6d';
        const key= "58f0328efe8303612273eaab5908741e";
        const ID = 'cb4f235f';
        try {
            const res  = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.recipes = res.data.recipes;
            console.log( this.recipes);
        }
        catch (error) {
            alert(error);
        }

    }

}