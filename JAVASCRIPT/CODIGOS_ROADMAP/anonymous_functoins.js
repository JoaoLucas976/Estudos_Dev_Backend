let minhaFuncao = function (){
    console.log('Essa é minha função')
}
minhaFuncao(); // 'Essa é a minha função'

// Exemplo comum de uso
setTimeout(function (){
    console.log("Executado após 1 segundo")
}, 1000);

// Exemplo de execução imediatamente após a declaração (IIFE)
(function(){
    console.log('IIFE executada imediatamente')
})();

// Exemplo usando map
let numbers = [1, 2, 3, 4, 5]
let dobrados = numbers.map(function(x){
    return x*2;
});
console.log(dobrados) // [2, 4, 6, 8, 10]

// Exemplo usando arrow function
let dobrar = x => x * 2;
console.log(dobrar(4)) // 8