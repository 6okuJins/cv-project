import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

const CVForm = (props) => {
  const { onChange, handleSubmit, onPrint } = props;
  const result = (<div className='CVForm'>
    <Personal onChange={ onChange }/>
    <Education onChange={ onChange } handleSubmit={ handleSubmit }/>
    <Experience onChange={ onChange } handleSubmit={ handleSubmit } />
    <button onClick={onPrint}>Print</button>
  </div>);

  return result;
}
export default CVForm;