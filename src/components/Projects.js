import React, { Component } from "react";
import projects from "../data/projects";
import Grid from "./../styles/Grid";
import { Card } from "../styles/CardProject";
import styled from "react-emotion";
import Icon from "./../styles/Icon";
import posed, { PoseGroup } from "react-pose";
export default class Projects extends Component {
  state = {
    filterByProfesional: [],
    filterByPersonal: [],
    filtered: [],
    projects: [],
    disabled: false,
    type: ""
  };
  componentDidMount() {
    const projectsId = projects.map((project, i) => {
      project.id = i;
      return project;
    });
    const filterByPersonal = projectsId.filter(
      project => project.company === ""
    );
    const filterByProfesional = projectsId.filter(
      project => project.company !== ""
    );
    this.setState({
      projects: projectsId,
      filtered: projectsId,
      filterByProfesional,
      filterByPersonal
    });
  }
  filter = type => {
    switch (type) {
      case "all":
        this.setState({
          filtered: this.state.projects,
          type
        });
        break;
      case "personal":
        this.setState({
          filtered: this.state.filterByPersonal,
          type
        });
        break;
      case "professional":
        this.setState({
          filtered: this.state.filterByProfesional,
          type
        });
        break;
      default:
        break;
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
              onClick={() => this.filter("all")}
            />
            <Label htmlFor="all">
              <Icon icon="grip-vertical" /> All
            </Label>

            <Input
              type="radio"
              id="professional"
              name="projects"
              disabled={this.state.disabled}
              onClick={() => this.filter("professional")}
            />
            <Label htmlFor="professional">
              <Icon icon="building" /> Professional
            </Label>

            <Input
              type="radio"
              id="personal"
              name="projects"
              disabled={this.state.disabled}
              onClick={() => this.filter("personal")}
            />
            <Label htmlFor="personal">
              <Icon icon="user" /> Personal
            </Label>
          </ButtonGroup>
        </Toggle>
        <CardWrapper dColumns="2">
          <PoseGroup>
            {this.state.filtered.map((project, i) => (
              <CardProject key={project.id}>
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
                <Card.WrapperImg>
                  <Card.Img
                    src={require(`../assets/portfolio/${project.img}`)}
                  />
                  )}
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
                </Card.WrapperImg>
                <Card.SkillList>
                  {project.skills.map((skill, i) => {
                    return <Card.SkillItem key={i}>{skill}</Card.SkillItem>;
                  })}
                </Card.SkillList>
              </CardProject>
            ))}
          </PoseGroup>
        </CardWrapper>
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
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props =>
    props.mColumns ? props.mColumns : "1"}, 1fr);
  grid-gap: 10px;
  
  @media (${props => props.theme.mq.desktop}) {
    grid-template-columns: repeat(${props =>
      props.dColumns ? props.dColumns : "1"}, 1fr)
`;

const CardProject = posed(Card.Wrapper)({
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      ease: "easeInOut"
    }
  }
});
