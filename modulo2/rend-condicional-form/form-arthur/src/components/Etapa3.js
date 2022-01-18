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
class Etapa3 extends React.Component {
  render() {
    return (
      <Box>
        <div>
          <h3>Etapa 3 - Informações Gerais de Ensino</h3>
          <div>
            <p>Por que você não terminou um curso de graduação?</p>
            <input />
          </div>
          <div>
            <p>Você fez algum curso complementar?</p>
            <select>
              <option>Nenhum</option>
              <option>Curso Técnico</option>
              <option>Curso de Inglês</option>
            </select>
          </div>
        </div>
      </Box>
    );
  }
}

export default Etapa3;