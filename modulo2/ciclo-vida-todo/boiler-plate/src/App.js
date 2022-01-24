import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id:Date.now() + 1,
          texto: "Lavar louças",
          completa: true
        },
        {
          id:Date.now() + 2,
          texto: "Limpar luminarias",
          completa: false
        }
      ],
      inputValue: '',
      filtro: ''
    }
  
  salvarLocalStorage = () =>{   
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));   
  } 
 /*  pegarLocalStorage = () =>{
    const tarefa = JSON.parse(localStorage.getItem("tarefas"))   
    this.setState({
      tarefas: tarefa
    })
  }  */ 

  componentDidUpdate() {
    this.salvarLocalStorage()
  };

  /* componentDidMount() {
    this.pegarLocalStorage()
  }; */

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  criaTarefa = (event) => {
    const novoObjeto = {
      id:Date.now(),
      texto:this.state.inputValue,
      completa: false
    }

    const copiaEstado = [...this.state.tarefas, novoObjeto]

    this.setState({
      tarefas:copiaEstado,
      inputValue:''
    })

  }

  selectTarefa = (id) => {
    const novasTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id){
        const tarefaQualquer = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return tarefaQualquer
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: novasTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  render() {
    
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })
    
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
