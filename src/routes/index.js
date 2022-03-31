import Header from '../templates/header';
import Home from '../pages/home';
import Character from '../pages/character';
import Episodes from '../pages/episodes';
import Locations from '../pages/locations';
import Error404 from '../pages/error404';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home, 
    '/:id': Character, 
    '/episodes': Episodes, 
    '/locations': Locations
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();

    let hash = getHash();
    hash = hash.join('/');

    const route = await resolveRoutes(hash, routes);

    const render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
};

export default router;