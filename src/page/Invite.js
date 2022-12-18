import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Invite = () => {
  const [value, setValue] = useState();
  return (
    <>
      <Wrap>
        <div className="Ifirst">
          <div className="back">
            <Link to={"/"}>
              <i class="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <h1>Enter Your Phone Number!</h1>
          <PhoneInput
            className="input"
            country="India"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="Isecond">
          <p className="p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            numquam dolores voluptatem optio ex repellat odio possimus
            repellendus, libero magnam?
          </p>
          <p className="p2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            aperiam consectetur est?
          </p>
          <button>
            <Link to={"/codeVerification"}>
              <span className=".link">NEXT</span>
            </Link>
            <i class="fa-solid fa-right-long"></i>
          </button>
        </div>
      </Wrap>
    </>
  );
};

export default Invite;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 100px 100px;
  color: var(--brownTextVar);
  background: var(--bgColorVar);
  @media screen and (max-width: 1024px) {
    padding: 100px 50px;
  }
  @media screen and (max-width: 680px) {
    padding: 100px 40px;
  }
  @media screen and (max-width: 470px) {
    padding: 100px 16px;
  }
  @media screen and (max-width: 320px) {
    padding: 100px 15px;
  }
  .back {
    position: absolute;
    top: 30px;
    left: 30px;
    a {
      color: black;
    }
  }
  .Ifirst {
    h1 {
      margin-bottom: 100px;
      font-weight: 600;
      letter-spacing: 1px;
      @media screen and (max-width: 680px) {
        text-decoration: underline;
        text-align: center;
      }
      @media screen and (max-width: 680px) {
        font-size: 1.5em;
      }
      @media screen and (max-width: 350px) {
        font-size: 1.2em;
      }
      @media screen and (max-width: 300px) {
        font-size: .9em;
      }
    }
    .PhoneInputInput {
      padding: 10px 20px;
      border-radius: 17px;
      border: 2px solid grey;
      @media screen and (max-width: 350px) {
            padding: 7px 15px;
      }
      @media screen and (max-width: 300px) {
            padding: 6px 12px;
      }
    }
  }
  .Isecond {
    margin-top: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      line-height: 0.9;
      color: #000;
      font-weight: 500;
      overflow: visible;
      @media screen and (max-width: 470px) {
        line-height: 0.8;
      }
    }
    .p1 {
      max-width: 80vw;
      white-space: nowrap;
      overflow: hidden;
    }
    .p2 {
      overflow: hidden;
      white-space: nowrap;
      max-width: 60vw;
    }
    button {
      padding: 10px 30px;
      margin-top: 20px;
      border-radius: 20px;
      background: var(--blueTextVar);
      color: white;
      border: none;
      outline: none;
      @media screen and (max-width: 470px) {
        padding: 10px 25px;
      }
      span {
        margin-right: 10px;
        color: white;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0.9px;
      }
    }
  }
`;
