import UrlParser from '../../routes/url-parser';
import restoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import { createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();    
    const restaurant = await restoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(restaurant);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        address: restaurant.address
      },
    });
  },
};

export default Detail;
