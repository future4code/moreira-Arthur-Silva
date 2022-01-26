
import React from "react";
import axios from 'axios';

const urlUsers = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';

const headers = {
    headers: {
      Authorization: "arthur-kelvim-moreira"
    }
};

export default class Home extends React.Component {

    state = {
        users: [],
        nomeUsuario: '',
        emailUsuario: ''
    }
    componentDidMount(){
        this.getAllUsers()
    }
    getAllUsers = () => {
        axios
        .get(urlUsers, headers)
        .then((res) => { this.setState({ users: res.data }) })
        .catch((err) => { alert("Algo deu errado!") })
    }
    createUser = () => {
        const body = {
            name: this.state.nomeUsuario,
            email: this.state.emailUsuario
        }

        axios
            .post(urlUsers, body, headers)
            .then((res) => {
                alert (`O usuario ${this.state.nomeUsuario} foi criado com sucesso!`);
                this.setState({ nomeUsuario:'', emailUsuario:''})
                this.getAllUsers()
            })
            .catch((err) => {
                alert(err.response.data.message);
                this.setState({ nomeDoUsuario: '' , emailUsuario:''})
            })     
    }

    onChangeUsuario = (event) => {
        this.setState({ nomeUsuario: event.target.value })
    }
    onChangeEmail = (event) => {
        this.setState({ emailUsuario: event.target.value })
    }


    render(){
        const copiaDosUsuarios = this.state.users.map((usuarios) => {
            return <li key={usuarios.id}>{usuarios.name}</li>
        })

        return(
            <>
                <input type="text" onChange={this.onChangeUsuario} value={this.state.nomeUsuario} placeholder="Nome"></input>
                <input type="text" onChange={this.onChangeEmail} value={this.state.emailUsuario} placeholder="Email"></input>
                <button onClick={this.createUser}>Cadastre aqui</button>
                {copiaDosUsuarios}
            </>
        )
    }
}
