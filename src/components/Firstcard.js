import React from "react";
import styled from "styled-components";
import data from "../data/dailyCard.json";

const Firstcard = () => {
  return (
    <>
      <Wrap>
        {data.map((item) => (
          <InnerWrap key={item.ID}>
            <Leftwrap>
              <span className="time">{item.time}</span>
            </Leftwrap>
            <Rightwrap>
              <span className="title">{item.title}</span>
              <span className="desc">{item.description}</span>
            </Rightwrap>
          </InnerWrap>
        ))}
      </Wrap>
    </>
  );
};

export default Firstcard;

const Wrap = styled.div`
  overflow-x: hidden;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  padding: 25px 50px 5px 50px;
  display: flex;
  flex-direction: column;
  background: #e8e4d1;
  border-radius: 25px;
  box-shadow: 5px 3px 10px 1px lightgrey;
  @media screen and (max-width: 550px) {
    padding: 20px 20px 5px 20px;
  }
  @media screen and (max-width: 400px) {
    padding: 20px 10px 5px 10px;
  }
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
const Leftwrap = styled.div`
  width: 100px;
  text-align: end;
  @media screen and (max-width: 550px) {
    width: 70px;
  }
  @media screen and (max-width: 400px) {
    width: 50px;
  }
  .time {
    font-size: 17px;
    font-weight: 600;
    color: #000;
    @media screen and (max-width: 1510px) {
      font-size: 1em;
    }
    @media screen and (max-width: 800px) {
      font-size: 0.8em;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.7em;
    }
    @media screen and (max-width: 330px) {
      font-size: 0.6em;
    }
  }
`;
const Rightwrap = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1;
  @media screen and (max-width: 800px) {
    padding-left: 30px;
  }
  @media screen and (max-width: 450px) {
    padding-left: 20px;
  }
  @media screen and (max-width: 330px) {
    padding-left: 15px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.6px;
    color: #000;
    margin-bottom: 10px;
    @media screen and (max-width: 1510px) {
      font-size: 1.1em;
    }
    @media screen and (max-width: 800px) {
      font-size: 0.9em;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.8em;
      margin-bottom: 7px;
    }
    @media screen and (max-width: 400px) {
      margin-bottom: 4px;
    }
    @media screen and (max-width: 330px) {
      font-size: 0.7em;
    }
  }
  .desc {
    font-size: 24px;
    letter-spacing: 0.2px;
    text-overflow: eclipses;
    white-space: nowrap;
    color: #000;
    @media screen and (max-width: 1510px) {
      font-size: 1em;
    }
    @media screen and (max-width: 800px) {
      font-size: 0.9em;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.8em;
    }
    @media screen and (max-width: 330px) {
      font-size: 0.7em;
    }
  }
`;
