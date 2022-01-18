import React from 'react'
import styled from 'styled-components';

const Box = styled.div`
  margin: 0 auto;
  height: 700px;
  width: 600px;
  background-color: lightblue;
  border: 2px solid black;
  border-radius: 0px 50px;
  box-shadow: 1px 1px 15px black; 
  font-size: 20px;
  display: flex;
  justify-content: center;
`
class Etapa1 extends React.Component {
  render() {
    return (
      <Box>
        <div>
          <h1>Etapa 1 - Dados Gerais</h1>
          <div>
            <p>1. Qual o seu nome?</p>
            <input type="text" />
          </div>
          <div>
            <p>2. Qual sua idade?</p>
            <input type="text" />
          </div>
          <div>
            <p>3. Qual seu email?</p>
            <input type="text" />
          </div>
          <div>
            <p>Qual a sua escolaridade?</p>
            <select>
              <option>Ensino médio incompleto</option>
              <option>Ensino médio completo</option>
              <option>Ensino superior incompleto</option>
              <option>Ensino superior completo</option>
            </select>
          </div>
        </div>
      </Box>
    );
  }
}

export default Etapa1;
