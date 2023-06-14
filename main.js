const boletim = [
    {nome: 'Nicolas', nota: 8},
    {nome: 'Gabriel', nota: 9},
    {nome: 'Caio', nota: 5},
    {nome: 'Ricardo', nota: 4},
    {nome: 'Lucas', nota: 6},
    {nome: 'Gustavo', nota: 3},
    {nome: 'Fernando', nota: 10}
]

const aprovados = boletim.filter(aluno => aluno.nota >= 6);

console.log(aprovados);