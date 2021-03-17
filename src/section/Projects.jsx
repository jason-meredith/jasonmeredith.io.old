import React from "react";
import SkillGrid from './SkillGrid'

import ProjectList from './projects/ProjectList'

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lit: []
    }

    this.highlight = this.highlight.bind(this);
    this.clearHighlights = this.clearHighlights.bind(this);
  }

  highlight(tech) {
    this.setState({ lit: tech })
  }

  clearHighlights() {
    this.setState({ lit: [] })
  }

  render() {
    return (
      <div className="jumbotron vertical-page">
        <div className="container">
          <section id="projects">
            <h2>Projects</h2>
            <div className="row">
              <div className="col col-lg-8">
                <ProjectList 
                  projects={this.props.data.projects || []} 
                  highlight={this.highlight} 
                  clearHighlights={this.clearHighlights} 
                />
              </div>
              <div className="col col-lg-4 hidden-md-down">
                <SkillGrid 
                  skills={this.props.data.skills || []} 
                  lit={this.state.lit} 
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
