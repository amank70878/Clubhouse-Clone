import React,{ useState }from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const Invite = () => {
      const [value, setValue] = useState();
  return (
    <>
      <Wrap>
            <div className='Ifirst'>
                  <div className="back"><Link to={'/'}><i class="fa-solid fa-arrow-left"></i></Link></div>
                  <h1>Enter Your Phone Number!</h1>
                  <PhoneInput
                  country="India"
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}/>
            </div>
            <div className="Isecond">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quasi quia facilis, vitae, maiores magnam dolorem voluptatibus nulla animi earum fuga vero. Aliquid qui sed, commodi harum veritatis doloribus expedita!</p>
                  <button>
                        <Link to={'/codeVerification'} >
                              <span className='.link'>NEXT</span>
                        </Link>
                        <i class="fa-solid fa-right-long"></i>
                  </button>
            </div>
      </Wrap>
    </>
  )
}

export default Invite

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
      .Ifirst{
            h1{

                  margin-bottom: 100px;
            }
      }
      .Isecond{
            margin-top: 50px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            p{
                  max-width: 900px;
                  margin: auto;
            }
            button{
                  padding: 10px 30px;
                  margin: 20px;
                  border-radius: 20px;
                  background: var(--blueTextVar);
                  color: white;
                  
                  border: none;
                  outline: none;
                  span{
                        margin-right: 10px;
                        color: white;
                        font-size: 15px; 
                        font-weight: 500;
                        letter-spacing: .9px;
                  }
            }
            
      }
`