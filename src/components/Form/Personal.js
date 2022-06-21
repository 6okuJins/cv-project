import React from 'react';

const Personal = (props) => {
  const {onChange} = props;
  const result = (
    <div className='personal'>
      <h1>Personal Information</h1>
      <input type="text" name='first-name' placeholder='First name' onChange={onChange}/>
      <input type="text" name="last-name" placeholder="Last name" onChange={onChange} />
      <input type="text" name="title" placeholder="Title" onChange={onChange} />
      <input type="text" name="address" placeholder="Address" onChange={onChange} />
      <input type="text" name="phone-number" placeholder="Phone number" onChange={onChange} />
      <input type="text" name="e-mail" placeholder="Email" onChange={onChange} />
      <input type="text" name="description" placeholder="Description" onChange={onChange} />
    </div>
  );
  return result;
}
export default Personal;