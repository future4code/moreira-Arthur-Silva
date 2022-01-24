import React from 'react'
import styled from 'styled-components'

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
class Final extends React.Component{
  
  render(){
    return (
      <Box>
          <div>
            <h4>O formulário acabou.</h4>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
          </div>
      </Box>
    )
  }  
}

export default Final;