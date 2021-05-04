import React from "react";

const WorkExperienceItem = ({position, years, description}) => {
  return (
    <div>
      <ul>
        <li className="position_title">{position}</li>
        <li className="position_years">{years}</li>
        <li className="position_description">{description}</li>
      </ul>
    </div>
  );
};

export default WorkExperienceItem;
