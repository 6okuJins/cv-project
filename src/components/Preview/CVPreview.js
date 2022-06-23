import React from 'react';

const CVPreview = (props) => {
  const {personal, educations, experiences} = props;
  const result = (
    <div className='CVPreview'>
      <h1>PERSONAL INFO</h1>
      {Object.keys(personal).map(key => {
        return (<p>{personal[key]}</p>);
      })}
      <div>-----------------------------</div>
        <h1>EXPERIENCES</h1>
      {experiences.map((experience) => {
        return (
          <div key={experience.id}>
            <div>Position:{experience.position} </div>
            <div>Company:{experience.company} </div>
            <div>City:{experience.city}</div>
            <div>From:{experience.from}</div>
            <div>To:{experience.to}</div>
            <div>------------------------</div>
          </div>
        );
      })}
        <h1>EDUCATION</h1>
      {educations.map((education) => {
        return (
          <div key={education.id}>
            <div>University:{education.university}</div>
            <div>City:{education.city}</div>
            <div>Degree:{education.degree}</div>
            <div>Subject:{education.subject}</div>
            <div>From:{education.from}</div>
            <div>To:{education.to}</div>
            <div>------------------------</div>
          </div>
        )
      })}
    </div>
  );
  return result;
}
export default CVPreview;