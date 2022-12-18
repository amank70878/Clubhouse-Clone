import styled from "styled-components";
import cardsData from "../data/roomCard.json";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";

const Cards = () => {
  return (
    <>
      <H2 className="mt-5 text-center">
        The magic of Clubhouse is witnessing the most Unlikely Collisions of
        people.
      </H2>
      <Wrap>
        {cardsData.map((items, index = 0) => (
          <InnerWrap key={index++}>
            <Titlewrap>
              <h3>{items.title}</h3>
              <h4>{items.sub_title}</h4>
            </Titlewrap>
            <Contentwrap>
              <Leftwrap>
                <img className="firstImg" src="./images/user1.jpg" alt="" />
                <img className="secondImg" src="./images/user2.jpg" alt="" />
              </Leftwrap>
              <Rightwrap>
                {items.members.map((person, index = 0) => (
                  <Persons key={index++}>
                    {person.first_name} {person.last_name} <BsChatDots />
                  </Persons>
                ))}
                <Buttonsdiv>
                  <Buttons>
                    1.2
                    <BsFillPersonFill />
                  </Buttons>
                  <Buttons className="mx-3">/</Buttons>
                  <Buttons>
                    5<BsChatDotsFill />
                  </Buttons>
                </Buttonsdiv>
              </Rightwrap>
            </Contentwrap>
          </InnerWrap>
        ))}
      </Wrap>
    </>
  );
};

export default Cards;

const H2 = styled.div`
  margin-top: 10px;
  font-size: 2em;
  font-weight: 600;
  @media screen and (max-width: 1510px) {
    font-size: 1.2em;
  }
  @media screen and (max-width: 990px) {
    font-size: 1em;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.9em;
    font-weight: 500;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.7em;
  }
`;
const Wrap = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const InnerWrap = styled.div`
  margin: 5px 15px;
  margin-bottom: 20px;
  padding: 15px 20px;
  width: 500px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 5px 10px 1px lightgrey;
  @media screen and (max-width: 500px) {
    box-shadow: 3px 3px 10px 0px lightgrey;
    margin: 10px 5px;
  }
  @media screen and (max-width: 420px) {
    padding: 10px 10px;
  }
`;
const Titlewrap = styled.div`
  h3 {
    color: #484848;
    font-size: 16px;
    font-weight: 600;
    position: relative;
    @media screen and (max-width: 550px) {
      font-size: 14px;
    }
    &::before {
      background: grey;
      width: 19%;
      height: 1px;
      content: "";
      position: absolute;
      bottom: -2px;
    }
  }
  h4 {
    line-height: 1.3;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.7px;
    @media screen and (max-width: 550px) {
      font-size: 15px;
    }
  }
`;
const Contentwrap = styled.div`
  display: flex;
  padding: 0px 10px;
  padding-top: 15px;
  color: #484848;
  @media screen and (max-width: 420px) {
    padding: 0px 5px;
    padding-top: 10px;
  }
`;
const Leftwrap = styled.div`
  position: relative;
  padding: 10px 0;
  width: 150px;
  @media screen and (max-width: 1000px) {
    width: 130px;
  }
  @media screen and (max-width: 650px) {
    width: 120px;
  }
  @media screen and (max-width: 650px) {
    width: 100px;
  }
  @media screen and (max-width: 650px) {
    width: 80px;
  }
  img {
    width: 70px;
    height: 70px;
    @media screen and (max-width: 650px) {
      width: 60px;
      height: 60px;
    }
    @media screen and (max-width: 350px) {
      width: 50px;
      height: 50px;
    }
    @media screen and (max-width: 420px) {
      width: 45px;
      height: 45px;
    }
  }
  .firstImg {
    border-radius: 13px;
  }
  .secondImg {
    border-radius: 13px;
    position: absolute;
    top: 45px;
    left: 20px;
  }
`;
const Rightwrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  svg {
    margin-top: -8px;
    margin-left: 5px;
    @media screen and (max-width: 550px) {
      font-size: 17px;
      margin-top: -5px;
    }
    @media screen and (max-width: 420px) {
      font-size: 15px;
      margin-top: -2px;
    }
  }
`;
const Persons = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.7;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media screen and (max-width:700px) {
    font-size: 17px;
  }
  @media screen and (max-width: 550px) {
    font-size: 15px;
  }
  @media screen and (max-width: 420px) {
    font-size: 13px;
  }
`;
const Buttonsdiv = styled.p`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Buttons = styled.span`
  font-size: 20px;
  font-weight: 600;
  @media screen and (max-width: 550px) {
    font-size: 17px;
  }
`;
