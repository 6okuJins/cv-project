import React from 'react';

const Experience = (props) => {
  const { onChange, handleSubmit} = props;
  const result = (
    <form className='experience'>
      <h1>Experience</h1>
      <input type="text" name="position" placeholder="Position" onChange={onChange} required/>
      <input type="text" name="company" placeholder="Company" onChange={onChange} required/>
      <input type="text" name="city" placeholder="City" onChange={onChange} required/>
      <input type="text" name="from" placeholder="From" onChange={onChange} required/>
      <input type="text" name="to" placeholder="To" onChange={onChange} required/>
      <button type="submit" className="add" onClick={handleSubmit}>Add</button>
    </form>
  );
  return result;
}
export default Experience;