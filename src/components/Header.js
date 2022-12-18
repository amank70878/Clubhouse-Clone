import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrap>
        <LeftNav>
          <Link to="/explore">
            <img src="./images/search.png" alt="" />
          </Link>
        </LeftNav>
        <RightNav>
          <img src="./images/invite.png" alt="" />
          <img src="./images/calendar.png" alt="" />
          <img src="./images/noti.png" alt="" />
          <Link to="/profile">
            <div className="profileDiv"></div>
          </Link>
        </RightNav>
      </Wrap>

      <H2 className="text-center">
        We designed Clubhouse with the belief that people are at the center of
        every moment.
      </H2>
    </>
  );
};

export default Header;

const Wrap = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  img {
    width: 40px;
    @media screen and (max-width: 1024px) {
      width: 30px;
    }
    @media screen and (max-width: 800px) {
      width: 25px;
    }
    @media screen and (max-width: 350px) {
      width: 18px;
    }
  }
`;
const LeftNav = styled.div``;
const RightNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    margin: 0 19px;
    @media screen and (max-width: 470px) {
      margin: 0 10px;
    }
    @media screen and (max-width: 350px) {
      margin: 0 6px;
    }
  }
  .profileDiv {
    width: 40px;
    height: 40px;
    background-image: url(./images/profile.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    @media screen and (max-width: 1024px) {
      width: 30px;
      height: 30px;
    }
    @media screen and (max-width: 800px) {
      width: 25px;
      height: 25px;
    }
    @media screen and (max-width: 350px) {
      width: 22px;
      height: 22px;
    }
  }
`;
const H2 = styled.div`
margin-top: 10px;
  font-size: 2em;
  font-weight: 600;
  @media screen and (max-width: 1510px) {
    font-size: 1.2em;
  }
  @media screen and (max-width: 990px) {
    font-size: 1em;
  }
  @media screen and (max-width: 500px) {
    font-size: .9em;
    font-weight: 500;
  }
  @media screen and (max-width: 400px) {
    font-size: .7em;
  }
`;