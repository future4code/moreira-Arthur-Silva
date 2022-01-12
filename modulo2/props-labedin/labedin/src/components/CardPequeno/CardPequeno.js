import React from 'react';
import styled from 'styled-components';

const Menu = styled.div `
    border: 1px solid;
    margin: 5px;
    border-radius: 10px;
    font-size: 17px;
    font-weight: bold;
    padding: 25px;
    width: 270px;
    
`
const ImagemMenu = styled.img`
    width: 50px;
`

 
function CardPequeno(props) {
    return (
        <Menu className='container'>
                <ImagemMenu src={ props.imagem }/>
                <p>{ props.descri }</p>
        </Menu>
    )
}

export default CardPequeno;



