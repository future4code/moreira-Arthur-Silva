import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FigP = {
  margin: "5px",
  fontSize: "16px",
};
const Header = styled.header`
  background-color: #bdc667;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
`;
const H1 = styled.h1`
  font-size: 24px;
  border: 1px solid black;
  padding: 5px;
`;
const Content = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
`;
const FirstButton = styled.button`
  height: 35px;
  width: 100px;
  border: 3px solid #bdc667;
  background-color: #77966d;
  box-shadow: 1px 2px 15px #77966d;
  font-weight: bold;
  margin: 5px;
`;
const SecondButton = styled.button`
  height: 35px;
  width: 100px;
  border: 3px solid #bdc667;
  background-color: #77966d;
  box-shadow: 1px 2px 15px #77966d;
  font-weight: bold;
  margin: 5px;
`;
const Main = styled.div`
    display: flex;
    height: 500px;
    align-items: center;
    justify-content: center;
`

const HomePage = () => {
  const navigate = useNavigate();

  const irViagens = () => {
    navigate("/ListTripPage");
  };
  const irLogin = () => {
    navigate("/LoginPage");
  };

  return (
    <div>
      <Header>
        <div>
          <H1>LabeX</H1>
        </div>
        <Content>
          <p style={FigP}>Viagens</p>
          <p style={FigP}>Sobre Nós</p>
          <p style={FigP}>Entrar</p>
        </Content>
      </Header>
      <Main>
        <FirstButton onClick={irViagens}>Ver viagens</FirstButton>
        <SecondButton onClick={irLogin}>Área de ADM</SecondButton>
      </Main>
    </div>
  );
};
export default HomePage;
