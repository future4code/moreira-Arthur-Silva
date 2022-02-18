const CardViagem = (props) =>{
    return(
        <div>
            <div>
                <p>PLaneta: {props.planeta}</p>
                <p>Descricao: {props.descricao}</p>
                <p>Data: {props.data}</p>
                <p>Duração: {props.duracao}</p>
                <button value={props.id}>clique para saber mais detalhes</button>
            </div>
            <hr/>
        </div>
    )
}

export default CardViagem