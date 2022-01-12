import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import MinhaImagem from './imagens/ArthurFT-1.jpeg';

/* import Imagemtelefone from './imagens/tel.png' */



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaImagem}
          nome="Arthur Kelvim de Oliveira Silva" 
          descricao="Olá, me chamo Arthur Kelvim e sou um estudante de Desenvolvimento Web em formação. Estudo atualmente
          da escola de programação Labenu, tenho uma grande paixão por programar e pretendo está na aréa de Front-End da
          aplicação. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='endereco-contatos'>
        <CardPequeno 
        imagem="https://static.vecteezy.com/ti/vetor-gratis/t2/552728-icone-de-de-localizacao-geografica-gr%C3%A1tis-vetor.jpg"
        descri="Email: kelvimarthur@gmail.com"
        />
        <CardPequeno 
        imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
        descri="Endereço: CNB 7"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Ainda estudando aqui, mês que vem completo 3 meses."
          
        />
        
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="DevMedia" 
          descricao="Estudei durante 6 meses lá. Tive oportunidade de ver tecnologias como: HTML/CSS/JS." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
