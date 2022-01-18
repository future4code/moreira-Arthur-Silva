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
class Etapa2 extends React.Component{
  render(){
    return (
      <Box>
          <div>
          <h2>Etapa 2 - Informações do ensino superior</h2>
          <div>
              <p>5. Qual curso?</p>
              <input type="text"/>
          </div>
          <div>
              <p>6. Qual a unidade de ensino?</p>
              <input type="text"/>
          </div>
          </div>         
      </Box>    
    );
  }  
}

export default Etapa2;
