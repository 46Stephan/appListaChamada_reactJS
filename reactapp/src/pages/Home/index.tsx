import './style.css'

import{Card} from'../../components/Card';
export function Home() {

  return (
    <div className='container'>
    <h1>Lista de Presença</h1>
    <input type="text" placeholder="Digite o seu nome "/>
    <button type="button">Adicionar</button>

    <Card name="Stephàn" time="10:55:55"/>
    <Card name="Costa" time="11:02:58"/>

    </div>
  )
}


