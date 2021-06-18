import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Review = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Review Restoran</h2>
        <div id="resto" class="resto">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restoran = await RestoDbSource.listResto();
    const restoranContainer = document.querySelector('#resto');
    restoran.forEach((resto) => {
      restoranContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Review;
