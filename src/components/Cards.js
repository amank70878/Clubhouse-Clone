import styled from "styled-components";
import cardsData from "../data/roomCard.json";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";

const Cards = () => {
  return (
    <>
      <h3 className="mt-5 text-center">
        The magic of Clubhouse is witnessing the most Unlikely Collisions of
        people.
      </h3>
      <Wrap>
        {cardsData.map((items,index=0) => (
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
                {items.members.map((person,index=0) => (
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
`;
const Titlewrap = styled.div`
  h3 {
    color: #484848;
    font-size: 16px;
    font-weight: 600;
    position: relative;
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
  }
`;
const Contentwrap = styled.div`
  display: flex;
  padding: 0px 10px;
  padding-top: 15px;
  color: #484848;
`;
const Leftwrap = styled.div`
  position: relative;
  padding: 10px 0;
  width: 150px;
  .firstImg {
    width: 70px;
    height: 70px;
    border-radius: 13px;
  }
  .secondImg {
    width: 70px;
    height: 70px;
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
  }
`;
const Persons = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.7;
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
`;
