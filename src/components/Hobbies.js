import React from "react";
import hobbies from "../data/hobbies";
import Card from "../styles/Card";
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
    <Card>
      <Interest>
        <InterestTitle>
          <InterestCard icon="heart">Interest</InterestCard>
        </InterestTitle>
        <InterestUl>
          {hobbies.map((hobbie, i) => (
            <InterestLi>
              <InterestCard icon={hobbie.icon}>{hobbie.name}</InterestCard>
            </InterestLi>
          ))}
        </InterestUl>
      </Interest>
    </Card>
  );
};

export default Hobbies;
