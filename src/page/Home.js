import React, { useState } from "react";
import styled from "styled-components";
import Cards from "../components/Cards";
import Firstcard from "../components/Firstcard";
import Header from "../components/Header";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import data from "../data/roomCard.json";
import Bottomsheet from '../components/Bottomsheet'
import newRoomData from '../data/newRoom.json'

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
    <Loaderdiv><img src="./images/loader.gif" alt="loader" /></Loaderdiv>
    ) : ('')}
    <Wrap>
        <Header />
        <h2 className="mt-4 text-center">
          We designed Clubhouse with the belief that people are at the center of
          every moment.
        </h2>
        <Firstcard />
        <Cards />
        <Startroom>
          <div className="btnSpan">
            <button className="btn1" onClick={()=> setSheetVisible(true)}>
              <AiOutlinePlus className="mx-2" />
              Start a room
            </button>
            <button className="btn2">
              <BsGrid3X3GapFill />
            </button>
          </div>
        </Startroom>
        <Bottomsheet  sheetTitle='start room'
          setSheetVisible={(item)=> setSheetVisible(item)}
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
        <Bottomsheet  sheetTitle = 'new room'
          setSheetVisible={(item) => setSheetCreateRoom(item)}
          sheetVisible={sheetCreateRoom}
          cardDetail={newRoomData}
          setItemsVisible={(item)=> setItemsVisible(item)}
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
  img{
    width: 100px;
    height: 100px;
  }
`
const Startroom = styled.div`
  width: 100vw;
  height: 20vh;
  background-image: linear-gradient(transparent 20%, var(--bgColorVar) 80%);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  .btnSpan {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
  }
  .btn1 {
    margin: 0 10px;
    background: var(--homebtnBg);
    color: #fff;
    outline: none;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .btn1 > svg {
    margin-top: -9px;
    width: 30px;
    height: 30px;
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
  }
`;
