import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <Wrap>
        <h1>Welcome! to Clubhouse</h1>
        <div className="Wfirst">
          <p>
            Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti nihil vitae, alias beatae iure qui
            suscipit aspernatur sequi sint, repellat vel. Suscipit impedit
            incidunt est minima accusamus repellat saepe error, labore dolore
            asperiores at iusto perspiciatis pariatur officiis molestiae? Quam
            eius maiores cumque. Qu
          </p>
          <p>
            Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur
            adipisicing elito earum expedita pariatur rem consequatur non ullam
            magni maiores voluptatem asperiores dicta, fugiat quidem? Voluptatum
            maxime quae quaerat officia, quo temporibus repellat molestiae
            suscipit repellendus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat unde
            aliquid doloremque voluptates debitis a! Voluptatum quod deleniti
            beatae consequatur?
          </p>
        </div>
        <div className="Wsecond">
          <Link to={"/invite"}>
            <button>Get your Username</button>
          </Link>
          <Link to={"/invite"} className=".link">
            <p>Have an invite text? Sign in</p>
          </Link>
        </div>
      </Wrap>
    </>
  );
};

export default Welcome;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 100px;
  color: var(--brownTextVar);
  background: var(--bgColorVar);
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    padding: 80px 50px;
  }
  @media screen and (max-width: 680px) {
    padding: 40px 25px;
  }
  @media screen and (max-width: 410px) {
    padding: 10px 20px 40px 20px;
  }
  h1 {
    font-size: 2em;
    text-align: center;
    text-decoration: underline;
    @media screen and (max-width: 680px) {
      font-size: 1.5em;
    }
    @media screen and (max-width: 410px) {
      font-size: 1.2em;
    }
    @media screen and (max-width: 320px) {
      font-size: 1em;
    }
  }
  .Wfirst {
    margin: 10px 0;
    padding: 10px 10px;
    font-weight: 400;
    font-size: 1.4em;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 55vh;
    border-radius: 20px;
    background: #fff;
    @media screen and (max-width: 680px) {
      font-size: 1.1em;
    }
    @media screen and (max-width: 410px) {
      font-size: 0.9em;
    }
    @media screen and (max-width: 320px) {
      font-size: 0.6em;
    }
    p {
      margin: 0px 0px 30px 0;
    }
  }
  .Wsecond {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      background: var(--blueTextVar);
      border: none;
      outline: none;
      padding: 10px 30px;
      border-radius: 20px;
      margin-bottom: 10px;
      color: #fff;
      font-size: 1.2em;
      font-weight: 600;
      @media screen and (max-width: 410px) {
        font-size: 0.9em;
        padding: 7px 20px;
        border-radius: 12px;
      }
      @media screen and (max-width: 310px) {
        font-size: 0.7em;
        padding: 7px 15px;
      }
    }
    p {
      color: var(--blueTextVar);
      font-size: 1.1em;
      font-weight: 500;
      @media screen and (max-width: 410px) {
        font-size: 0.9em;
      }
      @media screen and (max-width: 310px) {
        font-size: 0.8em;
      }
    }
  }
`;
