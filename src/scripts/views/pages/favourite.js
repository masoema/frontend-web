import FavRestaurantIdb from '../../data/resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restoran Favourite</h2>
        <div id="resto" class="resto">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#resto');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favourite;
