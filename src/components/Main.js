import React from 'react';
import CVForm from './Form/CVForm';
import CVPreview from './Preview/CVPreview';

const Main = (props) => {
  const { onChange, handleSubmit } = props;
  const main = (<div className='main'>
    <CVForm onChange={ onChange  } handleSubmit={handleSubmit}/>
    <CVPreview {...props}></CVPreview>
  </div>);
  
  return main;
}
export default Main;