import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CodeVerification = () => {
  return (
    <>
      <Wrap>
        <div className="Cfirst">
          <div className="back">
            <Link to={"/invite"}>
              <i class="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <h2>Enter the code we just sended on your number!</h2>
          <span className="inputSpan">
            <input type="text" placeholder="Enter Your Code" />
          </span>
          <p>Didn't receive it? Tap to resend</p>
          <button>
            <Link to={"/allowNotification"}>
              <span className=".link">NEXT</span>
            </Link>
            <i class="fa-solid fa-right-long"></i>
          </button>
        </div>
      </Wrap>
    </>
  );
};

export default CodeVerification;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--brownTextVar);
  background: var(--bgColorVar);
  padding: 100px;
  .back {
    position: absolute;
    top: 30px;
    left: 30px;
    a {
      color: black;
    }
  }
  .Cfirst {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-bottom: 40px;
      @media screen and (max-width: 720px) {
        font-size: 1.3em;
        letter-spacing: 0.7px;
        font-weight: 600;
      }
      @media screen and (max-width: 470px) {
        font-size: 1.1em;
      }
      @media screen and (max-width: 340px) {
        font-size: 1em;
      }
    }
    .inputSpan {
      font-size: 1.2em;
      font-weight: 600;
      position: relative;
      @media screen and (max-width: 340px) {
        font-size: 1em;
      }
      &::before {
        background: grey;
        width: 90%;
        height: 2px;
        z-index: 10;
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0px;
        transform: translate(-50%);
        @media screen and (max-width: 340px) {
          width: 80%;
          height: 1.3px;
          bottom: 0px;
        }
      }
      input {
        margin-bottom: 1px;
        background: none;
        border: none;
        outline: none;
        text-align: center;
        color: var(grey);
        font-weight: 500;

        &::placeholder {
          color: grey;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
      }
    }
    p {
      margin-top: 10px;
      font-size: 1em;
      font-weight: 500;
      color: #000;
      @media screen and (max-width: 400px) {
        font-size: .9em;
      }
      @media screen and (max-width: 300px) {
        font-size: .7em;
      }
    }
  }
  button {
    padding: 10px 30px;
    margin: 20px;
    border-radius: 20px;
    background: var(--blueTextVar);
    color: white;
    border: none;
    outline: none;
    text-decoration: none;
    @media screen and (max-width: 470px) {
      padding: 10px 25px;
    }
    @media screen and (max-width: 470px) {
      padding: 7px 25px;
    }

    span {
      margin-right: 10px;
      color: white;
      font-size: 15px;
      font-weight: 800;
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 100px 50px;
  }
  @media screen and (max-width: 720px) {
    padding: 100px 30px;
  }
  @media screen and (max-width: 470px) {
  }
  @media screen and (max-width: 320px) {
  }
`;
