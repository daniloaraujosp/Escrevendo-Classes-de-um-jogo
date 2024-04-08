let jogador = {
    nomeJogador: "Danilo",
    idadeJogador: 28,
}

generateJogador(jogador)

function generateJogador(jogador){
    console.log(`\n------------------------`)
    console.log(`O Jogador é ${jogador.nomeJogador}`)
    console.log(`A idade é ${jogador.idadeJogador}`)
    console.log(`------------------------\n`)
    
}

class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque;
        if (this.tipo === "mago") {
            ataque = "magia";
        }
        else if (this.tipo === "guerreiro"){
            ataque = "espada";
        }
        else if (this.tipo === "monge"){
            ataque = "artes marciais";
        }
        else if (this.tipo === "ninja"){
            ataque = "shuriken";
        }
        console.log(`O ${this.nome}, do tipo ${this.tipo} atacou usando ${ataque}.\n`)
    }
}

let player1 = new heroi("Presto", 18, "mago")
let player2 = new heroi("Erik", 25, "guerreiro")
let player3 = new heroi("Shung", 45, "monge")
let player4 = new heroi("Kakaroto", 23, "ninja")

player1.atacar()
player2.atacar()
player3.atacar()
player4.atacar()




