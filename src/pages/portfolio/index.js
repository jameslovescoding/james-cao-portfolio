import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import BackButton from "../../components/backbutton";

export const Portfolio = () => {

  return (
    <HelmetProvider>
      <Container className="About-header added_page_padding">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <BackButton />
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (<div>
              <div key={i} className="po_item">
                <img src={data.img} alt="img for portfolio item" />
                <div className="content">
                  <p>{data.title}</p>
                  <p>{data.description}</p>
                  <a href={data.liveLink} target="_blank">View Live Link</a>
                  <br />
                  <a href={data.githubRepo} target="_blank">View GitHub Repo</a>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
