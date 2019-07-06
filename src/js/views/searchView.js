import { DomStrings } from '../base';



// SEARCH VIEW 
export const getSearchInput=()=>{
    return DomStrings["search-form__input"].value;
   
}
export const renderPagination = (page = 1, type = 'next') => {
    let markup = `
        <div class="pagination__btn" data-goto="${type == 'next' ? page + 1 : page - 1}">
        <svg class="pagination__icon">
            <use xlink:href="img/sprite.svg#icon-arrow-bold-${type === 'next' ? 'right' : 'left'}"></use>
        </svg><span class="pagination__text" data-goto="${type == 'next' ? page + 1 : page - 1}">${type === 'next' ? 'next' : 'prev'}</span>
        </div>
    `;
    DomStrings.pagination.insertAdjacentHTML("beforeend", markup);

}
export const clearPagination = () => {
    DomStrings.pagination.innerHTML = '';
}
export const clearRsult = () => {
    DomStrings["results-list"].innerHTML = '';
}
// function to format title to fit display area

const formatTitle = (title,limit=17)=>{
    let arr=[];
    title.split(' ').reduce((acc,cur,index)=>{   
          acc += cur.length;
          if(acc<=limit){
            arr.push(cur);
          }
          return acc;
    },0)
    return arr.join(' ')+"....";
}
// function to add elements to inner html used inside rendeResults()
const renderElements = (element) => {
    const title = formatTitle(element.title);
    let markup = ` 
    <li class="results-list__item">
    <img src="${element.image_url}" alt="" class="results-list__img">
    <span class="results-list__title">${title}</span>
    </li>`;
    DomStrings["results-list"].insertAdjacentHTML("beforeend", markup);
}

// function to render recipes fetched from API
export const rendeResults = (recipes, page = 1, resPerPage = 10) => {
    //prepare the data for pagination
    let start = (page - 1) * resPerPage;         //0 as start
    let end = resPerPage * page;                   //10 as start
    let pages = Math.ceil(recipes.length / resPerPage);
 
    // render results by calling renderElements where data is prepared 
    recipes.slice(start, end).forEach(renderElements);
    if (page == 1 && pages == 1) {
        clearPagination();
    }
    else if (page == 1 && pages != 1) {
        renderPagination(page, 'next');
    }
    else if (page < pages) {
        renderPagination(page, 'prev');
        renderPagination(page, 'next');
    }
    else if (page == pages) {
        renderPagination(page, 'prev');
    }
}



