import React from "react";
import projects from "../data/projects";
import Grid from "./../styles/Grid";
import { Card } from "../styles/CardProject";

const Projects = () => {
  return (
    <Grid dColumns="2">
      {projects.map((project, i) => (
        <Card.Wrapper key={i}>
          <Card.Title>{project.name}</Card.Title>
          {project.company && (
            <Card.Company>
              <Card.Icon icon="building" mright="true" />
              <Card.CompanyName>{project.company}</Card.CompanyName>
            </Card.Company>
          )}
          <Card.Img bg={require(`../assets/portfolio/${project.img}`)}>
            {project.link && (
              <Card.Link href={project.link}>
                <Card.Icon icon="globe" mright="true" />Link
              </Card.Link>
            )}
            {project.git && (
              <Card.Link href={project.git} git="true">
                <Card.Icon icon="github-alt" iconType="fab" mright="true" />Git
              </Card.Link>
            )}
          </Card.Img>
          <Card.SkillList>
            {project.skills.map((skill, i) => {
              return <Card.SkillItem key={i}>{skill}</Card.SkillItem>;
            })}
          </Card.SkillList>
        </Card.Wrapper>
      ))}
    </Grid>
  );
};

export default Projects;
