import getParams from '../utils/getParams';

const Paginator = {
    params: getParams().split('&').map(p => {
        const aux = p.split('=').filter(a => a != '');

        let res = {};
        if (aux.length > 0) {
            res[aux[0]] = aux[1];
        }

        return res;
    }).reduce((prev, next) => ({ ...prev, ...next })),

    prevUrl: function(base) {
        let url = base;
        if (this.params.page && this.params.page != 1) {
            url += `?page=${ parseInt(this.params.page) - 1 }`;
        }

        return url;
    }, 

    nextUrl: function(base, total) {
        let url = base;
        
        this.params.page = this.params.page ? this.params.page : 1;
        if (this.params.page != total) {
            url += `?page=${ parseInt(this.params.page) + 1 }`;
        } else {
            url += `?page=${ this.params.page }`;
        }

        return url;
    }, 

    render: function(base, total) {
        const selectAux = Array.from(Array(total).keys());

        return `
            <ul class="paginator">
                <li><a href="${ this.prevUrl(base) }" class="arrow left"></a></li>

                <li>
                    <select>
                        ${ selectAux.map((opt, i) => `
                            <option>${ i + 1 }</option>
                        `).join('') }
                    </select>
                </li>

                <li><a href="${ this.nextUrl(base, total) }" class="arrow right"></a></li>
            </ul>
        `;
    }
};

export default Paginator;