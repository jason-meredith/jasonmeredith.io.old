import React from 'react';

export default function Me(props) {
  return (
    <div id="me" className="jumbotron vertical-center">
      <div className="container">
        <div className="row">
          <div className="col col-lg-4">
            <img alt="Self-Portrait" id="profileImg" src="img/me.jpg" />
          </div>
          <div id="about" className="col col-lg-8">
            <div className="about">

              <h1>Jason Meredith</h1>

              <p id="location"><b>Ottawa, Canada</b></p>

              <table>
                <tbody>
                  <tr>
                    <td><img alt="Github Link" className="linkIcon" src="img/GitHub.png" /></td>
                    <td><a target='_blank' href="https://www.github.com/jason-meredith">@jason-meredith</a></td>
                  </tr>
                  <tr>
                    <td><img alt="Email Address" className="linkIcon" src="img/email.png" /></td>
                    <td><a href="mailto:jasonmeredith93@gmail.com">jasonmeredith93@gmail.com</a></td>
                  </tr>
                  <tr>
                    <td><img alt="LinkedIn Link" className="linkIcon" src="img/linkedin.png" /></td>
                    <td><a target='_blank' href="https://www.linkedin.com/in/jason-meredith-115b2384/">LinkedIn</a></td>
                  </tr>
                  <tr>
                    <td><img alt="Resume Link" className="linkIcon" src="img/doc.png" /></td>
                    <td><a target='_blank' href="/resume">Resume</a></td>
                  </tr>
                  <br />
                </tbody>

              </table>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
