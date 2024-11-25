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