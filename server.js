import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(cors());
app.use(express.json());

let users = [
  { id: 'j43b5jh4b5h345b', name: 'Allan', age: 18, email: 'allan@gmail.com' },
  { id: 'j43b45nkbk345h345b', name: 'Helo', age: 18, email: 'helo@gmail.com' }
];

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
  const { name, age, email } = req.body;
  const newUser = { id: uuidv4(), name, age, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id !== id);
  res.json({ message: 'Usuário removido' });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
