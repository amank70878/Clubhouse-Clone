import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsAt, BsUpload } from "react-icons/bs";
import {
  AiOutlineSetting,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Profile = () => {
  return (
    <>
      <Wrap>
        <Header>
          <Link to={"/home"}>
            <img src="./images/arrow.png" alt="" />
          </Link>
          <div className="right">
            <BsAt />
            <BsUpload />
            <AiOutlineSetting />
          </div>
        </Header>
        <InfoDiv>
          <Info>
            <Personal>
              <div className="img"></div>
              <div className="name">Aman Kumar</div>
              <div className="account">@__a.m.a.n.___</div>
              <div className="following">
                <h4>0</h4>
                <p className="spe">followers</p>
                <h4>0</h4>
                <p>following</p>
              </div>
            </Personal>
            <Bio>
              Add a bio
              <p>
                I'm Jane Hong, and I recently graduated with an advanced diploma
                from Smith secondary school. I'm seeking an internship where I
                can apply my skills in content creation and increase my
                experience in digital marketing."
              </p>
            </Bio>
            <Joined>
              <span className="Jright">
                <AiOutlineTwitter />
                Add Twitter
              </span>
              <span>
                <AiOutlineInstagram />
                Add Instagram
              </span>
            </Joined>
            <Nomination>
              <div className="img"></div>
              <div className="textN">
                <h3>Joined 14-July-2020</h3>
                <h4>
                  Nominated by <b>Anton Alarcon</b>
                </h4>
              </div>
            </Nomination>
            <Member>
              <div>Member of</div>
              <button>+</button>
            </Member>
          </Info>
        </InfoDiv>
      </Wrap>
    </>
  );
};

export default Profile;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f2f0e4;
  overflow-x: hidden;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .right {
    svg {
      width: 30px;
      height: 30px;
      margin: 0 15px;
      cursor: pointer;
    }
  }
`;
const InfoDiv = styled.div`
  padding: 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Personal = styled.div`
  color: #000;
  .img {
    width: 120px;
    height: 120px;
    background-image: url(./images/profile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
  }
  .name {
    font-size: 1.2em;
    font-weight: 600;
    margin: 10px 0 0 0;
  }
  .account {
    font-size: 1em;
  }
  .following {
    margin: 10px 0 0 0;
    display: flex;
    align-items: center;
    h4 {
      font-size: 1.3em;
      margin: 0 2px;
      font-weight: 600;
    }
    p {
      margin: 0 2px;
      font-size: 1.2 em;
      letter-spacing: 1px;
    }
    .spe {
      margin-right: 20px;
    }
  }
`;
const Bio = styled.div`
  margin-top: 30px;
  color: var(--blueTextVar);
  font-size: 1.2em;
  font-weight: 600;
  cursor: pointer;
  p {
    width: 300px;
    font-size: 0.75em;
    color: var(--brownTextVar);
  }
`;
const Joined = styled.div`
  margin-top: 30px;
  color: var(--blueTextVar);
  font-weight: 600;
  display: flex;
  align-items: center;
  span {
    font-size: 1.1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      color: var(--blueTextVar);
      margin-right: 5px;
    }
  }
  .Jright {
    margin-right: 20px;
  }
`;
const Nomination = styled.div`
  color: #000;
  margin-top: 30px;
  display: flex;
  align-items: center;
  .img {
    width: 50px;
    height: 50px;
    background-image: url(./images/profile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 13px;
    margin-right: 14px;
  }
  .textN {
    h3 {
      font-size: 1em;
    }
    h4 {
      font-size: 1em;
      line-height: 0.8;
    }
  }
`;
const Member = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: var(--brownTextVar);
  div {
    margin-right: 10px;
    font-size: 1.2em;
    font-weight: 6002;
  }
  button {
    font-size: 1.4em;
    padding: 1px 10px;
    border-radius: 5px;
    background: lightblue;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }
`;
