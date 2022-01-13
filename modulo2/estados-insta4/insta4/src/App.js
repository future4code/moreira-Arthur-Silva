import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Julia'}
          fotoUsuario={'https://hypescience.com/wp-content/uploads/2010/03/feliz.jpg'}
          fotoPost={'https://img.quizur.com/f/img5effc916550f53.01612839.jpg?lastEdited=1593821469'}
        />
        <Post
          nomeUsuario={'Joana'}
          fotoUsuario={'https://www.familia.com.br/wp-content/uploads/2019/12/Pessoas-felizes-n%C3%A3o-t%C3%AAm-tempo-para-criticar-a-vida-dos-outros.jpg'}
          fotoPost={'https://i.pinimg.com/474x/77/fa/fd/77fafd2bf86762baf726198fd04caf4d.jpg'}
        />
      </MainContainer>
    )
  }
}

export default App;
