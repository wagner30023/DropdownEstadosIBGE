// https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/distritos
const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1';

const responseRoJson = (response) => response.json(); 

export const fetchStates = () => {
    const url = `${BASE_URL}/localidades/estados/`;
    return fetch(url).then(responseRoJson);
};

export const fetchCitiesForState = (state) => {
    if(!state) return Promise.resolve([]);
    const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
    return fetch(url).then(responseRoJson);
};