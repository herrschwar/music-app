import React from 'react';
import './SongSearchForm.css';
import tachyons from 'tachyons';

const SongSearchForm = ({onButtonSubmit, data, onInputChange}) => {
  return (
    <div>
      <h3 className='f3 center'>
        {`Enter an artist's name below and click THRICE on Search to get their top 50`}
      </h3>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input id="input" className='f4 pa2 w-70 center' type='text' 
          onChange={onInputChange}
          />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Search</button>
          {console.log(data)}
        </div>
      </div>
    </div>
  );
}

export default SongSearchForm;