const getHash = () => {
    let hash = location.hash.slice(1).toLocaleLowerCase().split('/').filter(h => h != '');

    if (hash.length == 0) {
        hash[0] = '/'
    }

    return hash;
}

export default getHash;