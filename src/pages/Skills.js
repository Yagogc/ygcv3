import React from "react";
import { List } from "../styles/List";

import skills from "../data/skills";

import Education from "./../components/Education";
import Grid from "./../styles/Grid";
import Separator from "../styles/Separator";

const Skills = () => {
  return (
    <Grid dColumns="1">
      <Grid dColumns="2">
        {skills.map((skill, i) => (
          <List
            name={skill.name}
            icon={skill.icon}
            items={skill.skills}
            iconType={skill.iconType}
            key={i}
          />
        ))}
      </Grid>
      <Separator />
      <Education />
    </Grid>
  );
};

export default Skills;
