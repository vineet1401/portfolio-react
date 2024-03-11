import React, { useState } from "react";
import Data from "./Data";
import SkillCard from "./SkillCard";
import "./style.css";
import { motion } from "framer-motion";

const Skills = () => {
  const DataItem = [
    ...new Set(
      Data.map((cat) => {
        return cat.type;
      })
    ),
  ];

  const Inital = Data.filter((item) => {
    return item.type === "Front End";
  });


  const [SkillItem, setSkill] = useState(Inital);
  const [selectedTab, setSelectedTab] = useState("Front End");

  function filterData(type) {
    const Skill = Data.filter((item) => {
      return item.type === type;
    });
    setSelectedTab(type);
    return setSkill(Skill);
  }

  return (
    <>
    <span className="shadow-2"></span>
      <h1 className="head">MY SKILLS</h1>
      <span className="shadow-1"></span>
        <div className="skill-box">
          <div className="SkillButton">
            <ul>
              {DataItem.map((item, index) => {
                return (
                  <li
                    className={item === selectedTab ? "active" : ""}
                    key={index}
                  >
                    <button key={item} onClick={() => filterData(item)}>
                      {item.toUpperCase()}
                    </button>
                      {item === selectedTab ? (
                        <motion.div
                          className="underline"
                          layoutId="underline"
                        />
                      ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="SkillData">
            <SkillCard Skill={SkillItem} />
          </div>
        </div>
    </>
  );
};

export default Skills;
