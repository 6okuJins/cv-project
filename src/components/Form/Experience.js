import React from 'react';

const Experience = (props) => {
  const { onChange } = props;
  const result = (
    <div className='experience'>
      <h1>Experience</h1>
      <input type="text" name="position" placeholder="Position" onChange={onChange} />
      <input type="text" name="company" placeholder="Company" onChange={onChange} />
      <input type="text" name="city" placeholder="City" onChange={onChange} />
      <input type="text" name="from" placeholder="From" onChange={onChange} />
      <input type="text" name="to" placeholder="To" onChange={onChange} />
    </div>
  );
  return result;
}
export default Experience;