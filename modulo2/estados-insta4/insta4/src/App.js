import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputEdit = styled.input`
  height: 30px;
  border: 2px solid black;
  margin: 10px;
  background-color: lightblue;
  border-radius: 5px;
  box-shadow: 2px 2px 3px black;
  padding:0px 5px;
  font-size: 20px;
  font-style: italic;
`
const DivPai = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
class App extends React.Component {
  state={
    listaUsuariosInsta: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150',
      },
      {
        nomeUsuario:'julia',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/151',
      },
      {
        nomeUsuario:'joanna',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/156',
      }
    ],
    valorNomeUsuario:'',
    valorFotoUsuario:'',
    valorFotoPost:''
  }      
      
  
  /*------------------------------------------------------------------------------------*/ 

  adicionaPost = () => {
    const adicionarPost = {
      nomeUsuario: this.state.valorNomeUsuario,
      fotoUsuario: this.state.valorFotoUsuario,
      fotoPost: this.state.valorFotoPost
    };
    const novaLista = [...this.state.listaUsuariosInsta, adicionarPost ];
    this.setState({
      listaUsuariosInsta: novaLista,
      valorNomeUsuario: "",
      valorFotoUsuario: "",
      valorFotoPost: ""
    }); 
  };
  onChangeNome = (event) => {
    this.setState({ valorNomeUsuario: event.target.value });
  };
  onChangeFoto = (event) => {
    this.setState({ valorFotoUsuario: event.target.value });
  };
  onChangePost = (event) => {
    this.setState({ valorFotoPost: event.target.value });
  };
  /*-------------------------------------------------------------------------------------*/ 
  render() {
    const listaDePosts = this.state.listaUsuariosInsta.map((post) => {
      return (
        <Post
        nomeUsuario={post.nomeUsuario} 
        fotoUsuario={post.fotoUsuario} 
        fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <div>
        <DivPai>
          <InputEdit
            value={this.state.valorNomeUsuario}           
            onChange={this.onChangeNome}
            placeholder={"nome"}
          />
          <InputEdit            
            value={this.state.valorFotoUsuario}           
            onChange={this.onChangeFoto}
            placeholder={"Sua foto"}
          />
          <InputEdit           
            value={this.state.valorFotoPost}           
            onChange={this.onChangePost}
            placeholder={"URL"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </DivPai>
        <MainContainer>{listaDePosts}</MainContainer>
      </div>
    );
    
  }
    
}

export default App;
