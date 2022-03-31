import getParams from '../utils/getParams';

const API = {
    "characters": "https://rickandmortyapi.com/api/character/",
    "locations": "https://rickandmortyapi.com/api/location/",
    "episodes": "https://rickandmortyapi.com/api/episode/"
};

const getData = async (data) => {
    data = data || {};
    data.type = data.type || 'characters';

    let params = getParams();

    const apiURL = data.id ? `${ API[data.type] }${ data.id }/?${ params }` : `${ API[data.type] }?${ params }`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        return data ? data : { results: [] };
    } catch (err) {
        console.error('Fetch error', err);
    }
};

export default getData;