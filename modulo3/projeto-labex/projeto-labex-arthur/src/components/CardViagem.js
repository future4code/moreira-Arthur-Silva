import styled from "styled-components"

const Container = styled.div`
    border: 3px solid #77966d;
    border-radius: 15px;
    width: 80%;
    margin: 30px auto;
    text-align: center;
    padding: 5px;
`



const CardViagem = (props) =>{
    return(
        <Container>
            <div>
                <p>Planeta: {props.planeta}</p>
                <p>Descricao: {props.descricao}</p>
                <p>Data: {props.data}</p>
                <p>Duração: {props.duracao}</p>
            </div>
            
        </Container>
    )
}

export default CardViagem