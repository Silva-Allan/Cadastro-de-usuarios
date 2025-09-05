import { useState } from 'react'
import './style.css'
import Excluir from '../../assets/excluir.png'

function Home() {

  const [users, setUsers] = useState([])
  const [form, setForm] = useState({name: '', age: '', email: ''})

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleCadastrar = async () => {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const newUser = await response.json();
    setUsers([...users, newUser]);
    setForm({ name: '', age: '', email: '' });
  };

  const handleExcluir = async (id) => {
    await fetch(`http://localhost:3001/users/${id}`, { method: "DELETE" });
    setUsers(users.filter(user => user.id !== id));
  };

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
