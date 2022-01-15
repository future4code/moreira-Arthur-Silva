import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 50px auto;
    display: flex;
    justify-content: center;
    width: 400px;
    height: 700px;
    border:1px solid black;
    background-image: url(https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg);
    border-radius: 25px;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
` 
const Input = styled.input`
    background-color: white;
    margin: 5px;
    height: 24px;
    width: 250px;
    border-radius: 20px;
`
const Button = styled.button`
    background-color: lightgreen;
    height: 30px;
    width: 250px;
    border-radius: 5px;
    margin: 5px 0px 20px 10px;
    cursor: pointer;
`

class Whats extends React.Component{

    state = {
        mensagemDoUsuario: '',
        mensagemDoInput: '',
        mensagemEnviada: '',      
    }
    //Esta funcao recebe um evento, que é o texto colocado no input.
    //Toda vez que o input muda, o state sofre essa alteracao. Isso é feito com onChange

    onChangeMensagemUsuario = (event) => {
        this.setState({ 
            mensagemDoUsuario: event.target.value
        });
    }
    //Esta funcao onChange percebe que o numero foi alterado e guarda esse valor.
    onChangeDoInput = (event) => {
        this.setState({ 
            mensagemDoInput: event.target.value
        });
    }
    //Esta funcao atua sobre o click do botão, ao ser prescionado o botão realiza algo.
    onClickBotao = () => {
        let nome = this.state.mensagemDoUsuario;
        let mensagem = this.state.mensagemDoInput;
        
        let mensagemCompleta = `${nome.toLocaleUpperCase()}: ${mensagem}`

        this.setState({
            mensagemEnviada: <strong>{mensagemCompleta}</strong>
        })
        this.apagaBotao()     
    }
   
    apagaBotao = () => {
        this.setState({
            mensagemDoUsuario: '',
            mensagemDoInput: ''
        })
    }  

    render(){
        return(
            <Container>
                <Box>
                    {this.state.mensagemEnviada}
                    <Input
                    type="text"
                    placeholder='Usuario'
                    onChange={this.onChangeMensagemUsuario}
                    value={this.state.mensagemDoUsuario}
                    />
                    <Input
                    type="text"
                    placeholder='Mensagem'
                    onChange={this.onChangeDoInput}
                    value={this.state.mensagemDoInput}
                    />
                    <Button onClick={this.onClickBotao}>Enviar</Button>
                </Box>
            </Container>
        )
    }
}
export default Whats