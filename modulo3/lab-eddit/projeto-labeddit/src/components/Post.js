import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToPostPage } from '../routes/coordinator'

const Container = styled.div`
    border: 1px solid;
    margin: 10px;
    height: 250px;
`
const UserName = styled.h3`
    text-align: center;
`
const PostText = styled.p`
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    height: 150px;
`

const Post = (props) =>{

    return(
        <Container>
            <UserName>{props.nomeDoUsuario}</UserName>
            <PostText>{props.comentarioDousuario}</PostText>
            <button onClick={props.teste}>Detalhes do Post</button>
        </Container>
    )
}

export default Post