import React, { useState } from "react";
import styled from "styled-components";
import {FcGlobe} from 'react-icons/fc'

const StartRoom = (props) => {
  const [room, setRoom] = useState('open');
  return (
      <>
      <Wrap>
            <Line></Line>
            <Addtopic>+ Add a topic</Addtopic>
            <Globaldiv>
                  <button onClick={()=> setRoom("open")} className={room==='open'?'active':''}><FcGlobe/>Open</button>
                  <button onClick={()=> setRoom("social")} className={room==='social'?'active':''}><FcGlobe/>Social</button>
                  <button onClick={()=> setRoom("closed")} className={room==='closed'?'active':''}><FcGlobe/>Closed</button>
            </Globaldiv>
            <Paradiv>
                  Start a room {" "}
                  <span>
                        {room === 'closed'
                        ?'for people I choose'
                        : room === 'social'
                        ? 'with people I follow'
                        : "open to everyone"
                        }
                  </span>
            </Paradiv>
            <Button onClick={()=> {props.setSheetCreateRoom(true);  props.setSheetVisible(true)}}>Lets go</Button>
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
      height: "350px", 
`
const Line = styled.div`
      width: 100px;
      height: 4px;
      background: grey;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translate(-50%);
      cursor: pointer;
`
const Addtopic = styled.div`
      position: absolute;
      top: 20px;
      right: 40px;
      color: green;
      font-size: 1.5em;
      font-weight: 600;
      cursor: pointer;
`
const Globaldiv = styled.div`
      display: flex;
      flex-direction: row;
      padding-bottom: 10px;
      border-bottom: 2px solid grey;
      .active{
            background: rgba(147, 216, 213, 0.545);
      }
      button{
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
            svg{
                  width: 65px;
                  height: 65px;
            }
      }
`
const Paradiv = styled.div`
     font-size: 1.2em;
     color: var(--homebtnBg);
     font-weight: 900;
     margin-top: 20px;
`
const Button = styled.button`
      padding: 7px 25px;
      font-size: 1.4em;
      font-weight: 600;
      background: var(--homebtnBg);
      color: #fff;
      border: none;
      outline: none;
      border-radius: 13px;
      letter-spacing: 1.3px;
      margin-top: 15px;
`