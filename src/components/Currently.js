import React from "react";
import works from "../data/works";
import projects from "../data/projects";
import Block from "../styles/Block";
import Grid from "../styles/Grid";
import Card from "../styles/Card";

const Currently = () => {
  const work = works[0];
  const project = projects[0];
  return (
    <Grid dColumns="2">
      <Block>
        <Card.Grid hasfooter="true">
          <Card.Header stext="true" itext="true">
            Currently working at:
          </Card.Header>
          <Card.Grid padded="true">
            <Card.LinkExternal href={work.companyUrl}>
              <Card.Icon icon="globe" mright="true" />
              <Card.Title>{work.company}</Card.Title>
            </Card.LinkExternal>
            <Card.Label>
              <Card.Icon icon="dot-circle" mright="true" />
              {work.role}
            </Card.Label>
            {work.description.map(p => (
              <Card.Description>{p}</Card.Description>
            ))}
            <Card.SkillList>
              {work.techs.map((skill, i) => {
                return <Card.SkillItem key={i}>{skill}</Card.SkillItem>;
              })}
            </Card.SkillList>
          </Card.Grid>
          <Card.Footer stext="true">
            <Card.LinkInternal to="/work">
              About previous roles <Card.Icon icon="plus-circle" />
            </Card.LinkInternal>
          </Card.Footer>
        </Card.Grid>
      </Block>
      <Block>
        <Card.Grid hasfooter="true">
          <Card.Header stext="true" itext="true">
            Latest project:
          </Card.Header>
          <Card.Grid padded="true">
            <Card.Title>
              {project.name ? project.name : "Internal Project"}
            </Card.Title>
            {project.company ? (
              <Card.Label>
                <Card.Icon icon="building" mright="true" />
                <Card.CompanyName>{project.company}</Card.CompanyName>
              </Card.Label>
            ) : (
              <Card.Label>
                <Card.Icon icon="user" mright="true" />
                <Card.CompanyName>Personal Project</Card.CompanyName>
              </Card.Label>
            )}
            <Card.WrapperImg small="true">
              <Card.Img src={require(`../assets/portfolio/${project.img}`)} />
              {project.link && (
                <Card.ImgLink href={project.link}>
                  <Card.Icon icon="globe" mright="true" />
                  Link
                </Card.ImgLink>
              )}
              {project.git && (
                <Card.ImgLink href={project.git} git="true">
                  <Card.Icon icon="github-alt" iconType="fab" mright="true" />
                  Git
                </Card.ImgLink>
              )}
            </Card.WrapperImg>
            <Card.SkillList>
              {project.skills.map((skill, i) => {
                return <Card.SkillItem key={i}>{skill}</Card.SkillItem>;
              })}
            </Card.SkillList>
          </Card.Grid>
          <Card.Footer stext="true">
            <Card.LinkInternal to="/portfolio">
              About other projects <Card.Icon icon="plus-circle" />
            </Card.LinkInternal>
          </Card.Footer>
        </Card.Grid>
      </Block>
    </Grid>
  );
};

export default Currently;
