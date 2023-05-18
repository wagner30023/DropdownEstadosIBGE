import logo from './logo.svg';
import './App.css';
import './index.css';
import DropdownBrazilianStates from './components/Forms/DropdownBrazilianStates';
import DropdownBrazilianCities from './components/Forms/DropdownBraziliancCities';

import { useState } from 'react';


function App() {

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const {value,name} = e.target;
    setFormValues({...formValues,[name]:value});
  }

  console.log( 'formValues', formValues);

  return (
    <div className="container">
      <form>
        <label htmlFor="state"> Estado: </label>
        <DropdownBrazilianStates id="state" name="state" onChange={handleInputChange} />

        <label htmlFor="city"> Cidade </label>
        <DropdownBrazilianCities id="city" name="city" state={formValues.state} onChange={handleInputChange} />
      </form>
    </div>
  );
}

export default App;
