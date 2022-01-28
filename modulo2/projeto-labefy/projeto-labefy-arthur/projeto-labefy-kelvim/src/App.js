import React from "react";
import Details from "./pages/DetailsPage/Details";
import Playlist from "./pages/PlayListPage/PlayList";

class App extends React.Component{
  render(){
    return(
      <>
        <Details />
        <Playlist />
      </>
    )
  }
}

export default App;
