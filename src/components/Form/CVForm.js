import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

const CVForm = (props) => {
  const { onChange } = props;
  const result = (<div className='CVForm'>
    <Personal onChange={ onChange }/>
    <Experience onChange={ onChange } />
    <Education onChange={ onChange } />
  </div>);

  return result;
}
export default CVForm;