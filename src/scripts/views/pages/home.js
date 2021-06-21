import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import Spinner from '../templates/spinner-creator';

const Home = {
  async render() {
    return `
    <div class="container">
      <div id="loading"></div>
      <div class="main">
        <h2 class="title-container">Daftar Restoran Murah</h2>
        <section id="daftar-resto" class="restos"></section>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
    loading.innerHTML = Spinner();
    main.style.display = 'none';
    const listContainer = document.querySelector('#daftar-resto');

    try {
      const data = await RestoDbSource.listRestaurant();
      const totalRest = data.restaurants.length;
      data.restaurants.forEach((restaurant) => {
       listContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      main.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${err}, refresh halaman anda!`;
    }
  },
};

export default Home;
