import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Wrap>
            <h1>home !</h1>
      </Wrap>
    </>
  )
}

export default Home


const Wrap = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 100px 100px;
      color: var(--brownTextVar);
      background: var(--bgColorVar);
`