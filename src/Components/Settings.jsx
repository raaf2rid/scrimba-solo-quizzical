import React, { useState } from 'react';
import Select from 'react-select';
import {categories, difficulty, type, number} from './SettingsData'


export default function Settings() {

  const [selectedOption, setSelectedOption] = useState(null);

  function handleClick(){
    console.log(selectedOption)
  }

  return (
    <div className="select-menu">
      <div className='options-div'>
      <h3>Category:</h3>
      <Select className='option-class'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={categories}
      />
      </div>
      <div className='options-div'>
      <h3>Difficulty:</h3>
      <Select className='option-class'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={difficulty}
      />
      </div>
      <div className='options-div'>
      <h3>Type:</h3>
      <Select className='option-class'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={type}
      />
      </div>
      <div className='options-div'>
      <h3>How many:</h3>
      <Select className='option-class'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={number}
      />
      </div>
      
      <button onClick={handleClick}className='check-btn btn'>Save</button>
    </div>
  );
}