import React from "react";
import axios from "axios";


class Playlist extends React.Component{

    state = {
        inputCadastrar: ''
    }

    onChangeInput = (event) =>{
        this.setState({
            inputCadastrar: event.target.value
        })
    }

    cadastrarPlaylist = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {
            headers: {
                Authorization: "arthur-kelvim-moreira"
            }
        }
        const body = {
            name: this.state.inputCadastrar 
        }
        axios 
        .post(url, body, headers)
        .then((res) => {
            alert(`Cadastrada com sucesso!`)
        })
        .catch((err) => {
            alert(`Algo deu errado! :( `)
        })
    }

    render(){

        console.log(this.state.inputCadastrar)
        return(
            <>
                <h1>Cadastre suas playlist aqui!</h1>
                <input 
                onChange={this.onChangeInput} 
                value={this.state.inputCadastrar} 
                placeholder="Nome da playlist" 
                type="text"              
                />
                <button onClick={this.cadastrarPlaylist}>Cadastrar Playlist</button>
                <button onClick={this.props.goPageDetails}>go to details</button>
            </>
        )
    }
}

export default Playlist