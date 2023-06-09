function AnimalDeEstimacao(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.comer = function(comida) {
        if (!comida) {
            console.log(`${this.nome} está comendo...`)
        } else {
            console.log(`${this.nome} está comendo ${comida}...`)
        }
    }
}

function Cachorro(nome, idade) {
    AnimalDeEstimacao.call(this, nome, idade);

    this.latir = function() {
        console.log(`${this.nome} está latindo...`);
    }
}

function Gato(nome, idade) {
    AnimalDeEstimacao.call(this, nome, idade);

    this.miar = function() {
        console.log(`${this.nome} está miando...`);
    }
}

bob = new Cachorro('Bob', 5);
billy = new Cachorro('Billy', 7);

mel = new Gato('Mel', 12);
tom = new Gato('Tom', 2);

bob.latir();
billy.comer();
mel.miar();
tom.comer('peixe');
