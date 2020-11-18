import React from "react";

import Grid from "@material-ui/core/Grid";

import RecipeCard from "./RecipeCard";

const RecipeCards = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <RecipeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <RecipeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <RecipeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <RecipeCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default RecipeCards;
