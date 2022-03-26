import React from 'react';

export default function Project(props) {
  const links = props.links.map((link) => <><a target='_blank' key={link.label} href={link.url}>{link.label}</a><br /></>)
  const highlight = () => props.highlight(props.tech);

  return (
    <div className="project" onMouseEnter={highlight} onMouseLeave={props.clearHighlights}>
      <h3>{props.name}</h3>
      <p>{props.description}<br /></p>
      <p>{links}</p>
    </div>
  )
}
