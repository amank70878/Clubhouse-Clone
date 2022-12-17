import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <Wrap>
            <h1>Welcome!</h1>
            <div className='Wfirst'>
                  <p>Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil vitae, alias beatae iure qui suscipit aspernatur sequi sint, repellat vel. Suscipit impedit incidunt est minima accusamus repellat saepe error, labore dolore asperiores at iusto perspiciatis pariatur officiis molestiae? Quam eius maiores cumque. Quibusdam eius nobis enim, iusto rerum rem! sit amet consectetur adipisicing elit. Perspiciatis fuga cumque incidunt, corrupti nobis similique. Necessitatibus consequatur dolores alias laudantium aspernatur voluptate laboriosam repellat cupiditate eos natus eaque veritatis aliquid delectus iure porro ad eligendi, nisi reprehenderit ullam molestiae officia sint. Nam nesciunt repellendus sunt quibusdam enim, omnis totam saepe beatae laudantium aspernatur fuga optio earum expedita pariatur rem consequatur non ullam magni maiores voluptatem asperiores dicta, fugiat quidem? Voluptatum maxime quae quaerat officia, quo temporibus repellat molestiae suscipit repellendus?</p>
                  <p>Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil vitae, alias beatae iure qui suscipit aspernatur sequi sint, repellat vel. Suscipit impedit incidunt est minima accusamus repellat saepe error, labore dolore asperiores at iusto perspiciatis pariatur officiis molestiae? Quam eius maiores cumque. Quibusdam eius nobis enim, iusto rerum rem! sit amet consectetur adipisicing elit. Perspiciatis fuga cumque incidunt, corrupti nobis similique. Necessitatibus consequatur dolores alias laudantium aspernatur voluptate laboriosam repellat cupiditate eos natus eaque veritatis aliquid delectus iure porro ad eligendi, nisi reprehenderit ullam molestiae officia sint. Nam nesciunt repellendus sunt quibusdam enim, omnis totam saepe beatae laudantium aspernatur fuga optio earum expedita pariatur rem consequatur non ullam magni maiores voluptatem asperiores dicta, fugiat quidem? Voluptatum maxime quae quaerat officia, quo temporibus repellat molestiae suscipit repellendus?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat unde aliquid doloremque voluptates debitis a! Voluptatum quod deleniti beatae consequatur?</p>
            </div>
            <div className='Wsecond'>
                  <button>Get your Username</button>
                  <Link to={'/invite'} className='.link'>
                        <p>
                        Have an invite text? Sign in
                        </p>
                  </Link>
            </div>
      </Wrap>
    </>
  )
}

export default Welcome

const Wrap = styled.div`
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 100px 100px;
      color: var(--brownTextVar);
      background: var(--bgColorVar);

      h1{
            font-size: 33px;
      }
      .Wfirst{
            font-size: 17px;
            text-align: center;
            height: 330px;
      }
      .Wsecond{
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: center;
            button{
                  background: var(--blueTextVar);
                  border: none;
                  outline: none;
                  padding: 10px 30px;
                  border-radius: 20px;
                  margin: 10px 0;
            }
            p{
                  color: var(--blueTextVar);
                  font-size: 17px;
            }
      }
`