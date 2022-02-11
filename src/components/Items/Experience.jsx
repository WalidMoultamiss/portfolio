import React from "react";

function Experience({ experience: { year, degree, content } }) {
  return (
    <div className="entry">
      <div className="title">
        <span>{year}</span>
      </div>
      <div className="body">
        <h4 className="mt-0">{degree}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Experience;
