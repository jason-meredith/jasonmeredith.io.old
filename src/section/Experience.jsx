import React from "react";

export default function Experience(props) {
  const jobs = props.data.map((job) => {
    const description = job.description.map(item => {
      return (
        <li>{item}</li>
      )
    })
    return (
      <div className="row school">
        <div className="col col-lg-8 ">
          <div className='d-none d-lg-block'>
            <table style={{ width: 100 + "%" }}>
              <tbody>
                <tr>
                  <td className="eduicon"><img alt={job.company} src={job.img} className="edu " /></td>
                  <td>
                    <h3>{job.company}</h3>
                    <h5 className="text-muted">{job.title}</h5>
                    <ul>
                    {description}
                    </ul>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-lg-none">
          <img alt={job.company} src={job.img} className="edu d-lg-none mx-auto d-block" />
          <div className="edudate mb-4">{job.timespan}</div>
  
          <h3>{job.company}</h3>
                    <h5 className="text-muted">{job.title}</h5>
                    <ul>
                    {description}
                    </ul>
          </div>
          
          
        </div>
        <div className="col col-lg-4 d-none d-lg-block">
          <div className="edudate">{job.timespan}</div>
        </div>
      </div>
    )
  })

  return (
    <div className="jumbotron vertical-page">
      <div className="container">
        <section id="experience">
          <h2>Experience</h2>
          <br />
          {jobs}
          <br />
        </section>
      </div>
    </div>
  )
}
