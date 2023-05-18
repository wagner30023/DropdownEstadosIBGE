import React from 'react'
import { useEffect, useState } from 'react'
import { fetchCitiesForState } from '../../../helpers/ibge';

const DropdownBrazilianCities = ({id, name, state, onChange = () => {}}) => {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchCitiesForState(state).then((cities) => {
            setCities(cities);
        })
    }, [state]);

    // console.log(cities);

    return (
        <select id={id || name} name={name || id} onChange={onChange}>
            <option value=""> Selecione um cidade... </option>
            {cities.map((city) => {
                const {id,nome } = city;
                return (<option value={id} key={id}>  {nome} </option>);
            })}
        </select>
    )
}

export default DropdownBrazilianCities