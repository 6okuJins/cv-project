import React from 'react';
import { PreviewStyle } from '../../styles';
import { EmailIcon, PhoneIcon, LocationIcon, GithubIcon, DeleteIcon } from '../../assets';
const CVPreview = React.forwardRef((props, refs) => {
  const {personal, educations, experiences, deleteHandler} = props;
  const name = <div className={PreviewStyle.name}>{personal['first-name']} {personal['last-name']}</div>
  const title = <div className={PreviewStyle.title}>{personal['title']}</div>
  const description = <div className={PreviewStyle.description}>{personal['description']}</div>
  const contactInfo = <div className={PreviewStyle.contactInfo}>
    <div className={PreviewStyle.email}><EmailIcon />{personal['e-mail']}</div>
    <div className={PreviewStyle.phoneNumber}><PhoneIcon />{personal['phone-number']}</div>
    <div className={PreviewStyle.address}><LocationIcon />{personal['address']}</div>
    <div className={PreviewStyle.github}><GithubIcon />{personal['github']}</div>
  </div>
  const result = (
    <div className={PreviewStyle.CVPreview} ref={refs}>
      <div className={ PreviewStyle.personalInfo }>
        {name}
        {title}
        {description}
        </div>
      {contactInfo}
      {/* {Object.keys(personal).map(key => {
        return (<p>{personal[key]}</p>);
      })} */}
      <div className={PreviewStyle.education}>
        Education
      {educations.map((education) => {
        return (
          <div key={education.id}>
            <div>{education.from}-{education.to}</div>
            <div>{education.institution}</div>
            <div>{education.degree}</div>
            <button className={PreviewStyle.deleteButton} onClick={() => deleteHandler('educations', education.id)}><DeleteIcon /></button>
          </div>
        )
      })}
      </div>
        <div className={PreviewStyle.experience}>
          Experience
      {experiences.map((experience) => {
        return (
          <div key={experience.id}>
            <div>{experience.from}-{experience.to}</div>
            <div>{experience.position}</div>
            <div>{experience.company}, {experience.city}</div>
            <button className={PreviewStyle.deleteButton} onClick={() => deleteHandler('experiences', experience.id)}><DeleteIcon /></button>
          </div>
        );
      })}
      </div>
    </div>
  );
  return result;
});
export default CVPreview;