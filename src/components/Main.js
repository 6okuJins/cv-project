import React from 'react';
import CVForm from './Form/CVForm';

const Main = (props) => {
  const { onChange } = props;
  const main = (<div className='main'>
    <CVForm onChange={ onChange }/>
  </div>);
  
  return main;
}
export default Main;