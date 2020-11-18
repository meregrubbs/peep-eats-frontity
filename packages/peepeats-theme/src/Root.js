import React from "react";
import { Global, Head, css, connect } from "frontity";

import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import Recipes from "./components/recipes/Recipes";

import Favicon32 from "./components/images/favicons/favicon-32x32.png";
import Favicon16 from "./components/images/favicons/favicon-16x16.png";

const Root = ({ state }) => {
  return (
    <>
      {/* Head */}
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
        {/* HWT Aetna Font */}
        <link rel="stylesheet" href="https://use.typekit.net/sov1bef.css" />
        {/* Source Sans Pro Font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Global Styling */}
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: "Source Sans Pro", sans-serif;
          }
        `}
      />

      {/* Root */}
      <Navbar />
      <Hero />
      <Recipes />
    </>
  );
};

export default connect(Root);
