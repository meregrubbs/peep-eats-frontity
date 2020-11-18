import React from "react";
import PropTypes from "prop-types";

import { connect, css, styled } from "frontity";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import RecipeCards from "./RecipeCards";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography
            component={"div"}
            css={css`
              font-family: "Source Sans Pro", sans-serif;
            `}
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  indicator: {
    backgroundColor: "#33622b"
  }
}));

const StyledTab = styled(Tab)`
  text-transform: lowercase !important;
  font-family: "Source Sans Pro", sans-serif !important;
  font-size: 1em !important;
  font-weight: 700 !important;
`;

const StyledTabPanel = styled(TabPanel)`
  display: flex;
  justify-content: flex-start;
  width: 70%;
  padding: 0;
`;

const Recipes = ({ state }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        css={css`
          background-color: ${state.lightGreen} !important;
          box-shadow: none !important;
          display: flex;
          align-items: center;
        `}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          classes={{
            indicator: classes.indicator
          }}
          aria-label="scrollable force tabs example"
          css={css`
            color: black;
            width: calc(70% + 80px);
            }
          `}
        >
          <StyledTab label="All Recipes" {...a11yProps(0)} />
          <StyledTab label="Item Two" {...a11yProps(1)} />
          <StyledTab label="Item Three" {...a11yProps(2)} />
          <StyledTab label="Item Four" {...a11yProps(3)} />
          <StyledTab label="Item Five" {...a11yProps(4)} />
          <StyledTab label="Item Six" {...a11yProps(5)} />
          <StyledTab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <StyledTabPanel value={value} index={0}>
        <RecipeCards />
      </StyledTabPanel>
      <StyledTabPanel value={value} index={1}>
        Item Two
      </StyledTabPanel>
      <StyledTabPanel value={value} index={2}>
        Item Three
      </StyledTabPanel>
      <StyledTabPanel value={value} index={3}>
        Item Four
      </StyledTabPanel>
      <StyledTabPanel value={value} index={4}>
        Item Five
      </StyledTabPanel>
      <StyledTabPanel value={value} index={5}>
        Item Six
      </StyledTabPanel>
      <StyledTabPanel value={value} index={6}>
        Item Seven
      </StyledTabPanel>
    </div>
  );
};

export default connect(Recipes);
