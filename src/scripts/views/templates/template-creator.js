import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
    <h3>Information</h3>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
      <h4>Categories</h4>
      <li>${restaurant.categories.map((category) => `
            <span>${category.name}</span>`,
        ).join(',')}
      </li>
    </ul>
    <h3>Menu</h3>
        <h4>Food</h4>
        <ul>
          ${restaurant.menus.foods.map((food) => `
                <li><p>${food.name}</p></li>
              `,
            ).join('')}
        <ul>
        <h4>Drink</h4>
        <ul>
          ${restaurant.menus.drinks.map((drink) => `
                <li><p>${drink.name}</p></li>
              `,
            ).join('')}
        <ul>
  </div>
  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="resto__info">
    <h3 class="title-review">Reviews</h3>
      ${restaurant.customerReviews.map((review) =>`        
        <p><i title="restaurant" style="font-size:1.3em;"></i>${review.name}</p>
        <p>${review.date}</p>
        <div>
          <p>${review.review}</p>
        </div>
        `,
      ).join('')}
  </div>  
`;

const createRestoItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
    <img class="resto-item__header__poster" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" />        
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.address}</p>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const restaurantItemTemplate = (restaurant, index, lastIndex) => {
  const firstBox = (numbIndex) => numbIndex === 0 && lastIndex % 3 !== 0;
  return `
  <div class="card ${firstBox(index) ? 'box-ganjil' : ''}">
    <a href="/detail/${restaurant.id}">
      <div class="img-container">
        <img class="img-res" alt="${restaurant.name}" src="${
    CONFIG.BASE_IMAGE_URL + restaurant.pictureId
  }" crossorigin="anonymous"/>
        <span class="card-title">${restaurant.name} - ${restaurant.city}</span>
        <span class="card-rating">
          <i title="ratings" class="fa fa-star"></i>
          <span>${restaurant.rating}</span>
        </span>
      </div>
      <div class="card-content">
          <p class="card-content-title">Description :</p>
          <p class="truncate${firstBox(index) ? '2' : ''}">${restaurant.description}</p>
      </div>
    </a>
  </div>
  `;
};
export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  //restaurantItemTemplate
};
