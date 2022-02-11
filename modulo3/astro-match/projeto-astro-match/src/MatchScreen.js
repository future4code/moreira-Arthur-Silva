import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Fig = {
    listStyle: "none",
}
const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    margin-left: 20px;
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
const Content = styled.div`
    border: 1px solid black;
    width: 500px;
    height: 750px;
    border-radius: 15px;
`
const H1 = styled.h1`
    /* text-align: center;
    margin: 40px 0px; */
`
const Container = styled.div`
    margin: 12px;
    display: flex;
    padding: 2px;
    &:hover{
        background-color: lightcoral;
        border-radius: 10px;
        
    }
`
const Img = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin: 0px 15px;
`
const DivLi = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 15px ;
`
const Li = styled.li`
    margin: 1px;
`
const MatchScreen = (props) =>{

    const [person, setPerson] = useState([])

    const getMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthur/matches"
        const headers = {"Content-Type": "application/json"} 
        axios
        .get(url, headers)
        .then((res) => {
            setPerson(res.data.matches)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getMatches()
    },[])

    return(
        <div>
            <Content>
                <Title>
                    <H1>Seus matches estão aqui!</H1>
                    <Button onClick={props.botaoirHome}>back home</Button>
                </Title>
                
                {person.map((pessoas) => {
                    return (
                        <Container>
                            <Img src={pessoas.photo} />
                            <DivLi>
                                <Li style={Fig} key={pessoas.id}>{pessoas.name}</Li>
                            </DivLi>
                        </Container>
                    )
                })}
            </Content>
        </div>
    )
}
export default MatchScreen