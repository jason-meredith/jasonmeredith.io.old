import React from 'react';
import './style.css';
import Projects from './section/projects'
import Education from './section/education'

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
                <img alt="Self-Portrait" id="profileImg" src="img/me.jpg"/>
              </div>
              <div id="about" className="col col-lg-8">
                <div className="about">

                  <h1>Jason Meredith</h1>

                  <p id="location"><b>Ottawa, Canada</b></p>

                  <table>
                      <tbody>
                        <tr>
                          <td><img alt="Github Link" className="linkIcon" src="img/GitHub.png"/></td>
                          <td><a href="https://www.github.com/jason-meredith">@jason-meredith</a></td>
                        </tr>
                        <tr>
                          <td><img alt="Email Address" className="linkIcon" src="img/email.png"/></td>
                          <td><a href="mailto:jason-meredith@live.com">jason-meredith@live.com</a></td>
                        </tr>
                        <tr>
                          <td><img alt="LinkedIn Link" className="linkIcon" src="img/linkedin.png"/></td>
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

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.options = this.options.bind(this);
  }

  options() {
    return Object.keys(this.props).map( (href, index) => <li key={index} ><a className="nav-link" href={"#" + href}>{this.props[href]}</a></li> )
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
