import React, { useState } from "react";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill, BsMicFill } from "react-icons/bs";
import styled from "styled-components";

const Newroom = (props) => {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const card = props.cardDetail;
  // TODO: making arrow btn working
  
  return (
    <>
      <Wrap>
        <Line></Line>
        <Header>
          <div className="left">
            <img src="./images/arrow.png" alt="" />
            <span>Hallway</span>
          </div>
          <div className="right">
            <AiOutlineFile />
            <div className="profileImg"></div>
          </div>
        </Header>
        <Roominfo>
          {card.members.map((items,index) => (
            <Cards key={index}>
              <div className="cardsImg">
                <div className="imgMic">
                  {!micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
                </div>
              </div>
              <CardsPara>
                <p>
                  <span className="star">*</span>
                </p>
                <span className="name">{items.first_name}</span>
                <span className="name">{items.last_name}</span>
              </CardsPara>
            </Cards>
          ))} 
        </Roominfo>
        <Footer>
          <div className="leftFooter">
            <button>
              <div className="peace"></div>
              <span>Leave Quietly</span>
            </button>
          </div>
          <div className="rightFooter">
            <div className="plus">+</div>
            <div className="stop"></div>
            {!micMuteVisible ? (
              <BsMicMuteFill
                className="mic"
                onClick={() => setMicMuteVisible(true)}
              />
            ) : (
              <BsMicFill
                className="mic"
                onClick={() => setMicMuteVisible(false)}
              />
            )}
          </div>
        </Footer>
      </Wrap>
    </>
  );
};

export default Newroom;

const Wrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Line = styled.div`
  width: 100px;
  height: 4px;
  background: grey;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
`;
const Header = styled.div`
  background: hsl(55deg 16% 85%);
  width: 100vw;
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    img {
      margin-top: -5px;
      width: 20px;
      height: 20px;
      transform: rotate(-90deg);
    }
    span {
      margin-left: 20px;
      font-size: 1.2em;
      color: #000;
      font-weight: 600;
    }
  }
  .right {
    display: inherit;
    align-items: center;
    svg {
      width: 25px;
      height: 25px;
    }
    .profileImg {
      margin-left: 25px;
      background-image: url("./images/profile.jpg");
      width: 35px;
      height: 35px;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
    }
  }
`;
const Roominfo = styled.div`
  min-height: 80vh;
  padding: 30px 50px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Cards = styled.div`
  margin: 0 59px;
  .cardsImg {
    margin-left: 25px;
    background-image: url("./images/profile.jpg");
    width: 160px;
    height: 160px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    position: relative;
    box-shadow: 7px 5px 10px 1px lightgrey;
  }
  .imgMic {
    position: absolute;
    bottom: 7px;
    right: 3px;
    font-size: 25px;
    color: #fff;
  }
`;
const CardsPara = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  p {
    position: relative;
    width: 25px;
    height: 25px;
    background: rgb(87, 183, 127);
    color: #fff;
    border-radius: 50%;
    overflow: hidden;
    .star {
      font-size: 80px;
      font-weight: 600;
      position: absolute;
      top: -22px;
      left: 4.8px;
      transform: rotate(10deg);
    }
  }
  .name {
    font-size: 1em;
    color: #000;
    font-weight: 600;
    margin-left: 10px;
  }
`;
const Footer = styled.div`
  background: hsl(55deg 16% 85%);
  width: 100vw;
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  .leftFooter {
    button {
      font-size: 1.2em;
      font-weight: 600;
      padding: 12px 25px;
      border-radius: 10px;
      background: #28ae61;
      color: #fff;
      letter-spacing: 1.4px;
      outline: none;
      border: none;
      display: flex;
    }
    .peace {
      margin-top: -2px;
      margin-right: 10px;
      width: 30px;
      height: 30px;
      background-image: url("./images/peace.png");
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  .rightFooter {
    display: inherit;
    align-items: center;
    .plus {
      padding: 0px;
      font-weight: 600;
      font-size: 40px;
      margin-right: 40px;
    }
    .stop {
      margin-right: 40px;
      width: 35px;
      height: 35px;
      background-image: url("./images/stop.png");
      background-size: cover;
      background-repeat: no-repeat;
    }
    .mic {
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
  }
`;
