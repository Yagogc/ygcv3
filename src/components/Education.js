import React from "react";
import CardEdu from "./../styles/CardEdu";
import diplomas from "../data/education";
import Grid from "./../styles/Grid";

const Education = () => {
  return (
    <Grid dColumns="2">
      {diplomas.map(diploma => <CardEdu {...diploma} />)}
    </Grid>
  );
};

export default Education;
