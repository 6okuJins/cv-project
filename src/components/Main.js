import React from 'react';
import {useReactToPrint} from 'react-to-print';
import CVForm from './Form/CVForm';
import CVPreview from './Preview/CVPreview';

const Main = (props) => {
  const { onChange, handleSubmit, deleteHandler} = props;
  const previewRef = React.createRef();
  const handlePrint = useReactToPrint({ content: () => previewRef.current});
  const main = (<div className='main'>
    <CVForm onChange={ onChange  } handleSubmit={handleSubmit} onPrint={handlePrint}/>
    <CVPreview {...props} ref={previewRef}></CVPreview>
  </div>);
  
  return main;
}
export default Main;