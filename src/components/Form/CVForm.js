import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

const CVForm = (props) => {
  const { onChange, handleSubmit } = props;
  const result = (<div className='CVForm'>
    <Personal onChange={ onChange }/>
    <Experience onChange={ onChange } handleSubmit={ handleSubmit } />
    <Education onChange={ onChange } handleSubmit={ handleSubmit }/>
  </div>);

  return result;
}
export default CVForm;