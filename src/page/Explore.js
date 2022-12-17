import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
// import { Descriptions } from "antd";
import exploreData from "../data/Explore.json";

const Explore = () => {
  const { people, conversation } = exploreData;
  // eslint-disable-next-line
  const [change, setChange] = useState("");
  return (
    <Wrap>
      <Header>
        <div className="Aheader">
          <Link to={"/home"}>
            <img src="./images/arrow.png" alt="" />
          </Link>
          <div className="explore">EXPLORE</div>
          <div></div>
        </div>
        <div className="Bheader">
          <div className="inputDiv">
            <img src="./images/search.png" alt="" />
            <input
              type="text"
              onChange={setChange}
              placeholder="Find People and Clubs"
            />
          </div>
        </div>
      </Header>
      <PeopleWrap>
        <h3 className="pHeading">PEOPLE TO FOLLOW</h3>
        {people.map((peoples, index) => (
          <People key={index}>
            <div className="leftP">
              <div className="imgP"></div>
              <div className="infoP">
                <div className="titleP">{peoples.title}</div>
                <div className="descP">{peoples.description}</div>
              </div>
            </div>
            <button className="rightP">Follow</button>
          </People>
        ))}
        <Showmorepeople>
          Show more people
          <DownOutlined />
        </Showmorepeople>
      </PeopleWrap>
      <Descriptionwrap>
        <h3 className="dHeading">FIND CONVERSATION ABOUT..</h3>
        <Desc>
          {conversation.map((item) => (
            <Description>
              <div className="titled">
                <FireOutlined />
                {item.title}
              </div>
              <div className="descd">{item.description}</div>
            </Description>
          ))}
        </Desc>
      </Descriptionwrap>
    </Wrap>
  );
};

export default Explore;

const Wrap = styled.div`
  background: var(--bgColorVar);
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;
const Header = styled.div`
  padding: 20px 100px 0 100px;
  .Aheader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 30px;
      height: 30px;
    }
    .explore {
      font-size: 1.3em;
      font-weight: 600;
      color: #000;
    }
  }
  .Bheader {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .inputDiv {
      box-shadow: 4px 5px 12px 1px lightgrey;
      width: 30%;
      background: white;
      border: 2px solid grey;
      padding: 6px 20px;
      display: flex;
      align-items: center;
      border-radius: 10px;
      img {
        width: 20px;
        height: 20px;
      }
      input {
        width: 100%;
        border: none;
        outline: none;
        background: none;
        font-size: 1.1em;
        padding: 0px 10px 0px 20px;
        font-weight: 600;
        letter-spacing: 1px;
      }
    }
  }
`;
const PeopleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 150px 0px 150px;
  padding: 10px 20px;
  position: relative;
  .pHeading {
    font-size: 1.3em;
    font-weight: 600;
    color: rgb(195, 172, 145);
    letter-spacing: 1px;
  }
`;
const People = styled.div`
  background: #fff;
  min-width: 600px;
  padding: 14px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .leftP {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .imgP {
      background-image: url(./images/profile.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 20%;
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }
    .infoP {
      .titleP {
        font-size: 1.4em;
        color: #000;
        font-weight: 600;
        letter-spacing: 1px;
      }
      .descP {
        font-size: 1em;
        letter-spacing: 0.6px;
      }
    }
  }
  .rightP {
    background: none;
    padding: 6px 20px;
    font-size: 1.1em;
    font-weight: 600;
    border: 2px solid var(--blueTextVar);
    box-shadow: 2px 2px 10px 1px lightgrey;
    color: var(--blueTextVar);
    border-radius: 10px;
  }
`;
const Showmorepeople = styled.button`
  position: absolute;
  bottom: -15px;
  font-size: 1.1em;
  background: rgb(247 254 255);
  box-shadow: 10px 5px 10px 1px lightgrey;
  border: none;
  outline: none;
  left: 50%;
  transform: translate(-50%);
  padding: 10px 20px;
  border-radius: 10px;
  letter-spacing: 1px;
  svg {
    margin-top: -6px;
    margin-left: 10px;
  }
`;
const Descriptionwrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 150px 0px 150px;
  padding: 10px 20px;
  justify-content: space-between;
  .dHeading {
    font-size: 1.3em;
    font-weight: 600;
    color: rgb(195, 172, 145);
    letter-spacing: 1px;
  }
`;
const Desc = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const Description = styled.div`
  background: #fff;
  min-height: 100px;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px;
  box-shadow: 10px 5px 10px 1px lightgrey;
  .titled {
    font-size: 1em;
    font-weight: 600;
    color: #000;
  }
  svg {
    font-size: 20px;
    margin-top: -10px;
    margin-right: 10px;
    color: red;
  }
  .descd {
    font-size: 1em;
    margin-top: 5px;
    margin-left: 30px;
  }
`;
