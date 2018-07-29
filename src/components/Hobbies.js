import React from "react";
import hobbies from "../data/hobbies";
import Block from "../styles/Block";
import styled from "react-emotion";
import {
  Interest,
  InterestTitle,
  InterestUl,
  InterestLi,
  InterestCard
} from "./../styles/Interest";
const Hobbies = () => {
  return (
    <Block>
      <Interest>
        <InterestTitle>
          <InterestCard icon="heart">Interest</InterestCard>
        </InterestTitle>
        <InterestUl>
          {hobbies.map((hobbie, i) => (
            <InterestLi key={i}>
              <InterestCard icon={hobbie.icon}>{hobbie.name}</InterestCard>
            </InterestLi>
          ))}
        </InterestUl>
      </Interest>
    </Block>
  );
};

export default Hobbies;
