import HomeScreen from "./HomeScreen";
import MatchScreen from "./MatchScreen";

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
    //argin-left: 20px;
    margin: 25px;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 30px;
    border-radius: 15px;
    cursor: pointer;
    text-transform: capitalize;
    background-color: black;
    color: white;
    &:hover{
        color: black;
        background-color: white;
    }
`

const App = () => {
  
  const [telaAtual, setTelaAtual] = useState("pagHome")
  const [buttonReset, setButtonReset] = useState({})
  //cosnt [trocarDeTela, setTrocarDeTela] = useState("")

    const renderizaTela = () => {
        switch(telaAtual){
            case "pagHome":
                return <HomeScreen botao={irParaMatch} />
            case "pagMatch":
                return <MatchScreen botaoirHome={irParaHome}/>
            default: 
                return <HomeScreen />      
        }
    }

    const buttonAxi = () => {
      const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthur/clear"
      axios
      .put(url)
      .then((res) => {
        setButtonReset(res.data)
      })
      .catch((err) => {
        console.log("deu erro",err)
      })
    }
    const irParaMatch = () => {
      setTelaAtual("pagMatch")
    }
    const irParaHome = () => {
      setTelaAtual("pagHome")
    }

  return (
    <BoxContainer >
      {renderizaTela()}
      <Button onClick={() => buttonAxi()}>RESETAR MATCHES</Button>
    </BoxContainer>
  );
}
export default App;
