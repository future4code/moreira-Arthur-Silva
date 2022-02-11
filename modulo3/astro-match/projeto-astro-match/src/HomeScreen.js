import axios from "axios"
import React, {useEffect, useState} from 'react' 
import styled from 'styled-components'


const Container = styled.div`
    width: 500px;
    height: 750px;
    border: 1px solid black;
    border-radius: 15px;
    position: relative;
`
const Button = styled.button`
    //argin-left: 20px;
    margin-top: 25px ;
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
const Title = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
`
const BoxImage = styled.div`
    display: flex;
    justify-content: center;
`
const Img = styled.img`
    border-radius: 15px;
    box-shadow: 1px 1px 7px black;
    width: 90%;
    height: 525px;
    
`
const Desc = styled.div`
    width: 80%;
    padding: 0px 15px; 
    color: white;
    position: relative;
    left: 30px;
    bottom: 130px;
`
const DivButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;  
    bottom: 80px;  
`
const FirstButton = styled.button`
    height: 70px;
    width: 70px;
    font-size: 40px;
    border-radius: 50px;
    border-color: red;
    color:red;
    cursor: pointer;
    &:hover{
        font-size: 50px;
        background-color: red;
        color: white;
    }
`
const SecondButton = styled.button`
    height: 70px;
    width: 70px;
    font-size: 40px;
    border-radius: 50px;
    border-color: green;
    color: green;
    cursor: pointer;
    &:hover{
        font-size: 50px;
        background-color: green;
        color: white;
    }
`

const HomeScreen = (props) => {

    //const [deslike, setDeslike] = useState(true);
    const [like, setLike] = useState(false);
    const [allMatches, setAllMatches] = useState({})
    
    const retornaPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthur/person";
        axios
        .get(url)
        .then((res) => {
            setAllMatches(res.data.profile)
        })
        .catch((err) => {
            alert("eerr",err)
        })
    }

    const escolhaLike = () => {
        
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthur/choose-person"
        const body = {
            id: allMatches.id,
            choice: true
        }
        
        axios
        .post(url, body)
        .then((res) => {
            //console.log("likeee!", res)
            retornaPerfil(res.data.profile)
        })
        .catch((err) => {
            console.log("erro!")
        })
        
    }

    useEffect(() => {
        retornaPerfil()
    }, [])

    return(
        <Container>
            <Title>
                <h1>AstroMatch</h1>
                <Button onClick={props.botao}>Pag of matches</Button>
            </Title>
            <BoxImage>
                <Img src={allMatches.photo} alt="" />
            </BoxImage>
            <Desc>
                <h3>{allMatches.name}, {allMatches.age}</h3>
                <p>{allMatches.bio}</p>
            </Desc>
            <DivButtons>
                <FirstButton onClick={retornaPerfil}>X</FirstButton>
                <SecondButton onClick={escolhaLike}>♥</SecondButton>
            </DivButtons>
        </Container>
    )
}
export default HomeScreen
