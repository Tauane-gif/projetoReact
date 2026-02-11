import alunos from "./alunos.json"

import './App.css'
import AlunoCard from './components/AlunoCard/AlunoCard'

function App() {
  return (
    <>
      <h1>Lista de Alunos</h1>

      {alunos.map((aluno, index) => (
        <AlunoCard
          key={index}
          nome={aluno.nome}
          idade={aluno.idade}
          curso={aluno.curso}
        />
      ))}
    </>
  )
}

export default App