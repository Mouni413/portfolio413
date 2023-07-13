import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import wikki from "../../Assets/Projects/wikki.png";
import jobs from "../../Assets/Projects/jobs.jpeg";
import food from "../../Assets/Projects/food.png";
import bomb from "../../Assets/Projects/bomb.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Munch"
              description="Food ordering system in this it will show the items of the food available in all the restaurents.It will show menu related to food items.This Web Site Contain Food Services provide Fresh food with Best offers.This Website contains Devilary and Payment options."
              ghLink="https://github.com/Mouni413/food_order"
              demoLink="https://orderingfood.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobs}
              isBlog={false}
              title="Online Job Portal"
              description="It is a Website dedicated for online information about recruiters as well as job seekers.A job portal helps both the job seekers and recruiters finding the right organization for the employees."
              ghLink="https://github.com/Mouni413/Online-job-portal"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo"
              description="To add and remove todo items.To mark them.We can delete them.We can save them."
              ghLink="https://github.com/Mouni413/todo-application"
              demoLink="https://todolist413.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bomb}
              isBlog={false}
              title="Bonb Diffusion"
              description="In this application if the text 'defuse' is not entered in the HTML input element and not pressed Enter before 10 seconds,then
              The text BOOM text will be displayed"
              ghLink="https://github.com/Mouni413/bomb_defuse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wikki}
              isBlog={false}
              title="Wikki Pedia Search"
              description="In this application we can search anything on the search bar it will provide us information related to the search and provide list oflinks related to that"
              ghLink="https://github.com/Mouni413/wikkipedia-search"
              demoLink="https://mouni413wikki.ccbp.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
