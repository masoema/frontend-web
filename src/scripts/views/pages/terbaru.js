import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const DaftarTerbaru = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Restoran dan Ratingnya</h2>
        <div id="resto" class="resto">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restoran = await RestoDbSource.listResto();
    console.log(restoran);
    // const restoranContainer = document.querySelector('#resto');
    // restoran.forEach((resto) => {
    //   restoranContainer.innerHTML += createRestoItemTemplate(resto);
    // });
  },
};

export default DaftarTerbaru;
