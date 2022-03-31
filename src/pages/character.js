import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async () => {
    const id = getHash();
    const character = await getData({ type: 'characters', id });

    const view = `
        <div class="characters-inner">
            <article class="characters-card">
                <img src="${ character.image }" alt="${ character.name }">
                <h2>${ character.name }</h2>
            </article>

            <artcile class="characters-card">
                <h3>Episodes: ${ character.episode.length }</h3>
                <h3>Status: ${ character.status }</h3>
                <h3>Species: ${ character.species }</h3>
                <h3>Gender: ${ character.gender }</h3>
                <h3>Origin: ${ character.origin.name }</h3>
                <h3>Last Location: ${ character.location.name }</h3>
            </artcile>
        </div>
    `;

    return view;
}

export default Character;