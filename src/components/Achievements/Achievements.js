import React from "react";
import AchievmentItem from "./AchievmentsItem";

const Achievements = ({achievments: achievmentsList}) => {
  if (!achievmentsList) achievmentsList = [];

  return (
    <section id="home-statistics" className="text-center">
      <div className="statistics">
        {achievmentsList.map((ach) => (
          <AchievmentItem key={ach.statsTitle} {...ach} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
