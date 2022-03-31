import getData from '../utils/getData';
import Paginator from '../utils/paginator';

const Home = async () => {
    const locations = await getData({ type: 'locations' });

    const view = `
        <div class="locations">
            ${ locations.results.map(location => `
                <article class="locations-item">
                    <div>
                        <h2>${ location.name }</h2>
                        <p>${ location.dimension }</p>
                    </div>
                </article>
            `).join('') }
        </div>

        ${ Paginator.render('#/locations', locations.info.pages) }
    `;

    return view;
};

export default Home;