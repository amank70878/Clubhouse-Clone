import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const AllowNotification = () => {
  return (
    <>
      <Wrap>
            <div className='Afirst'>
                  <div className="back"><Link to={'/invite'}><i class="fa-solid fa-arrow-left"></i></Link></div>
                  <h2>Enable notification to know when people are talking <small>(IMPORTANT!)</small> </h2>
                  <div className="div">
                        <span className='aaa'>"Clubhouse" would like to send you notifications</span>
                        <span  className='bbb'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, sint? <b>notifications may include alerts, sounds, and icon badges</b></span>
                        <div  className='ccc'>
                              <button className='ddd'>
                                    <Link to={'/home'} ><span className='.link'>Allow</span></Link>
                              </button>
                              <button className='eee'>
                                    <Link to={'/home'} ><span className='.link'>Deny</span></Link>
                              </button>
                              
                        </div>
                  </div>
            </div>
      </Wrap>
    </>
  )
}

export default AllowNotification


const Wrap = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 100px 100px;
      color: var(--brownTextVar);
      background: var(--bgColorVar);
      .back{
            position: absolute;
            top: 30px;
            left: 30px;
            a{
                  color: black;
            }
      }
      .Afirst{
            margin-top: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            small{
                  font-size: 20px;
                  margin-left: 12px;
            }
            h2{
                  font-size: 30px;
            }
            .div{
                  margin-top: 20px;
                  width: 700px;
                  height: 250px;
                  background: white;
                  border-radius: 20px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  color: black;

                  .aaa{
                        margin-top: 25px;
                        font-size: 28px;
                        font-weight: 500;
                        text-align: center;
                  }
                  .bbb{
                        font-size: 18px;
                        font-weight: 500;
                        margin: 10px 45px;
                        text-align: center;
                  }
                  .ccc{
                        margin-top: 50px;
                        width: 100%;
                        height: 100%;
                        .ddd{
                              width: 50%;
                              height: 100%;
                              border: none;
                              outline: none;
                              font-size: 25px;
                              font-weight: 500;
                              border-top: 1px solid grey;
                              border-right: 1px solid grey;
                              background: none;
                              color: var(--blueTextVar);
                              &:hover{
                                    color: rgb(0, 85, 196);
                              }
                        }
                        .eee{
                              width: 50%;
                              height: 100%;
                              border: none;
                              outline: none;
                              font-size: 25px;
                              font-weight: 500;
                              border-top: 1px solid grey;
                              background: none;
                              color: var(--blueTextVar);
                              &:hover{
                                    color: rgb(0, 85, 196);
                              }
                        }
                  }
            }
      }
`
