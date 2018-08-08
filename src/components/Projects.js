import React, { Component } from "react";
import projects from "../data/projects";
import Grid from "./../styles/Grid";
import { Card } from "../styles/CardProject";
import styled from "react-emotion";
import Icon from "./../styles/Icon";
import FlipMove from "react-flip-move";
export default class Projects extends Component {
  state = {
    filtered: [],
    projects: [],
    disabled: false
  };
  componentDidMount() {
    const projectsId = projects.map((project, i) => {
      project.id = i;
      return project;
    });
    this.setState({
      projects: projectsId,
      filtered: projectsId
    });
  }
  filter = isProfessional => {
    this.setState({
      disabled: true
    });
    setTimeout(() => {
      this.setState({
        disabled: false
      });
    }, 600);
    if (isProfessional === undefined) {
      this.setState({
        filtered: this.state.projects
      });
      return;
    }
    if (!isProfessional) {
      const filtered = this.state.projects.filter(
        project => project.company === ""
      );
      this.setState({
        filtered
      });
    }
    if (isProfessional) {
      const filtered = this.state.projects.filter(
        project => project.company !== ""
      );
      this.setState({
        filtered
      });
    }
  };
  render() {
    return (
      <Grid dColumns="1">
        <Toggle>
          <ButtonGroup>
            <Input
              type="radio"
              id="all"
              name="projects"
              disabled={this.state.disabled}
              defaultChecked
              onClick={() => this.filter()}
            />
            <Label htmlFor="all">
              <Icon icon="grip-vertical" /> All
            </Label>

            <Input
              type="radio"
              id="profesional"
              name="projects"
              disabled={this.state.disabled}
              onClick={() => this.filter(true)}
            />
            <Label htmlFor="profesional">
              <Icon icon="building" /> Profesional
            </Label>

            <Input
              type="radio"
              id="personal"
              name="projects"
              disabled={this.state.disabled}
              onClick={() => this.filter(false)}
            />
            <Label htmlFor="personal">
              <Icon icon="user" /> Personal
            </Label>
          </ButtonGroup>
        </Toggle>
        <Grid dColumns="2" style={{ position: "relative" }}>
          <FlipMove typeName={null}>
            {this.state.filtered.map(project => (
              <Card.Wrapper key={project.id}>
                {project.name ? (
                  <Card.Title>{project.name}</Card.Title>
                ) : (
                  <Card.Title>Internal Project</Card.Title>
                )}
                {project.company ? (
                  <Card.Company>
                    <Card.Icon icon="building" mright="true" />
                    <Card.CompanyName>{project.company}</Card.CompanyName>
                  </Card.Company>
                ) : (
                  <Card.Company>
                    <Card.Icon icon="user" mright="true" />
                    <Card.CompanyName>Personal Project</Card.CompanyName>
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
                      <Card.Icon
                        icon="github-alt"
                        iconType="fab"
                        mright="true"
                      />Git
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
          </FlipMove>
        </Grid>
      </Grid>
    );
  }
}

const Toggle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ButtonGroup = styled.div`
  background: ${props => props.theme.color.ui3};
  display: flex;
  flex-direction: row;
  padding: 4px;
`;

const Label = styled.label`
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  &:hover {
    background: ${props => props.theme.color.ui4};
  }
  @media (${props => props.theme.mq.mobile}) {
    font-size: 14px;
  }
`;
const Input = styled.input`
  display: none;
  &:checked + label {
    background: ${props => props.theme.color.ui2};
  }
  &:disabled + label {
    opacity: 0.3;
    cursor: progress;
  }
`;
