import React from "react";

import SkillIcon from './skillgrid/SkillIcon';

export default function SkillGrid(props) {
  const grid = props.skills.map((skill) => {
    return <SkillIcon key={skill} name={skill} lit={props.lit.includes(skill)} />
  })

  return (
    <div className={"grid"}>
      {grid}
    </div>
  )
}
