import {DomStrings} from '../base';
import {formatTitle}  from './searchView';



export const DisplayLikes = (title,id)=>{
    // fromat the ttitle
   //prepare the markups
   title = formatTitle(title);
   const markup=`
        <div class="likes-item">
                                      
        <div class="likes-item__icons">
          <svg class="likes-item__trash" >
                          <use xlink:href="img/sprite.svg#icon-trash">
                          </use>
          </svg>
          <svg class="likes-item__heart">
                          <use xlink:href="img/sprite.svg#icon-heart">
                          </use>
          </svg>
        </div>
        <a href="#${id}" data-goto="${id}" class="likes-item__link">${title}</a>
</div>
   `;

   DomStrings["likes"].insertAdjacentHTML("beforeend",markup);

}