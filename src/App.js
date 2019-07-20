import React from 'react';
import logo from './logo.svg';
import './style.css';

class App extends React.Component {
  render() {
    return(
        <div>

          <Navbar me="Jason Meredith" projects="Projects" education="Education" />
          <div className="content">

            <Me />
            <br/><hr/><br/>

            <Projects />
            <br/><hr/><br/>

            <Education />
          </div>
        </div>
    )
  }
}

function Me() {
    return(

        <div id="me" className="jumbotron vertical-center">
          <div className="container">
            <div className="row">
              <div className="col col-lg-4">
                <img id="profileImg" src="img/me.jpg"/>
              </div>
              <div id="about" className="col col-lg-8">
                <div className="about">

                  <h1>Jason Meredith</h1>

                  <p id="location"><b>Ottawa, Canada</b></p>

                  <table>
                      <tbody>
                        <tr>
                          <td><img className="linkIcon" src="img/GitHub.png"/></td>
                          <td><a href="https://www.github.com/jason-meredith">@jason-meredith</a></td>
                        </tr>
                        <tr>
                          <td><img className="linkIcon" src="img/email.png"/></td>
                          <td><a href="mailto:jason-meredith@live.com">jason-meredith@live.com</a></td>
                        </tr>
                        <tr>
                          <td><img className="linkIcon" src="img/linkedin.png"/></td>
                          <td><a href="https://www.linkedin.com/in/jason-meredith-115b2384/">LinkedIn</a></td>
                        </tr>
                      </tbody>

                  </table>

                  <br/>


                </div>
              </div>
            </div>
          </div>
        </div>
    )

}



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
        let data = require("./projects.json")
        this.setState({
            projects: data.projects,
            skills: data.skills
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
        return this.props.links.map( (link) => <div><a href={link.url}>{link.label}</a><br/></div>)
    }

    highlight() {
        this.props.highlight(this.props.tech)
    }

    render() {
        return(
            <div className="project" onMouseEnter={this.highlight} onMouseLeave={this.props.clearHighlights}>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <p>{this.links()}</p>
            </div>
        )
    }
}

class SkillGrid extends React.Component {


    constructor(props) {
        super(props)



        this.grid = this.grid.bind(this)
        //this.shuffle = this.shuffle.bind(this)

    }


    grid() {

        return this.props.skills.map( (skill) => {
            return <SkillIcon name={skill} lit={ this.props.lit.includes(skill) }/>
        })
    }

    render() {
        return(
            <div className={"grid"}>
                {this.grid()}
            </div>
        )
    }
}

class SkillIcon extends React.Component {

    constructor(props) {
        super(props)

        this.icon = this.icon.bind(this)
    }

    icon() {
        if(this.props.lit) {
            return <img className={"icon highlight highlighted"} src={"img/skills/" + this.props.name + ".png"} />
        } else {
            return <img className={"icon highlight"} src={"img/skills/" + this.props.name + ".png"} />
        }
    }

    render() {
        return(
            <div>
                {this.icon()}
            </div>
        )
    }
}

class Education extends React.Component {


    constructor(props) {
        super(props)


    }
    static algonquin() {
        return(
            <div className="row school">
                <div className="col col-lg-8 ">
                    <table className="edutable">
                        <tr>
                            <td className="eduicon"><img src="img/edu/algonquin.png" className="edu"/></td>
                            <td>
                                <h3>Algonquin College</h3>
                                <h5 className="text-muted">Computer Programming</h5>

                            </td>
                        </tr>
                    </table>

                </div>
                <div className="col col-lg-4">
                    <div className="edudate">[ Sept 2016 - April 2019 ]</div>
                </div>
            </div>
        )
    }

    static bell() {
        return(
            <div className="row school">
                <div className="col col-lg-8 ">
                    <table style={{width: 100 +"%"}}>
                        <tr>
                            <td className="eduicon"><img src="img/edu/bell.png" className="edu"/></td>
                            <td>
                                <h3>Bell HS</h3>
                                <h5 className="text-muted">High School Diploma</h5>

                            </td>
                        </tr>
                    </table>

                </div>
                <div className="col col-lg-4">
                    <div className="edudate">[ Sept 2007 - June 2011 ]</div>
                </div>
            </div>


        )

    }


    render() {
        return(
            <div className="jumbotron vertical-page">
                <div className="container">
                    <section id="education">
                        <h2>Education</h2>
                        <br/>

                        {Education.algonquin()}
                        {Education.bell()}

                        <br/>

                    </section>

                </div>
            </div>
        )
    }
}



class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.options = this.options.bind(this);
  }

  options() {
    return Object.keys(this.props).map( (href, index) => <li><a className="nav-link" href={"#" + href}>{this.props[href]}</a></li> )
  }

  render() {
    return(

        <nav className="navbar navbar-expand navbar-light fixed-bottom">

          <ul className="navbar-nav ml-auto" id="navbar">
            {this.options()}
          </ul>
        </nav>
    )
  }
}

export default App;
