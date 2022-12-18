import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AllowNotification = () => {
  return (
    <>
      <Wrap>
        <div className="Afirst">
          <div className="back">
            <Link to={"/invite"}>
              <i class="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <h3>Enable notification </h3>
          <div className="div">
            <span className="aaa">
              "Clubhouse" would like to send you notifications
            </span>
            <span className="bbb">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
              sint?{" "}
              <b>notifications may include alerts, sounds, and icon badges</b>
            </span>
            <div className="ccc">
              <Link to={"/home"}>
                <button className="ddd">
                  <span className=".link">Allow</span>
                </button>
              </Link>
              <Link to={"/home"}>
                <button className="eee">
                  <span className=".link">Deny</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default AllowNotification;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 100px 100px;
  color: var(--brownTextVar);
  background: var(--bgColorVar);
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    padding-top: 270px;
  }
  @media screen and (max-width: 787px) {
    padding-top: 100px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 438px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  .back {
    position: absolute;
    top: 30px;
    left: 30px;
    a {
      color: black;
    }
  }
  .Afirst {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    h3 {
      font-size: 1.5em;
      @media screen and (max-width: 690px) {
        font-size: 1.1em;
      }
      @media screen and (max-width: 715px) {
        font-size: 1em;
      }
      @media screen and (max-width: 325px) {
        margin: 0 10px;
        font-size: 0.9em;
      }
    }
    .div {
      margin-top: 20px;
      width: 600px;
      background: white;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: black;
      @media screen and (max-width: 715px) {
        width: 450px;
      }
      @media screen and (max-width: 553px) {
        width: 370px;
        border-radius: 15px;
      }
      @media screen and (max-width: 400px) {
        width: 330px;
      }
      @media screen and (max-width: 357px) {
        width: 300px;
      }
      @media screen and (max-width: 325px) {
        width: 250px;
      }

      .aaa {
        margin: 0 10px;
        margin-top: 25px;
        font-size: 1.2em;
        font-weight: 600;
        text-align: center;
        @media screen and (max-width: 715px) {
          font-size: 1.1em;
        }
        @media screen and (max-width: 553px) {
          font-size: 0.9em;
        }
        @media screen and (max-width: 400px) {
          font-size: 0.8em;
        }
        @media screen and (max-width: 357px) {
          font-size: 0.7em;
        }
        @media screen and (max-width: 325px) {
          font-size: 0.6em;
        }
      }
      .bbb {
        font-size: 1.1em;
        margin: 0 10px;
        font-weight: 500;
        margin-top: 10px;
        text-align: center;
        @media screen and (max-width: 715px) {
          font-size: 1em;
        }
        @media screen and (max-width: 553px) {
          font-size: 0.9em;
        }
        @media screen and (max-width: 400px) {
          font-size: 0.8em;
        }
        @media screen and (max-width: 357px) {
          font-size: 0.7em;
        }
        @media screen and (max-width: 325px) {
          font-size: 0.6em;
        }
        b {
          font-weight: 800;
        }
      }
      .ccc {
        margin-top: 30px;
        width: 100%;
        height: 100%;
        @media screen and (max-width: 715px) {
          margin-top: 12px;
        }
        @media screen and (max-width: 553px) {
          margin-top: 10px;
        }
        .ddd {
          width: 50%;
          height: 60px;
          border: none;
          outline: none;
          font-size: 1.2em;
          font-weight: 800;
          border-top: 1px solid grey;
          border-right: 1px solid grey;
          background: none;
          color: var(--blueTextVar);
          @media screen and (max-width: 715px) {
            font-size: 1.1em;
          }
          @media screen and (max-width: 553px) {
            width: 50%;
            height: 40px;
            font-weight: 600;
          }
          @media screen and (max-width: 410px) {
            width: 50%;
            height: 40px;
            font-size: 0.8em;
          }
          @media screen and (max-width: 357px) {
            width: 50%;
            height: 40px;
            font-size: 0.8em;
          }
          &:hover {
            color: #000;
          }
        }
        .eee {
          width: 50%;
          height: 60px;
          border: none;
          outline: none;
          font-size: 1.2em;
          font-weight: 800;
          border-top: 1px solid grey;
          background: none;
          color: var(--blueTextVar);
          @media screen and (max-width: 715px) {
            font-size: 1.1em;
          }
          @media screen and (max-width: 553px) {
            width: 50%;
            height: 40px;
            font-weight: 600;
          }
          @media screen and (max-width: 410px) {
            width: 50%;
            height: 40px;
            font-size: 0.8em;
          }
          @media screen and (max-width: 357px) {
            width: 50%;
            height: 40px;
            font-size: 0.8em;
          }
          &:hover {
            color: #000;
          }
        }
      }
    }
  }
`;
