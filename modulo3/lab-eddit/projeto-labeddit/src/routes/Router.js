import CadastroPage from '../pages/CadastroPage/CadastroPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/cadastro' element={<CadastroPage/>} />
                <Route path='/feed' element={<FeedPage/>} />
                <Route path='/post/:id' element={<PostPage/>} />
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default Router
