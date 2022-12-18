import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/profile"><div className="profileImg"></div></Link>
          </div>
        </Header>
        <Roominfo>
          {card.members.map((items, index) => (
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
  height: 85vh;
  @media screen and (max-width: 800px) {
    // height: 80vh;
  }
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
  @media screen and (max-width: 800px) {
    width: 90px;
    height: 3px;
    top: 7px;
  }
  @media screen and (max-width: 600px) {
    width: 60px;
    height: 2px;
    top: 5px;
  }
`;
const Header = styled.div`
  background: hsl(55deg 16% 85%);
  width: 100vw;
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    padding: 10px 40px;
  }
  @media screen and (max-width: 700px) {
    padding: 10px 20px;
  }
  .left {
    img {
      margin-top: -5px;
      width: 20px;
      height: 20px;
      transform: rotate(-90deg);
      @media screen and (max-width: 700px) {
        width: 15px;
        margin-top: 0px;
        height: 15px;
      }
    }
    span {
      margin-left: 20px;
      font-size: 1.2em;
      color: #000;
      font-weight: 600;
      @media screen and (max-width: 700px) {
        font-size: 1em;
        margin-left: 15px;
      }
      @media screen and (max-width: 400px) {
        font-size: 0.8em;
        margin-left: 10px;
      }
    }
  }
  .right {
    display: inherit;
    align-items: center;
    svg {
      width: 25px;
      height: 25px;
      @media screen and (max-width: 700px) {
        width: 20px;
        height: 20px;
      }
    }
    .profileImg {
      margin-left: 25px;
      background-image: url("./images/profile.jpg");
      width: 35px;
      height: 35px;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
      @media screen and (max-width: 700px) {
        width: 28px;
        height: 28px;
      }
      @media screen and (max-width: 400px) {
        margin-left: 15px;
      }
    }
  }
`;
const Roominfo = styled.div`
  padding: 30px 50px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    padding: 20px 20px;
  }
`;
const Cards = styled.div`
  margin: 0 59px;
  @media screen and (max-width: 1200px) {
    margin: 0 40px;
  }
  @media screen and (max-width: 800px) {
    margin: 0 30px;
  }
  @media screen and (max-width: 450px) {
    margin: 0 25px;
  }
  @media screen and (max-width: 350px) {
    margin: 0 15px;
  }
  .cardsImg {
    background-image: url("./images/profile.jpg");
    width: 160px;
    height: 160px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    position: relative;
    box-shadow: 7px 5px 10px 1px lightgrey;
    @media screen and (max-width: 1200px) {
      width: 140px;
      height: 140px;
    }
    @media screen and (max-width: 800px) {
      width: 120px;
      height: 120px;
    }
    @media screen and (max-width: 650px) {
      width: 80px;
      height: 80px;
      border-radius: 20px;
    }
    @media screen and (max-width: 480px) {
      width: 70px;
      height: 70px;
      border-radius: 20px;
    }
    @media screen and (max-width: 480px) {
      width: 60px;
      height: 60px;
      border-radius: 15px;
    }
    @media screen and (max-width: 350px) {
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }
  }
  .imgMic {
    position: absolute;
    color: grey;
    background: #e6e6e6;
    border-radius: 50%;
    font-size: 25px;
    width: 35px;
    bottom: -7px;
    right: -10px;
    text-align: center;
    @media screen and (max-width: 800px) {
      font-size: 20px;
      width: 30px;
      bottom: -7px;
      right: -11px;
    }
    @media screen and (max-width: 500px) {
      font-size: 16px;
      width: 20px;
      bottom: -5px;
      right: -5px;
    }
    @media screen and (max-width: 350px) {
      font-size: 12px;
      width: 15px;
      bottom: -5px;
      right: -5px;
    }
  }
`;
const CardsPara = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    margin-top: 6px;
  }
  p {
    position: relative;
    width: 25px;
    height: 25px;
    background: rgb(87, 183, 127);
    color: #fff;
    border-radius: 50%;
    overflow: hidden;
    @media screen and (max-width: 1200px) {
      width: 20px;
      height: 20px;
    }
    @media screen and (max-width: 800px) {
      width: 17px;
      height: 17px;
    }
    @media screen and (max-width: 800px) {
      width: 14px;
      height: 14px;
    }
    .star {
      font-size: 60px;
      font-weight: 600;
      position: absolute;
      top: -20px;
      left: 3.8px;
      transform: rotate(10deg);
      @media screen and (max-width: 1200px) {
        font-size: 50px;
        top: -17px;
        left: 3.4px;
      }
      @media screen and (max-width: 1200px) {
        font-size: 30px;
        top: -8px;
        left: 4px;
      }
      @media screen and (max-width: 800px) {
        font-size: 25px;
        top: -5px;
        left: 3px;
      }
    }
  }
  .name {
    font-size: 1em;
    color: #000;
    font-weight: 600;
    margin-left: 10px;
    @media screen and (max-width: 1200px) {
      font-size: 0.9em;
    }
    @media screen and (max-width: 800px) {
      font-size: 0.7em;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.6em;
      margin-left: 5px;
    }
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
  @media screen and (max-width: 1200px) {
    padding: 10px 40px;
  }
  @media screen and (max-width: 700px) {
    padding: 10px 20px;
  }
  .leftFooter {
    button {
      display: flex;
      align-items: center;
      font-weight: 600;
      padding: 12px 25px;
      font-size: 1.2em;
      border-radius: 10px;
      letter-spacing: 1.4px;
      background: #28ae61;
      color: #fff;
      outline: none;
      border: none;
      @media screen and (max-width: 1000px) {
        font-weight: 500;
        padding: 9px 20px;
        font-size: 1.1em;
        border-radius: 10px;
        letter-spacing: 1.2px;
      }
      @media screen and (max-width: 550px) {
        padding: 8px 20px;
        font-size: 1em;
        letter-spacing: 1px;
      }
      @media screen and (max-width: 350px) {
        padding: 6px 10px;
        font-size: .8em;
        letter-spacing: 1px;
      }
    }
    .peace {
      margin-top: -2px;
      margin-right: 10px;
      width: 30px;
      height: 30px;
      background-image: url("./images/peace.png");
      background-size: cover;
      background-repeat: no-repeat;
      @media screen and (max-width: 1000px) {
        margin-top: 1px;
        width: 25px;
        height: 25px;
      }
      @media screen and (max-width: 550px) {
        margin-top: 1px;
        width: 23px;
        height: 23px;
        margin-right: 7px;
      }
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
      @media screen and (max-width: 800px) {
        font-size: 35px;
        margin-right: 30px;
      }
      @media screen and (max-width: 600px) {
        font-size: 26px;
        margin-right: 25px;
      }
      @media screen and (max-width: 600px) {
        margin-right: 15px;
      }
    }
    .stop {
      margin-right: 40px;
      width: 35px;
      height: 35px;
      background-image: url("./images/stop.png");
      background-size: cover;
      background-repeat: no-repeat;
      @media screen and (max-width: 800px) {
        margin-right: 30px;
        width: 30px;
        height: 30px;
      }
      @media screen and (max-width: 600px) {
        margin-right: 25px;
        width: 25px;
        height: 25px;
      }
      @media screen and (max-width: 400px) {
        margin-right: 15px;
      }
    }
    .mic {
      width: 35px;
      height: 35px;
      cursor: pointer;
      @media screen and (max-width: 800px) {
        width: 30px;
        height: 30px;
      }
      @media screen and (max-width: 600px) {
        width: 25px;
        height: 25px;
      }
    }
  }
`;
