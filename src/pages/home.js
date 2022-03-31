import getData from '../utils/getData';
import Paginator from '../utils/paginator';

const Home = async () => {
    const characters = await getData();

    const view = `
        <div class="characters">
            ${ characters.results.map(character => `
                <article class="characters-item">
                    <a href="#/${ character.id }/">
                        <img src="${ character.image }" alt="${ character.name }" />

                        <h2>${ character.name }</h2>
                    </a>
                </article>
            `).join('') }
        </div>

        ${ Paginator.render('/', characters.info.pages) }
    `;

    return view;
};

export default Home;