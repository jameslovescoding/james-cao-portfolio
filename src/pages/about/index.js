import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  educationtimeline,
  award,
} from "../../content_option";
import BackButton from "../../components/backbutton";


export const About = () => {

  return (
    <HelmetProvider>
      <Container className="About-header added_page_padding">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <BackButton />
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center pt-4">
            <div>
              {dataabout.aboutme}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7" className="pt-4">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (<>
                    <tr key={`tr-${data.jobtitle}-1`} className="first-row">
                      <th scope="row">{data.jobtitle}, {data.employer}</th>
                      <td><p>{data.whereAndWhen}</p></td>
                    </tr>
                    <tr key={`tr-${data.jobtitle}-2`}>
                      <td colSpan="2">
                        <ul>
                          {data.projects.map((project, j) => {
                            return (<>
                              <li key={`ul-work-${i}-${j}`}><p><i className="fa-solid fa-bolt"></i> {project.project}</p></li>
                            </>)
                          })}
                        </ul>
                      </td>
                    </tr>
                  </>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7" className="grid-container pt-4">
            {skills.map((skills, i) => {
              return (
                <div key={i}>
                  <Card className="skill-card">
                    <Card.Body>
                      <h3 className="card-title">{skills.name}</h3>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7" className="pt-4">
            <table className="table caption-top">
              <tbody>
                {educationtimeline.map((data, i) => {
                  return (<>
                    <tr key={i}>
                      <th scope="row">{data.school}</th>
                      <td><p>{data.whereAndWhen}</p></td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <ul>
                          <li key={`ul-edu-${i}-1`}><p><i className="fa-solid fa-bolt"></i> {data.description}</p></li>
                          <li key={`ul-edu-${i}-2`}><p><i className="fa-solid fa-bolt"></i> {data.degree}</p></li>
                        </ul>
                      </td>
                    </tr>
                  </>);
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Award</h3>
          </Col>
          <Col lg="7" className="pt-4">
            <table className="table caption-top">
              <tbody>
                {award.map((data, i) => {
                  return (<>
                    <tr key={i}>
                      <th scope="row">{data.name}</th>
                      <td><p>{data.whereAndWhen}</p></td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <ul>
                          <li key={`ul-award-${i}`}><p><i className="fa-solid fa-bolt"></i> {data.description}</p></li>
                        </ul>
                      </td>
                    </tr>
                  </>);
                })}
              </tbody>
            </table>
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};
