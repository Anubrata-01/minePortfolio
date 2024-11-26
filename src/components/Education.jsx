import React from 'react'

import MyEducationalDetails from "../details/data";

const Education = () => {
  return (
    <section className="education-section">
      {MyEducationalDetails.map((details, i) => (
        <div className="education-card" key={i}>
          <h1 className="degree">{details?.Degree}</h1>
          <h3 className="college">{details?.College}</h3>
          <p className="duration">{details?.From} - {details?.Year}  <span className=" ml-5">Per: {details?.Percentage}</span></p>
        </div>
      ))}
    </section>
  );
}

export default Education;


