import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";

const WorkExperience = ({workExperienceFromDb}) => {
  //@TODO: add fields to firebase entities
  const dummyWorkExperienceList = [
    {
      position: "Lead Invader",
      years: "3030-3037",
      description: `Implement the dangerous dotted-atack system and gain a title of
            Invider of the Year`,
    },
    {
      position: "Strategy Developer",
      years: "3038-3047",
      description: `Development of strategies, tactics, maneuvers and other methods
            of combat`,
    },
    {
      position: "escape from captivity",
      years: "3040",
      description: `Application of the acquired experience. successful sabotage
            operation`,
    },
    {
      position: "Team Lead. Coach",
      years: "3045-3047",
      description: `Conducting coaching activities. Preparation of elite units,
            record keeping`,
    },
  ];

  // @TODO: add fields to firebase. For now using dummy data
  const workExperienceListSource = workExperienceFromDb
    ? workExperienceFromDb
    : dummyWorkExperienceList;

  return (
    <section id="work-experience" className="text-center">
      <div className="container">
        <h2 className="section-title">WORK EXPERIENCE</h2>
        <div className="bline"></div>
        <p className="lead">I'd like to share some acts I'm proud of:</p>

        <div className="experince-list text-left">
          {workExperienceListSource.map((work) => (
            <WorkExperienceItem key={work.position} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
