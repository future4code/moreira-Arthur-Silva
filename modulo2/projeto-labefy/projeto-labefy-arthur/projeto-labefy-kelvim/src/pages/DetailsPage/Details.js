import React from "react";
import axios from "axios";


class Details extends React.Component{

    state = {
        playListsCadastradas: []
    }
    
    componentDidMount(){
        this.showPlaylist()
    }
    
    showPlaylist = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {
            headers: {
                Authorization: "arthur-kelvim-moreira"
            }
        }    
        axios.get(url, headers)
        .then((res) => { 
            this.setState({playListsCadastradas: res.data.result.list})
        })
        .catch((err) => alert("Deu errado meu caro :("))
    }

    render(){
        const copiaPlaylists = this.state.playListsCadastradas.map((playlist) =>{
            return (
                <li key={playlist.id}>{playlist.name}</li>
            )
        })
      
        return(
            <>
                <h1>Aqui você encontra suas Playlists! :D</h1>
                {copiaPlaylists}
                <button onClick={this.props.goPagePlayLists}>Ir para cadastro</button>
            </>
        )
    }
}

export default Details