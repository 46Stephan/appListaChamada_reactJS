import React, {useState} from 'react';

import './style.css'

import{Card} from'../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState();
  
  return (
    <div className='container'>
    <h1>Nome: {studentName}</h1>

    <input 
      type="text" 
      placeholder="Digite o seu nome "
      onChange={e => setStudentName(e.target.value)}
      />

    <button type="button">Adicionar</button>

    <Card name="Stephan" time="10:55:55"/>
    <Card name="Costa" time="11:02:58"/>

    </div>
  )
}


