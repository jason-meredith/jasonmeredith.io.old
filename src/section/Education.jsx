import React from "react";

export default function Education(props) {
  const credentials = props.data.map((credential) => {
    return (
      <div className="row school">
        <div className="col col-lg-8 ">
          <table className="edutable">
            <tbody>
              <tr>
                <td className="eduicon"><img alt={credential.institute} src={credential.img} className="edu img-fluid" /></td>
                <td>
                  <h3>{credential.institute}</h3>
                  <h5 className="text-muted">{credential.program}</h5>

                </td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="col col-lg-4">
          <div className="edudate">[ {credential.timespan} ]</div>
        </div>
      </div>
    )
  })

  return (
    <div className="jumbotron vertical-page">
      <div className="container">
        <section id="education">
          <h2>Credentials</h2>
          <br />
          {credentials}
          <br />
        </section>
      </div>
    </div>
  )
}
