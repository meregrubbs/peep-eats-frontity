import React from "react";
import { styled } from "frontity";

import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <StyledNav>
      <Container>
        <Logo
          src="https://peepeats.website/wp-content/uploads/2020/11/peep-eats-logo.svg"
          alt="peep eats"
          css
        />
        <Searchbar />
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
  width: 100%;
  background-color: white;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 10em;
`;

export default Navbar;
