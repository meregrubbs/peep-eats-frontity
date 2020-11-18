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

const Recipes = ({ state }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    appBar: {
      backgroundColor: `${state.lightGreen}`,
      boxShadow: "none",
      display: "flex",
      alignItems: "center"
    },
    indicator: {
      backgroundColor: "#33622b"
    },
    tabs: {
      color: "black",
      width: "calc(70% + 80px)"
    },
    tab: {
      textTransform: "lowercase",
      fontFamily: "Source Sans Pro, sans-serif",
      fontSize: "1em",
      fontWeight: "700"
    },
    tabPanel: {
      display: "flex",
      alignItems: "flex-start",
      width: "70%",
      padding: "0"
    }
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          classes={{
            indicator: classes.indicator
          }}
          aria-label="scrollable force tabs example"
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="All Recipes" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Item Two" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Item Three" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Item Four" {...a11yProps(3)} />
          <Tab className={classes.tab} label="Item Five" {...a11yProps(4)} />
          <Tab className={classes.tab} label="Item Six" {...a11yProps(5)} />
          <Tab className={classes.tab} label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.tabPanel} value={value} index={0}>
        <RecipeCards />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
};

export default connect(Recipes);
