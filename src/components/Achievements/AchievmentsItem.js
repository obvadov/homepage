import React from "react";

const AchievmentItem = ({i_type, statsTitle, statsValue}) => {
  return (
    <div>
      <ul>
        <li>
          <i className={i_type}></i>
        </li>
        <li className="stats-title">{statsTitle}</li>
        <li className="stats-value">{statsValue}</li>
      </ul>
    </div>
  );
};

export default AchievmentItem;
