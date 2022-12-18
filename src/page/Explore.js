import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
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
  @media screen and (max-width: 1024px) {
    padding: 20px 50px 0 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px 30px 0 30px;
  }
  @media screen and (max-width: 420px) {
    padding: 15px 10px 0 10px;
  }
  .Aheader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 30px;
      height: 30px;
      @media screen and (max-width: 1024px) {
        width: 20px;
        height: 20px;
      }
      @media screen and (max-width: 600px) {
        width: 17px;
        height: 17px;
      }
      @media screen and (max-width: 420px) {
        width: 13px;
        height: 13px;
      }
    }
    .explore {
      font-size: 1.3em;
      font-weight: 600;
      color: #000;
      @media screen and (max-width: 1024px) {
        font-size: 1.2em;
      }
      @media screen and (max-width: 600px) {
        font-size: 1.1em;
      }
      @media screen and (max-width: 420px) {
        font-size: 1em;
      }
    }
  }
  .Bheader {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .inputDiv {
      box-shadow: 4px 5px 12px 1px lightgrey;
      background: white;
      border: 2px solid grey;
      display: flex;
      align-items: center;
      padding: 6px 20px;
      width: 70%;
      border-radius: 10px;
      @media screen and (max-width: 840px) {
        padding: 5px 17px;
        font-size: 0.9em;
      }
      @media screen and (max-width: 500px) {
        width: 80%;
        padding: 4px 14px;
        font-size: 0.8em;
      }
      @media screen and (max-width: 370px) {
        width: 90%;
        padding: 4px 14px;
        font-size: 0.8em;
      }
      img {
        width: 20px;
        height: 20px;
        @media screen and (max-width: 840px) {
          width: 16px;
          height: 16px;
        }
      }
      input {
        width: 100%;
        border: none;
        outline: none;
        background: none;
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
  padding: 10px 20px;
  position: relative;
  margin: 30px 150px 0px 150px;
  @media screen and (max-width: 1124px) {
    margin: 30px 70px 0px 70px;
  }
  @media screen and (max-width: 900px) {
    margin: 30px 40px 0px 40px;
  }
  @media screen and (max-width: 500px) {
    margin: 30px 0px 0px 0px;
    padding: 10px 10px;
  }
  .pHeading {
    font-weight: 600;
    color: rgb(195, 172, 145);
    font-size: 1.3em;
    letter-spacing: 1px;
    @media screen and (max-width: 1024px) {
      font-size: 1.2em;
    }
    @media screen and (max-width: 900px) {
      font-size: 1.1em;
    }
    @media screen and (max-width: 500px) {
      font-size: 1em;
      letter-spacing: 0.8px;
    }
  }
`;
const People = styled.div`
  background: #fff;
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
      @media screen and (max-width: 800px) {
        border-radius: 17%;
        width: 50px;
        height: 50px;
        margin-right: 15px;
      }
    }
    .infoP {
      .titleP {
        font-size: 1.4em;
        color: #000;
        font-weight: 600;
        letter-spacing: 1px;
        @media screen and (max-width: 800px) {
          font-size: 1.2em;
        }
        @media screen and (max-width: 650px) {
          font-size: 1.1em;
        }
        @media screen and (max-width: 550px) {
          font-size: 0.9em;
        }
        @media screen and (max-width: 400px) {
          font-size: 0.8em;
        }
      }
      .descP {
        font-size: 1em;
        letter-spacing: 0.6px;
        @media screen and (max-width: 1200px) {
          font-size: 0.9em;
        }
        @media screen and (max-width: 800px) {
          font-size: 0.8em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media screen and (max-width: 700px) {
          width: 360px;
        }
        @media screen and (max-width: 640px) {
          width: 220px;
          font-size: 0.7em;
          letter-spacing: 0px;
        }
        @media screen and (max-width: 400px) {
          width: 150px;
        }
      }
    }
  }
  .rightP {
    background: none;
    padding: 6px 20px;
    font-size: 1.1em;
    font-weight: 600;
    border-radius: 10px;
    border: 2px solid var(--blueTextVar);
    box-shadow: 2px 2px 10px 1px lightgrey;
    color: var(--blueTextVar);
    @media screen and (max-width: 900px) {
      padding: 3px 10px;
      font-size: 1em;
      border-radius: 8px;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.8em;
      font-weight: 500;
    }
  }
`;
const Showmorepeople = styled.button`
  position: absolute;
  bottom: -15px;
  font-size: 1.1em;
  padding: 10px 20px;
  border-radius: 10px;
  background: rgb(247 254 255);
  box-shadow: 10px 5px 10px 1px lightgrey;
  border: none;
  outline: none;
  left: 50%;
  transform: translate(-50%);
  letter-spacing: 1px;
  @media screen and (max-width: 900px) {
    bottom: -12px;
    font-size: 1em;
    padding: 7px 17px;
    border-radius: 12px;
  }
  @media screen and (max-width: 650px) {
    bottom: -12px;
    font-size: .8em;
    padding: 8px 15px;
    border-radius: 12px;
  }
  @media screen and (max-width: 400px) {
    bottom: -8px;
    font-size: .7em;
    padding: px 15px;
    border-radius: 12px;
  }
  svg {
    margin-top: -6px;
    margin-left: 10px;
    @media screen and (max-width: 650px) {
      margin-left: 5px;
    }
  }
`;
const Descriptionwrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 150px 0px 150px;
  padding: 10px 20px;
  @media screen and (max-width: 1124px) {
    margin: 30px 70px 0px 70px;
  }
  @media screen and (max-width: 900px) {
    margin: 30px 40px 0px 40px;
  }
  @media screen and (max-width: 500px) {
    margin: 30px 0px 0px 0px;
    padding: 10px 10px;
  }
  justify-content: space-between;
  .dHeading {
    font-size: 1.3em;
    font-weight: 600;
    color: rgb(195, 172, 145);
    letter-spacing: 1px;
    @media screen and (max-width: 1024px) {
      font-size: 1.2em;
    }
    @media screen and (max-width: 900px) {
      font-size: 1.1em;
    }
    @media screen and (max-width: 500px) {
      font-size: 1em;
      letter-spacing: 0.8px;
    }
  }
`;
const Desc = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1124px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Description = styled.div`
  background: #fff;
  min-height: 100px;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px;
  box-shadow: 10px 5px 10px 1px lightgrey;
  .titled {
    font-size: 1.2em;
    font-weight: 600;
    color: #000;
    @media screen and (max-width: 1200px) {
      font-size: 1.1em;

    }
    @media screen and (max-width: 700px) {
      font-size: .8em;
    }
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
    @media screen and (max-width: 1200px) {
      font-size: .9em;
    }
    @media screen and (max-width: 700px) {
      font-size: .7em;
    }
  }
`;
