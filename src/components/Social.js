import React from "react";
import socials from "../data/socials";
import Card from "../styles/Card";
import styled from "react-emotion";
import SocialCard from "../styles/SocialCard";

const Social = () => {
  return (
    <CardSocial padded>
      {socials.map((social, i) => (
        <SocialCard
          padded
          icon={social.icon}
          href={social.url}
          color={social.color}
        >
          {social.name}
        </SocialCard>
      ))}
    </CardSocial>
  );
};

export default Social;

const CardSocial = styled(Card)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  grid-gap: 10px;
`;
