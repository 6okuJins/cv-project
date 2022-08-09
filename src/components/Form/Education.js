import React from 'react';

const Education = (props) => {
  const { onChange, handleSubmit } = props;
  const result = (<form className='education'>
    <h1>Education</h1>
    <input type="text" name="institution" placeholder="Institution Name" onChange={onChange} />
    <input type="text" name="degree" placeholder="Degree" onChange={onChange} />
    <input type="text" name="from" placeholder="From" onChange={onChange} />
    <input type="text" name="to" placeholder="To" onChange={onChange} />
    <button type="submit" className="add" onClick={handleSubmit}>Add</button>
    </form>
  );
  return result;
}
export default Education;