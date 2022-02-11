import React from 'react';
import Experience from '../Items/Experience';

const experiencesData = [
  {
    id: 1,
    year: 'September 2021 - October 2021',
    degree: 'ECONOSTIC | Frontend Developer Intern',
    content:
      'Frontend development of multiple projects that were developed based on the provided specifications and mockups/designs, with the client’s preferences and the user experience in mind.',
  },
  {
    id: 2,
    year: 'January 2018 - February 2018',
    degree: 'TOMORROW MEDIA NETWORK | Frontend Developer Intern',
    content:
      'Training in the basic frontend web stack technologies (HTML, CSS, JavaScript)',
  },
  {
    id: 3,
    year: 'March 2015 - May 2015',
    degree: 'SMART WEB | Web Designer Intern',
    content:
      'Collaborated with the team and worked along the senior designer to design the UI and UX of multiple websites.',
  },
];

function Experiences() {
  return (
    <div className='timeline'>
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className='timeline-line'></span>
    </div>
  );
}

export default Experiences;
