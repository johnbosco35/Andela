/** @format */

import styled from "styled-components";
import img from "./Assets/toby.jpg";

const EnterpriseCard1 = () => {
  return (
    <div>
      <Container>
        <Main>
          <Big>We’re here to help you build a world class team, today.</Big>
          <Small>
            Trusted by enterprise teams and growing startups alike, Andela’s
            onboarding times are 70% faster than the industry average.
          </Small>
          <Down>
            <Button>
              <div>Schedule a call</div>
            </Button>
            <Button1>
              <div>Watch an overveiw</div>
            </Button1>
          </Down>
        </Main>
      </Container>
    </div>
  );
};

export default EnterpriseCard1;

const Button1 = styled.div`
  padding: 20px 15px;
  border-radius: 40px;
  background-color: #56c870;
  margin: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: black;
  transform: scale(1);
  transition: all 360ms;

  :hover {
    cursor: pointer;
    transform: scale(0.8);
  }

  div {
    width: 200px;
  }
`;
const Button = styled.div`
  padding: 20px 15px;
  border-radius: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: black;
  transform: scale(1);
  transition: all 360ms;

  :hover {
    cursor: pointer;
    transform: scale(0.8);
  }

  div {
    width: 200px;
  }
`;
const Down = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Small = styled.div`
  padding-bottom: 50px;
  font-size: 20px;
  font-weight: 500;
`;
const Big = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 100px;
  font-family: "Courier New", Courier, monospace;
`;
const Main = styled.div`
  width: 100%;
  height: 650px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;
const Container = styled.div`
  width: 100%;
  height: 650px;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
