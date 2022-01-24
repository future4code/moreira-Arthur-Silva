import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components';

const Container = styled.div`
  margin: 40px auto;
`
const Botoes = styled.div`
  height: 30px;
  width: 70px;
  border: none;
  font-size: 18px;
  background-color: lightblue;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
  text-align: center;
  margin: 10px;
`
const Boxe = styled.div`
  display: flex;
  justify-content: flex-end;
` 
class App extends React.Component{
  state = {
    screenAtual:1,
    botaoVoltar:''
  }
  proximaPagina = () =>{
    this.setState({screenAtual: this.state.screenAtual + 1})
    
  }
  voltarPagina = () =>{
    this.setState({screenAtual:this.state.screenAtual - 1})
  }
  render(){
    const renderizaTelaCorreta = () =>{
      switch(this.state.screenAtual){
        case 1: 
          return <Etapa1/>
        case 2: 
          return <Etapa2/>
        case 3: 
          return <Etapa3/>
        default: 
          return <Final/> 
      }
    }    
    return(
      <Container>
        {renderizaTelaCorreta()}       
        <Boxe>
          <Botoes onClick={this.voltarPagina}>Voltar</Botoes>
          <Botoes onClick={this.proximaPagina}>Next</Botoes>
        </Boxe>                 
      </Container>
    )
  }
}
export default App;
