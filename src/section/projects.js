import React from "react";
import SkillGrid from './skillgrid'

class Projects extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            projects:[],
            skills: [],
            lit: []
        }




        this.highlight = this.highlight.bind(this);
        this.clearHighlights = this.clearHighlights.bind(this);



    }

    componentDidMount() {

        fetch("projects.json")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    projects: data.projects,
                    skills: data.skills
                })
            })
            .catch((err) => {
                throw err
            })
    }

    highlight(tech) {
        this.setState({lit: tech})
    }

    clearHighlights() {
        this.setState({lit: []})
    }


    render() {
        return(

            <div className="jumbotron vertical-page">
                <div className="container">
                    <section id="projects">
                        <h2>Projects</h2>
                        <div className="row">
                            <div className="col col-lg-8">
                                <ProjectList projects={this.state.projects} highlight={this.highlight} clearHighlights={this.clearHighlights}/>
                            </div>
                            <div className="col col-lg-4 hidden-md-down">
                                <SkillGrid skills={this.state.skills} lit={this.state.lit} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

class ProjectList extends React.Component {

    constructor(props) {
        super(props);

        this.projects = this.projects.bind(this);
    }



    projects() {
        return this.props.projects.map( (project) =>
            <Project
                key={project.name}
                name={project.name}
                description={project.description}
                github={project.github}
                links={project.links}
                tech={project.tech}
                highlight={this.props.highlight}
                clearHighlights={this.props.clearHighlights}
            /> )
    }

    render() {
        return(
            <div>
                {this.projects()}
            </div>
        )
    }
}

class Project extends React.Component {

    constructor() {
        super()

        this.links = this.links.bind(this);
        this.highlight = this.highlight.bind(this);
    }

    links() {
        return this.props.links.map( (link) => <a key={link.label} href={link.url}>{link.label}</a>)
    }

    highlight() {
        this.props.highlight(this.props.tech)
    }

    render() {
        return(
            <div className="project" onMouseEnter={this.highlight} onMouseLeave={this.props.clearHighlights}>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}<br /></p>
                <p>{this.links()}</p>
            </div>
        )
    }
}

export default Projects;