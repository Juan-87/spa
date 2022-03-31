import getData from '../utils/getData';
import Paginator from '../utils/paginator';

const Home = async () => {
    const episodes = await getData({ type: 'episodes' });

    const view = `
        <div class="episodes">
            ${ episodes.results.map(episode => `
                <article class="episodes-item">
                    <a href="/#/episodes">
                        <h2>${ episode.name }</h2>
                        <p>${ episode.air_date }</p>
                    </a>
                </article>
            `).join('') }
        </div>

        ${ Paginator.render('#/episodes', episodes.info.pages) }
    `;

    return view;
};

export default Home;