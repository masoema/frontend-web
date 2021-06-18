import Home from '../views/pages/home';
import Favourite from '../views/pages/favourite';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';

const routes = {
  '/': Home,
  '/home': Home,
  '/favourite': Favourite,
  '/detail/:id': Detail,
  '/search': Search
};

export default routes;
