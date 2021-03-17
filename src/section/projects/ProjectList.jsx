import React from 'react';

import Project from './Project'

export default function ProjectList(props) {
  const projects = props.projects.map((project) =>
    <Project
      key={project.name}
      name={project.name}
      description={project.description}
      github={project.github}
      links={project.links}
      tech={project.tech}
      highlight={props.highlight}
      clearHighlights={props.clearHighlights}
    />)

  return (
    <div>
      {projects}
    </div>
  )
}