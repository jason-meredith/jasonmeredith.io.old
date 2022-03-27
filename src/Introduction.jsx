import React from 'react';
import './style.css';

import Me from './section/Me'
import Projects from './section/Projects'
import Education from './section/Education'
import Experience from './section/Experience'

import Navbar from './components/navbar'
import Divider from './components/divider'

export default class Introduction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      me: {},
      projects: {},
      education: [],
      experience: []
    }
  }

  componentDidMount() {
    fetch("resume.json")
    .then(res => res.json())
    .then(data => {
      this.setState({
        me: data.me,
        projects: data.projects,
        education: data.education,
        experience: data.experience
      })
    })
    .catch((err) => {
      throw err
    })
  }

  render() {
    return (
      <div>
        <Navbar me="Jason Meredith" projects="Projects" experience="Experience" education="Credentials" />

        <div className="content">
          <Me data={this.state} />
          <Divider />

          <Projects data={this.state.projects} />
          <Divider />

          <Experience data={this.state.experience} />
          <Divider />

          <Education data={this.state.education} />
        </div>
      </div>
    )
  }
}
