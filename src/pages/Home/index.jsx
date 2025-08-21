import { useState } from 'react'
import './style.css'
import Excluir from '../../assets/excluir.png'

function Home() {

  const users = [{
    id: 'j43b5jh4b5h345b',
    name: 'Allan',
    age: 18,
    email: 'allan@gmail.com'
  },
  {
    id: 'j43b45nkbk345h345b',
    name: 'Helo',
    age: 18,
    email: 'helo@gmail.com'
  }]

  return (
    <div className='container'>
      <form className='caixa'>
        <h1 className='title'>Cadastro de Usuarios</h1>
        <input placeholder='Digite o seu Nome' type="text" name="nome" />
        <input placeholder='Digite a sua idade' type="number" name="idade" />
        <input placeholder='Digite o seu E-mail' type="email" name="email" />
        <button className='buttonCadastrar' type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button className='buttonExcluir'>
            <img className='excluir' src={Excluir} alt="excluir" />
          </button>
        </div>
      ))}


    </div>

  )
}

export default Home
