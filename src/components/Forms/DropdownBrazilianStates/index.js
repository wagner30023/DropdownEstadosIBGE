import React, {useEffect,useState } from 'react'
import { fetchStates } from '../../../helpers/ibge';


const DropdownBrazilianStates = ({id, name, onChange = () => {} }) => {

    const [states, setStates] = useState([]);

    useEffect(() => {
        fetchStates().then((states) => {
            return states.map((states) => {
                return {label : states.nome, value : states.sigla}
            }).sort((a, b) => {
                return a.label.localeCompare(b.label)
            })
        }).then((states) => {
            setStates(states);
        });
    }, []);

    return (
        <select id={id || id} name={name || name} onChange={onChange}>
            <option value="" > Selecione um estado... </option>
            {states.map((state) => {
                const {label,value} = state;
                return (<option key={value} value={value} > {label} </option>)
            })}
        </select>
    );
};

export default DropdownBrazilianStates