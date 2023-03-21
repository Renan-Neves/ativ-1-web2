export default class Usuario{
    public nome: string
    public sobrenome: string
    public idade: string
    public país: string

    constructor(nome: string, sobrenome: string, idade: string, país: string){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.país = país
    }
} 