import React from "react";

export default function SkillIcon(props) {
  const icon =
    props.lit ?
      <img alt={props.name} className={"icon highlight highlighted"} src={"img/skills/" + props.name + ".png"} />
      :
      <img alt={props.name} className={"icon highlight"} src={"img/skills/" + props.name + ".png"} />

  return (
    <div>
      {icon}
    </div>
  )
}
