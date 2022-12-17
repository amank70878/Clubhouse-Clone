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
  margin-top: 6px;
  padding: 25px 50px 5px 50px;
  display: flex;
  flex-direction: column;
  background: #e8e4d1;
  border-radius: 25px;
  box-shadow: 5px 3px 10px 1px lightgrey;
`;
const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`
const Leftwrap = styled.div`
  width: 100px;
  text-align: end;
  .time{
    font-size: 17px;
    font-weight: 600;
    color: #000;
  }
`;
const Rightwrap = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1;
  .title{
    font-size: 18px;
    font-weight: bold;
    letter-spacing: .6px;
    color: #000;
    margin-bottom: 10px;
  }
  .desc{
    font-size: 24px;
    letter-spacing: .2px;
    color: #000;
  }
`;
