import React from "react";

function Education()  {

    return(
        <div className="jumbotron vertical-page">
            <div className="container">
                <section id="education">
                    <h2>Education</h2>
                    <br/>

                    <Algonquin />
                    <Bell />

                    <br/>

                </section>

            </div>
        </div>
    )
}

function Bell() {
    return(
        <div className="row school">
            <div className="col col-lg-8 ">
                <table style={{width: 100 +"%"}}>
                    <tbody>
                        <tr>
                            <td className="eduicon"><img alt="Bell HS" src="img/edu/bell.png" className="edu"/></td>
                            <td>
                                <h3>Bell HS</h3>
                                <h5 className="text-muted">High School Diploma</h5>

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="col col-lg-4">
                <div className="edudate">[ Sept 2007 - June 2011 ]</div>
            </div>
        </div>


    )
}

function Algonquin() {
    return(
        <div className="row school">
            <div className="col col-lg-8 ">
                <table className="edutable">
                    <tbody>
                        <tr>
                            <td className="eduicon"><img alt="Algonquin College" src="img/edu/algonquin.png" className="edu"/></td>
                            <td>
                                <h3>Algonquin College</h3>
                                <h5 className="text-muted">Computer Programming</h5>

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="col col-lg-4">
                <div className="edudate">[ Sept 2016 - April 2019 ]</div>
            </div>
        </div>
    )
}

export default Education;