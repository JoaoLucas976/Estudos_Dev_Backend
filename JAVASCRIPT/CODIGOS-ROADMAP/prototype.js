/*
    Prototype é o pai de um objeto, ou seja, de onde ele herdou suas caracterísiticas como métodos e funções.
    O prototype Object é o início de todos os prototypes, seu prototype é o null, o final da prototype chain
    Qualquer variável em JS herda de um prototype derivado de Object
    Ex:
    arr = []      // Herda de new Array()
    num = 10      // Herda de new Number()
    boo = true    // Herda de new Boolean()
    str = 'texto' // Herda de new String()
*/

let arr = [];
let num = 10;
let boo = true;
let str = 'texto';

console.log(arr.__proto__)
console.log(num.__proto__)
console.log(boo.__proto__)
console.log(str.__proto__)

const animal = {
    tipo: 'Animal',
    som: 'Som de Animal',
    emitirSons: function(){
        console.log(this.som)
    }
}

const gato = {
    tipo: 'Gato',
    som: 'Miau',
    emitirSons: function(){
        console.log(this.som + this.som)
    }
}

const cachorro = {
    tipo: 'Cachorro',
    som: 'Au',
    emitirSons: function(){
        console.log(this.som + this.som)
    }
}

const tartaruga = {
    tipo: 'Tartaruga',
}

const leao = {
    tipo: 'Leão',
    som: 'ROAR'
}

Object.setPrototypeOf(leao, animal)

leao.emitirSons()

// Object.setPrototypeOf(tartaruga, animal)
// tartaruga.emitirSons()

console.log(Object.getPrototypeOf(leao))