import React, { useState } from "react";
import styled from "styled-components";
import Cards from "../components/Cards";
import Firstcard from "../components/Firstcard";
import Header from "../components/Header";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import data from "../data/roomCard.json";
import Bottomsheet from "../components/Bottomsheet";
import newRoomData from "../data/newRoom.json";

const Home = (props) => {
  // eslint-disable-next-line
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  // eslint-disable-next-line
  const [cardId, setCardId] = useState(1);

  return (
    <>
      {loaderVisibility ? (
        <Loaderdiv>
          <img src="./images/loader.gif" alt="loader" />
        </Loaderdiv>
      ) : (
        ""
      )}
      <Wrap>
        <Header />
        <Firstcard />
        <Cards />
        <Startroom>
          <div className="btnSpan">
            <button className="btn1" onClick={() => setSheetVisible(true)}>
              <AiOutlinePlus />
              Start a room
            </button>
            <button className="btn2">
              <BsGrid3X3GapFill />
            </button>
          </div>
        </Startroom>
        <Bottomsheet
          sheetTitle="start room"
          setSheetVisible={(item) => setSheetVisible(item)}
          sheetVisible={sheetVisible}
          cardDetail={data.find((item) => item.id === cardId)}
          setItemsVisible={(item) => setItemsVisible(item)}
          setSheetCreateRoom={(item) => {
            setLoaderVisibility(true);
            setTimeout(() => {
              setSheetCreateRoom(item);
              setLoaderVisibility(false);
            }, 1000);
          }}
        />
        <Bottomsheet
          sheetTitle="new room"
          setSheetVisible={(item) => setSheetCreateRoom(item)}
          sheetVisible={sheetCreateRoom}
          cardDetail={newRoomData}
          setItemsVisible={(item) => setItemsVisible(item)}
        />
      </Wrap>
    </>
  );
};

export default Home;

const Wrap = styled.div`
  padding: 0px 100px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--brownTextVar);
  background: var(--bgColorVar);
  padding-bottom: 70px;
  overflow-x: hidden;
  @media screen and (max-width: 1024px) {
    padding: 0px 60px;
    padding-bottom: 70px;
  }
  @media screen and (max-width: 680px) {
    padding: 0px 30px;
    padding-bottom: 70px;
  }
  @media screen and (max-width: 470px) {
    padding: 0px 10px;
    padding-bottom: 70px;
  }
  @media screen and (max-width: 300px) {
    padding: 0px;
    padding-bottom: 70px;
  }
`;
const Loaderdiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
  }
`;
const Startroom = styled.div`
  width: 100vw;
  height: 20vh;
  background-image: linear-gradient(transparent 20%, var(--bgColorVar) 80%);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  @media screen and (max-width: 600px) {
    height: 15vh;
  }
  .btnSpan {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
  }
  .btn1 {
    margin: 0 10px;
    background: var(--homebtnBg);
    color: #fff;
    outline: none;
    border: none;
    padding: 10px 20px;
    border-radius: 14px;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1px;
    @media screen and (max-width: 800px) {
      font-size: 17px;
    }
    @media screen and (max-width: 550px) {
      font-size: 14px;
      font-weight: 600;
      padding: 10px 15px;
    }
    @media screen and (max-width: 460px) {
      font-size: 0.8em;
      padding: 8px 12px;
    }
    @media screen and (max-width: 420px) {
      padding: 8px 8px;
      border-radius: 10px;
      width: 140px;
    }
  }
  .btn1 > svg {
    margin: 0 10px;
    margin-top: -9px;
    font-weight: 800;
    width: 30px;
    height: 30px;
    @media screen and (max-width: 800px) {
      margin-top: -2px;
      width: 25px;
      height: 25px;
    }
    @media screen and (max-width: 550px) {
      margin-top: -2px;
      width: 20px;
      height: 20px;
    }
    @media screen and (max-width: 460px) {
      margin-top: -2px;
      width: 16px;
      height: 16px;
    }
    @media screen and (max-width: 420px) {
      margin: 0;
      margin-right: 5px;
      margin-top: -2px;
    }
  }
  .btn2 {
    margin: 0 10px;
    border: none;
    outline: none;
    color: black;
  }
  .btn2 > svg {
    width: 30px;
    height: 30px;
    @media screen and (max-width: 800px) {
      width: 25px;
      height: 25px;
    }
    @media screen and (max-width: 800px) {
      width: 25px;
      height: 25px;
    }
    @media screen and (max-width: 460px) {
      width: 22px;
      height: 22px;
    }
  }
`;
