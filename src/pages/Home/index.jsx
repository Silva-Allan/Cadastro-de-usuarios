import { useState, useEffect } from 'react'
import './style.css'
import Excluir from '../../assets/excluir.png'

function Home() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', email: '' });

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
      <form className='caixa' onSubmit={(e) => e.preventDefault()}>
        <h1 className='title'>Cadastro de Usuarios</h1>
        <input placeholder='Digite o seu Nome' type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input placeholder='Digite a sua idade' type="number"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <input placeholder='Digite o seu E-mail' type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button className='buttonCadastrar' type='button' onClick={handleCadastrar}>
          Cadastrar
        </button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button className='buttonExcluir' onClick={() => handleExcluir(user.id)}>
            <img className='excluir' src={Excluir} alt="excluir" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
