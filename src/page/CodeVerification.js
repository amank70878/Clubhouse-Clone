import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const CodeVerification = () => {
  return (
    <>
      <Wrap>
            <div className='Cfirst'>
                  <div className="back"><Link to={'/invite'}><i class="fa-solid fa-arrow-left"></i></Link></div>
                  <h2>Enter Your code we just sended on your number!</h2>
                  <span className='inputSpan'>
                      <input type="text" placeholder='Enter Your Code' />
                  </span>
                  <p>Didn't receive it? Tap to resend</p>
                  <button>
                        <Link to={'/allowNotification'} >
                              <span className='.link'>NEXT</span>
                        </Link>
                        <i class="fa-solid fa-right-long"></i>
                  </button>
            </div>
      </Wrap>
    </>
  )
}

export default CodeVerification


const Wrap = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
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
      .Cfirst{
            margin-top: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            h2{
                  margin-bottom: 20px;
            }
            .inputSpan{
                  position: relative;
                  &::before {
                        background: grey;
                        width: 100%;
                        height: 1px;
                        z-index: 10;
                        content: "";
                        position: absolute;
                        bottom: -5px;
                  }
                  input{
                        margin-bottom: 1px;
                        background: none;
                        border: none;
                        outline: none;
                        text-align: center;
                        color: var(grey);
                        font-weight: 500;
                        
                        &::placeholder{
                              color: grey;
                              font-weight: 500;
                              letter-spacing: .5px;
                        }
                  }
            }
            p{
                  margin-top: 10px;
            }
            
      }
      button{
            padding: 10px 30px;
            margin: 20px;
            border-radius: 20px;
            background: var(--blueTextVar);
            color: white;
            border: none;
            outline: none;
            text-decoration: none;

            span{
                  margin-right: 10px;
                  color: white;
                  font-size: 15px; 
                  font-weight: 500;
                  letter-spacing: .9px;
            }
      }
`