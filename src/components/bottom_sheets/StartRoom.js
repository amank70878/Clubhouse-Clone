import React, { useState } from "react";
import styled from "styled-components";
import { FcGlobe } from "react-icons/fc";

const StartRoom = (props) => {
  const [room, setRoom] = useState("open");
  return (
    <>
      <Wrap>
        <Line></Line>
        <Addtopic>+ Add a topic</Addtopic>
        <Globaldiv>
          <button
            onClick={() => setRoom("open")}
            className={room === "open" ? "active" : ""}
          >
            <FcGlobe />
            Open
          </button>
          <button
            onClick={() => setRoom("social")}
            className={room === "social" ? "active" : ""}
          >
            <FcGlobe />
            Social
          </button>
          <button
            onClick={() => setRoom("closed")}
            className={room === "closed" ? "active" : ""}
          >
            <FcGlobe />
            Closed
          </button>
        </Globaldiv>
        <Paradiv>
          Start a room{" "}
          <span>
            {room === "closed"
              ? "for people I choose"
              : room === "social"
              ? "with people I follow"
              : "open to everyone"}
          </span>
        </Paradiv>
        <Button
          onClick={() => {
            props.setSheetCreateRoom(true);
            props.setSheetVisible(true);
          }}
        >
          Lets go
        </Button>
      </Wrap>
    </>
  );
};

export default StartRoom;

const Wrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 10px;
  height: 35vh;
  @media screen and (max-width: 800px) {
    height: 32vh;
  }
  @media screen and (max-width: 370px) {
    height: 27vh;
  }
`;
const Line = styled.div`
  background: grey;
  position: absolute;
  width: 100px;
  height: 4px;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 90px;
    height: 3px;
    top: 7px;
  }
  @media screen and (max-width: 500px) {
    width: 70px;
  }
`;
const Addtopic = styled.div`
  position: absolute;
  top: 20px;
  right: 40px;
  color: green;
  font-size: 1.3em;
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    font-size: 1.2em;
    font-weight: 500;
    right: 30px;
  }
  @media screen and (max-width: 800px) {
    font-size: 1em;
    font-weight: 500;
    right: 25px;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.8em;
    top: 14px;
    right: 20px;
  }
`;
const Globaldiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom: 2px solid grey;
  .active {
    background: rgba(147, 216, 213, 0.545);
    box-shadow: 8px 5px 10px 1px lightgrey;
  }
  button {
    padding: 13px 30px;
    background: none;
    border-radius: 20px;
    border: none;
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2em;
    font-weight: 600;
    @media screen and (max-width: 1000px) {
      font-size: 1em;
      margin: 0px 0px 10px 0;
    }
    @media screen and (max-width: 750px) {
      font-size: 0.8em;
    }
    svg {
      width: 65px;
      height: 65px;
      @media screen and (max-width: 1200px) {
        width: 50px;
        height: 50px;
      }
      @media screen and (max-width: 750px) {
        width: 40px;
        height: 40px;
      }
      @media screen and (max-width: 420px) {
        width: 35px;
        height: 35px;
      }
      @media screen and (max-width: 320px) {
        width: 25px;
        height: 25px;
      }
    }
  }
`;
const Paradiv = styled.div`
  font-size: 1.2em;
  color: var(--homebtnBg);
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 20px;
  @media screen and (max-width: 1200px) {
    font-size: 1.1em;
    font-weight: 500;
  }
  @media screen and (max-width: 900px) {
    font-size: 1em;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.9em;
  }
`;
const Button = styled.button`
  padding: 10px 40px;
  font-size: 1.1em;
  font-weight: 600;
  background: var(--homebtnBg);
  color: white;
  border: none;
  outline: none;
  border-radius: 13px;
  letter-spacing: 1px;
  margin-top: 20px;
  @media screen and (max-width: 1200px) {
    font-size: 1.1em;
    font-weight: 500;
  }
  @media screen and (max-width: 800px) {
    font-size: 1em;
    font-weight: normal;
    padding: 10px 35px;
  }
  @media screen and (max-width: 550px) {
    font-size: 0.9em;
    padding: 6px 30px;
    margin-top: 10px;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.7em;
    padding: 6px 20px;
    letter-spacing: 1.5px;
  }
`;
