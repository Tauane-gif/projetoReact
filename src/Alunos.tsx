import './Aluno.css'

type AlunoCardProps = {
    nome: string,
    idade: number,
    curso: string
} 

function Aluno({nome, idade, curso}: AlunoCardProps){
    return (
        <section className='card'> {/*Fragmemt*/}
        <h2>{nome}</h2>
        <p>Idade: {idade}</p>
        <p>Curso: {curso}</p>
        </section> 


    );
}
export default Aluno