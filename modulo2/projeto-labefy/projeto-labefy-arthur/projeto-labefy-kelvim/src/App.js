import React from "react";
import Details from "./pages/DetailsPage/Details";
import Playlist from "./pages/PlayListPage/PlayList";

class App extends React.Component{

  state = {
    telaAtual: 'PlayListPage'
  }

  currentScreen = () =>{
    switch(this.state.telaAtual){
      case 'PlayListPage':
        return <Playlist goPageDetails={this.onclickIrCadastro} />
      case 'Details':
        return <Details goPagePlayLists={this.onclickIrDetalhes}/>
      default: 
        return <Playlist />    
    }
  }

  onclickIrCadastro = () =>{
    this.setState({ telaAtual: 'Details'})
  }
  onclickIrDetalhes = () =>{
    this.setState({ telaAtual: 'PlayListPage'})
  }

  render(){
    return(
      <>
        {this.currentScreen()}        
      </>
    )
  }
}

export default App;
