import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const data = await response.json();
    return data.restaurant;
    // console.log(response);
    // return response.json();
  }

  static async searchResto(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    return response.json();
  }
}

export default RestoDbSource;
