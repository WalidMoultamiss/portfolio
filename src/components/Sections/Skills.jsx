import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  progressData: [
    {
      id: 1,
      name: "Node.js",
      percentage: 85,
    },
    {
      id: 2,
      name: "React",
      percentage: 90,
    },
    {
      id: 3,
      name: "MangoDB",
      percentage: 60,
    },
    {
      id: 4,
      name: "TYPESCRIPT",
      percentage: 70,
    },
  ],
};

function Skills() {
  return (
    <>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
