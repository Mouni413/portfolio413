import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
} from "react-icons/si";
import {
  DiWindows,
  DiSublime,
  DiGithubAlt,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSublime />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubAlt />
      </Col>
    </Row>
  );
}

export default Toolstack;
