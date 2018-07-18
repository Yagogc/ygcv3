import React from "react";
import { Wrapper, Block } from "../styles/Timeline";

import works from "../data/works";

const Works = () => {
  return (
    <Wrapper>
      {works.map((work, i) => {
        return (
          <Block.Wrapper work={work} key={i}>
            <Block.Disk present={work.isCurrent} />
            <Block.Card>
              <Block.Link href={work.companyUrl}>
                <Block.LinkIcon icon="globe" mright="true" />
                <Block.Title>{work.company}</Block.Title>
              </Block.Link>
              <Block.Info>
                <Block.Role>
                  <Block.RoleIcon icon="dot-circle" mright="true" />
                  {work.role}
                </Block.Role>
                <Block.Date>
                  <Block.DateIcon icon="calendar-alt" mright="true" />
                  {work.startDate}{" "}
                  {work.isCurrent || work.endDate ? (
                    <Block.DateIcon
                      icon="long-arrow-right"
                      mright="true"
                      mleft="true"
                    />
                  ) : (
                    ""
                  )}{" "}
                  {work.isCurrent ? "Present" : work.endDate}
                </Block.Date>
              </Block.Info>
              <Block.Description>{work.description}</Block.Description>
              <Block.TechList>
                {work.techs.map((tech, i) => (
                  <Block.TechItem key={i}>{tech}</Block.TechItem>
                ))}
              </Block.TechList>
            </Block.Card>
          </Block.Wrapper>
        );
      })}
    </Wrapper>
  );
};

export default Works;
